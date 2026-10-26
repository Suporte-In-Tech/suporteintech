"use client";

import * as React from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  category: string;
  title: ReactNode;
  src: string;
  alt?: string;
  description?: string;
  explanation: string;
  features?: string[];
}

const cards: CardItem[] = [
  {
    id: "1",
    category: "INFRAESTRUTURA & REDES",
    title: (
      <>
        Arquitetura e Logística
        <br />
        de Redes
      </>
    ),
    description: "Estruturação de redes corporativas de alta disponibilidade, roteamento inteligente e logística de TI.",
    explanation: "Planejamos, instalamos e gerenciamos sua infraestrutura de conectividade com foco em máxima estabilidade, segurança de tráfego e logística ágil para reposição de equipamentos.",
    features: [
      "Cabeamento estruturado & fibra óptica",
      "Roteadores, switches e firewalls",
      "Redes corporativas de alta densidade",
      "Logística de peças e suporte contínuo",
    ],
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
    alt: "Conectividade e Cabos de Rede",
  },
  {
    id: "2",
    category: "ENGENHARIA DE SOFTWARE",
    title: (
      <>
        Desenvolvimento
        <br />
        Web & Aplicações
      </>
    ),
    description: "Plataformas modernas, interfaces fluidas e sistemas escaláveis sob medida para seu negócio.",
    explanation: "Construção de aplicações digitais com tecnologia de ponta, velocidade extrema, código limpo e arquitetura escalável para potencializar suas operações online.",
    features: [
      "Portais web e landing pages de conversão",
      "Sistemas e plataformas sob medida",
      "Integrações de APIs e bancos de dados",
      "Otimização de SEO técnico e performance",
    ],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
    alt: "Computador com código e desenvolvimento",
  },
  {
    id: "3",
    category: "UI/UX & PRODUTO",
    title: (
      <>
        Design de Interfaces
        <br />& Experiência
      </>
    ),
    description: "Identidade visual sofisticada, prototipagem avançada e jornadas que convertem usuários.",
    explanation: "Concepção visual de alto padrão aliada à usabilidade intuitiva. Desenhamos produtos que reforçam a autoridade da sua marca e encantam os usuários em cada interação.",
    features: [
      "Design de interfaces web e mobile (UI/UX)",
      "Prototipagem interativa e fluxos de usuário",
      "Design systems e diretrizes de marca",
      "Redesign moderno de plataformas legadas",
    ],
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
    alt: "Processo criativo de design",
  },
  {
    id: "4",
    category: "MARKETING & PERFORMANCE",
    title: (
      <>
        Marketing Digital
        <br />& Performance
      </>
    ),
    description: "Estratégias orientadas a conversão, branding digital e presença com autoridade online.",
    explanation: "Estratégias orientadas a dados para posicionar sua empresa nos canais certos, atraindo clientes qualificados e maximizando o retorno sobre investimento.",
    features: [
      "Gestão de tráfego pago (Google e Meta)",
      "Posicionamento orgânico e conteúdo",
      "Funis de atração e conversão de leads",
      "Análise de métricas e relatórios de ROI",
    ],
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    alt: "Marketing Digital e Gestão de Performance",
  },
];

const arrowClass =
  "shrink-0 grid place-items-center size-10 sm:size-12 lg:size-14 rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none cursor-pointer";

