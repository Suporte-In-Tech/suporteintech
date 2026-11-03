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

  const totalSteps = items.length;
  const currentStep = items[activeIndex] ?? items[0];

  // Sincronização estritamente vertical com o scroll da página via ScrollTrigger
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
          const p = Math.max(0, Math.min(0.9999, self.progress));
          const nextIndex = Math.min(totalSteps - 1, Math.floor(p * totalSteps));

          if (nextIndex !== prevIndexRef.current) {
            setDirection(nextIndex > prevIndexRef.current ? 1 : -1);
            prevIndexRef.current = nextIndex;
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

  // Navegação direta por clique com scroll suave
  const goToStep = React.useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(totalSteps - 1, index));
      setDirection(clampedIndex >= activeIndex ? 1 : -1);
      prevIndexRef.current = clampedIndex;
      setActiveIndex(clampedIndex);

      const trigger = triggerRef.current;
      if (trigger && typeof window !== "undefined") {
        const stepProgress = (clampedIndex + 0.5) / totalSteps;
        const targetScroll =
          trigger.start + stepProgress * (trigger.end - trigger.start);
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [activeIndex, totalSteps]
  );

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
