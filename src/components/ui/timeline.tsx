"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface JourneyItem {
  id: string;
  year: string;
  month: string;
  content: string;
  order?: number;
}

export const defaultJourneySteps: JourneyItem[] = [
  {
    id: "etapa-01",
    year: "01",
    month: "Diagnóstico & Auditoria",
    content:
      "Mapeamento de infraestrutura de TI, análise de gargalos operacionais e definição clara de requisitos para cloud, sistemas web, plataformas sob medida e inteligência artificial.",
    order: 1,
  },
  {
    id: "etapa-02",
    year: "02",
    month: "Arquitetura & Estratégia",
    content:
      "Desenho da arquitetura em nuvem escalável, esteiras de automação CI/CD, especificação de microsserviços, modelagem de banco de dados e APIs REST.",
    order: 2,
  },
  {
    id: "etapa-03",
    year: "03",
    month: "Desenvolvimento & Engenharia",
    content:
      "Provisionamento de infraestrutura como código (IaC), desenvolvimento de software sob medida, criação de sites performáticos e servidores MCP conectados a IA.",
    order: 3,
  },
  {
    id: "etapa-04",
    year: "04",
    month: "Design & Experiência (UI/UX)",
    content:
      "Prototipagem interativa de alta fidelidade no Figma, aplicação de Design System consistente, testes de usabilidade e interfaces modernas focadas em alta conversão.",
    order: 4,
  },
  {
    id: "etapa-05",
    year: "05",
    month: "Homologação & Testes QA",
    content:
      "Testes automatizados, simulação de estresse de carga, auditoria de segurança em nuvem, validação de latência e conformidade com a LGPD.",
    order: 5,
  },
  {
    id: "etapa-06",
    year: "06",
    month: "Go-Live com Zero Downtime",
    content:
      "Deploy automatizado e virada de chave planejada sem interromper um único segundo da sua operação.",
    order: 6,
  },
  {
    id: "etapa-07",
    year: "07",
    month: "Sustentação & Suporte 24/7",
    content:
      "Observabilidade contínua, telemetria em tempo real, otimização de custos FinOps e SLA corporativo garantido.",
    order: 7,
  },
];

export interface TimelineProps {
  title?: string;
  periodLabel?: string;
  items?: JourneyItem[];
}