export function AppleCardCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);
  const [flippedCards, setFlippedCards] = React.useState<Record<string, boolean>>({});
  const dragStartPos = React.useRef<{ x: number; y: number } | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    api.on("scroll", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
      api.off("scroll", update);
    };
  }, [api]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleCardClick = (id: string, e: React.MouseEvent) => {
    if (dragStartPos.current) {
      const dx = Math.abs(e.clientX - dragStartPos.current.x);
      const dy = Math.abs(e.clientY - dragStartPos.current.y);
      if (dx > 10 || dy > 10) {
        return; // Detecção de arraste no carrossel para não alternar o card
      }
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="servicos" className="w-full max-w-full py-16 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-6 sm:px-8 lg:px-12 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2 block">
              Soluções Especializadas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Nossos Serviços
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            Clique em qualquer card para conhecer os detalhes e o escopo de cada serviço prestado.
          </p>
        </div>

        {/* Card Strip com Setas Flutuantes */}
        <div className="relative w-full">
          {/* Seta Flutuante Esquerda */}
          <button
            id="services-carousel-prev"
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Serviço anterior"
            className={cn(
              arrowClass,
              "absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30"
            )}
          >
            <ArrowLeft className="size-4 sm:size-5" />
          </button>

          {/* Carousel ocupando toda a largura */}
          <Carousel
            setApi={setApi}
            opts={{ align: "start", dragFree: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 px-6 sm:px-8 lg:px-12 py-4">
                  {cards.map((card) => {
                    const isFlipped = !!flippedCards[card.id];

                    return (
                      <CarouselItem key={card.id} className="pl-6 basis-auto">
                        <div
                          onPointerDown={handlePointerDown}
                          onClick={(e) => handleCardClick(card.id, e)}
                          className="group relative w-[280px] h-[460px] sm:w-[320px] sm:h-[500px] lg:w-[360px] lg:h-[540px] border border-border/60 overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl bg-neutral-950 select-none transition-all duration-300"
                        >
                          {/* FACE 1: FOTO E VISÃO PRINCIPAL */}
                          <div
                            className={cn(
                              "absolute inset-0 flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 ease-in-out",
                              isFlipped
                                ? "opacity-0 scale-95 pointer-events-none -translate-y-3"
                                : "opacity-100 scale-100 pointer-events-auto translate-y-0"
                            )}
                          >
                            {/* Imagem de Fundo com transição suave */}
                            <img
                              src={card.src}
                              alt={card.alt || (typeof card.title === "string" ? card.title : card.category)}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradiente de contraste */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none" />

                            {/* Título e Breve Descrição */}
                            <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3 text-white">
                              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight drop-shadow-sm">
                                {card.title}
                              </h3>
                              {card.description && (
                                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-3 mt-1">
                                  {card.description}
                                </p>
                              )}
                            </div>

                            {/* Botão Inferior com indicação de clique */}
                            <div className="relative z-10 flex items-center justify-between pt-4">
                              <span className="text-xs text-white/80 font-medium tracking-wide">
                                Toque para saber mais
                              </span>
                              <Button
                                size="icon"
                                type="button"
                                className="h-11 w-11 rounded-full shadow-md bg-white hover:bg-neutral-100 cursor-pointer flex items-center justify-center transition-transform group-hover:scale-105"
                                aria-label="Ver explicação do serviço"
                              >
                                <ArrowUpRight className="h-5 w-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45 will-change-transform" />
                              </Button>
                            </div>
                          </div>

                          {/* FACE 2: EXPLICAÇÃO DETALHADA */}
                          <div
                            className={cn(
                              "absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-[#121212] text-white transition-all duration-500 ease-in-out border border-white/10 rounded-3xl",
                              isFlipped
                                ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                                : "opacity-0 scale-105 pointer-events-none translate-y-3"
                            )}
                          >
                            {/* Gradiente radial sutil de acabamento */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

                            {/* Área Superior de Conteúdo */}
                            <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
                              {/* Categoria / Tag Superior */}
                              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                                {card.category}
                              </span>

                              {/* Título Principal */}
                              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                                {card.title}
                              </h3>

                              {/* Explicação breve do serviço */}
                              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                                {card.explanation}
                              </p>

                              {/* Lista de Recursos / Escopo do Serviço */}
                              {card.features && card.features.length > 0 && (
                                <ul className="flex flex-col gap-2 mt-2 pt-3 border-t border-white/10">
                                  {card.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                                      <span className="size-1.5 rounded-full bg-white shrink-0 shadow-xs" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>

                            {/* Rodapé / Barra de Ação (Com "Voltar") */}
                            <div className="relative z-10 flex items-center justify-start pt-4 border-t border-white/10 mt-auto">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFlippedCards((prev) => ({ ...prev, [card.id]: false }));
                                }}
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
                              >
                                <ArrowLeft className="size-3.5" />
                                <span>Voltar</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                                  {/* Espaçador final proporcional para igualar as margens esquerda e direita no fim do carrossel */}
                  <div
                    className="shrink-0 basis-6 sm:basis-8 lg:basis-12 pointer-events-none"
                    aria-hidden="true"
                  />
                </CarouselContent>
              </Carousel>

              {/* Seta Flutuante Direita */}
              <button
                id="services-carousel-next"
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Próximo serviço"
                className={cn(
                  arrowClass,
                  "absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30"
                )}
              >
                <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
      </div>
    </section>
  );
}

export default AppleCardCarousel;