export default function Timeline({
  items = defaultJourneySteps,
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);

  const containerRef = React.useRef<HTMLElement>(null);
  const triggerRef = React.useRef<ScrollTrigger | null>(null);
  const prevIndexRef = React.useRef(0);
  const activeIndexRef = React.useRef(0);

  // Controle de trava contra avanço múltiplo acidental (inércia de trackpads / scrolls rápidos)
  const isTransitioningRef = React.useRef(false);
  const lockTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const minLockUntilRef = React.useRef(0);

  const totalSteps = items.length;
  const currentStep = items[activeIndex] ?? items[0];

  // Mantém a ref sincronizada com o estado
  React.useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Transição estrita de exatamente 1 etapa com sincronização suave do scroll
  const goToStep = React.useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(totalSteps - 1, index));
      if (clampedIndex === activeIndexRef.current) return;

      const newDirection = clampedIndex > activeIndexRef.current ? 1 : -1;
      setDirection(newDirection);
      prevIndexRef.current = clampedIndex;
      activeIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);

      // Trava de segurança para que uma única rolagem nunca passe mais de 1 etapa
      isTransitioningRef.current = true;
      minLockUntilRef.current = Date.now() + 500;

      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      lockTimerRef.current = setTimeout(() => {
        isTransitioningRef.current = false;
      }, 500);

      const trigger = triggerRef.current;
      if (trigger && typeof window !== "undefined") {
        const totalDistance = trigger.end - trigger.start;
        const stepRatio = totalSteps > 1 ? clampedIndex / (totalSteps - 1) : 0;
        const targetScroll = trigger.start + stepRatio * totalDistance;

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [totalSteps]
  );

  // Sincronização com o scroll da página via ScrollTrigger
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        onUpdate: (self) => {
          // Ignora updates automáticos intermediários enquanto a etapa está sendo animada via rolagem controlada
          if (isTransitioningRef.current) return;

          const p = Math.max(0, Math.min(0.9999, self.progress));
          const nextIndex = Math.min(
            totalSteps - 1,
            Math.max(0, Math.round(p * (totalSteps - 1)))
          );

          if (nextIndex !== prevIndexRef.current) {
            setDirection(nextIndex > prevIndexRef.current ? 1 : -1);
            prevIndexRef.current = nextIndex;
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        },
      });

      triggerRef.current = trigger;
    }, el);

    return () => {
      ctx.revert();
      triggerRef.current = null;
    };
  }, [totalSteps]);

  // Interceptação de eventos wheel para assegurar exatamente 1 etapa por rolagem
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Seção está fixada na tela (sticky ativa ocupando a viewport)
      const isStickyActive = rect.top <= 5 && rect.bottom >= viewportHeight - 5;
      if (!isStickyActive) return;

      // Ignora micro-movimentos acidentais
      if (Math.abs(e.deltaY) < 15) return;

      const currentIndex = activeIndexRef.current;

      // Se ainda estiver no período de transição/amortecimento da rolagem anterior
      if (isTransitioningRef.current) {
        // Absorve a inércia do mesmo gesto se ainda houver etapas antes dos limites
        if (
          (e.deltaY > 0 && currentIndex < totalSteps - 1) ||
          (e.deltaY < 0 && currentIndex > 0)
        ) {
          e.preventDefault();
        }

        // Renova o tempo de amortecimento para que o mesmo swipe contínuo não passe 2 etapas
        if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
        const remainingMin = Math.max(0, minLockUntilRef.current - Date.now());
        const waitTime = Math.max(remainingMin, 180);

        lockTimerRef.current = setTimeout(() => {
          isTransitioningRef.current = false;
        }, waitTime);

        return;
      }

      // 1 Rolagem para baixo: passa rigorosamente 1 etapa
      if (e.deltaY > 0) {
        if (currentIndex < totalSteps - 1) {
          e.preventDefault();
          goToStep(currentIndex + 1);
        }
        // Se já estiver na última etapa (07), deixa o scroll nativo seguir para a seção seguinte
      } else if (e.deltaY < 0) {
        // 1 Rolagem para cima: volta rigorosamente 1 etapa
        if (currentIndex > 0) {
          e.preventDefault();
          goToStep(currentIndex - 1);
        }
        // Se já estiver na primeira etapa (01), deixa o scroll nativo seguir para cima
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [totalSteps, goToStep]);

  // Navegação acessível via teclado quando a trilha estiver ativa
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isStickyActive = rect.top <= 5 && rect.bottom >= viewportHeight - 5;
      if (!isStickyActive) return;

      const currentIndex = activeIndexRef.current;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentIndex < totalSteps - 1) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            goToStep(currentIndex + 1);
          }
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentIndex > 0) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            goToStep(currentIndex - 1);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalSteps, goToStep]);

  // Suporte a swipe por toque em dispositivos móveis
  React.useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const el = containerRef.current;
      if (!el || e.changedTouches.length === 0) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isStickyActive = rect.top <= 5 && rect.bottom >= viewportHeight - 5;
      if (!isStickyActive) return;

      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 45) return;

      const currentIndex = activeIndexRef.current;
      if (deltaY > 0) {
        if (currentIndex < totalSteps - 1) {
          goToStep(currentIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          goToStep(currentIndex - 1);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [totalSteps, goToStep]);

  return (
    <section
      ref={containerRef}
      id="como-trabalhamos"
      className="relative w-full bg-background select-none h-[300vh]"
    >
      {/* Container Sticky que fixa a tela durante o scroll vertical */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col h-full max-h-[85vh] justify-center">
          {/* Grid Principal: Trilha Vertical Minimalista à Esquerda + Foco no Tópico à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-1 py-8 overflow-hidden">
            
            {/* COLUNA ESQUERDA: Tópicos Tipográficos Limpos */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-center py-6">
              {/* Lista dos 7 Tópicos com tipografia pura, sem linhas laterais */}
              <nav aria-label="Passos da Metodologia" className="space-y-6">
                {items.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToStep(idx)}
                      className="group flex items-center gap-4 text-left transition-colors cursor-pointer outline-none w-full"
                    >
                      {/* Ponto indicador sutil */}
                      <div className="flex items-center justify-center shrink-0 w-3">
                        <div
                          className={cn(
                            "rounded-full transition-all duration-300",
                            isActive
                              ? "size-2.5 bg-foreground ring-4 ring-foreground/15 shadow-sm"
                              : isPast
                              ? "size-1.5 bg-foreground/60"
                              : "size-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                          )}
                        />
                      </div>

                      {/* Rótulo da Etapa */}
                      <div className="flex items-baseline gap-2.5 min-w-0">
                        <span
                          className={cn(
                            "font-mono text-xs transition-colors",
                            isActive
                              ? "text-foreground font-semibold"
                              : "text-muted-foreground/50 group-hover:text-muted-foreground"
                          )}
                        >
                          {item.year}.
                        </span>
                        <span
                          className={cn(
                            "text-sm tracking-tight truncate transition-colors",
                            isActive
                              ? "text-foreground font-semibold"
                              : isPast
                              ? "text-muted-foreground/80 group-hover:text-foreground"
                              : "text-muted-foreground/50 group-hover:text-muted-foreground"
                          )}
                        >
                          {item.month}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* COLUNA DIREITA: Destaque do Tópico Ativo com Identidade Visual Limpa e Original */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: direction === 1 ? 16 : -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction === 1 ? -16 : 16 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col justify-between max-w-2xl py-4"
                >
                  <div className="space-y-6">
                    {/* Título Principal com Tipografia Editorial Idêntica à Original */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                      <span className="font-mono font-normal opacity-50 mr-3 text-2xl sm:text-3xl lg:text-4xl">
                        {currentStep.year}.
                      </span>
                      {currentStep.month}
                    </h3>

                    {/* Descrição Limpa e Direta */}
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed">
                      {currentStep.content}
                    </p>
                  </div>

                  {/* Rodapé Sutil com Ação Discreta */}
                  <div className="mt-12 pt-6 border-t border-border/40 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (activeIndex < totalSteps - 1) {
                          goToStep(activeIndex + 1);
                        } else {
                          const nextSection = document.getElementById("projetos");
                          if (nextSection) {
                            nextSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Próxima etapa
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mini-seletor no Mobile (abaixo de 1024px) */}
          <div className="flex lg:hidden items-center justify-center gap-2 pt-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToStep(idx)}
                aria-label={`Ir para etapa ${idx + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all duration-300 cursor-pointer",
                  idx === activeIndex
                    ? "w-6 bg-foreground"
                    : idx < activeIndex
                    ? "w-2 bg-foreground/40"
                    : "w-2 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
