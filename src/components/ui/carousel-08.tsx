"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
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
    category: "CLOUD & ARQUITETURA EM NUVEM",
    title: (
      <>
        Estruturação de
        <br />
        Cloud Computing
      </>
    ),
    description: "Ambientes em nuvem escaláveis, migração para cloud, automação serverless e alta resiliência corporativa.",
    explanation: "Arquitetura e provisionamento em nuvem (AWS, GCP, Cloudflare) com foco em alta disponibilidade, segurança e otimização contínua de custos (FinOps).",
    features: [
      "Arquitetura e migração para cloud",
      "Infraestrutura como Código (IaC) e CI/CD",
      "Bancos gerenciados e microsserviços",
      "Otimização FinOps e alta resiliência",
    ],
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75",
    alt: "Serviços de Estruturação de Cloud, Arquitetura em Nuvem e Infraestrutura Escalável — Suporte In Tech",
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
    description: "Criação de sites profissionais, plataformas modernas, interfaces fluidas e sistemas sob medida para seu negócio.",
    explanation: "Criação de sites e software sob medida com tecnologias modernas, velocidade extrema, código limpo e arquitetura escalável.",
    features: [
      "Sites corporativos, portais e landing pages",
      "Sistemas web e plataformas sob medida",
      "Integrações de APIs REST e bancos de dados",
      "SEO técnico e alta performance",
    ],
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75",
    alt: "Criação de Sites Profissionais, Desenvolvimento de Software Sob Medida e Sistemas Web — Suporte In Tech",
  },
  {
    id: "3",
    category: "INTELIGÊNCIA ARTIFICIAL & MCP",
    title: (
      <>
        Criação de MCPs &
        <br />
        Agentes de IA
      </>
    ),
    description: "Desenvolvimento de servidores Model Context Protocol (MCP) e integrações para agentes autônomos de IA.",
    explanation: "Servidores e ferramentas sob o padrão Model Context Protocol (MCP) para conectar LLMs e agentes de IA aos seus dados e sistemas internos.",
    features: [
      "Servidores MCP customizados",
      "Conexão de LLMs a bancos e APIs internas",
      "Ferramentas para agentes autônomos",
      "Sandboxing e controle de permissões",
    ],
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=75",
    alt: "Criação de MCPs, Desenvolvimento de Servidores Model Context Protocol e Integrações de IA — Suporte In Tech",
  },
  {
    id: "4",
    category: "UI/UX & PRODUTO DIGITAL",
    title: (
      <>
        Design de Interfaces
        <br />
        & Experiência
      </>
    ),
    description: "Identidade visual sofisticada, prototipagem avançada e jornadas fluidas focadas em conversão.",
    explanation: "Concepção de interfaces de alto padrão e usabilidade intuitiva para fortalecer a autoridade da sua marca e maximizar conversões.",
    features: [
      "Design de interfaces web e mobile (UI/UX)",
      "Prototipagem interativa e fluxos de navegação",
      "Design systems e diretrizes visuais escaláveis",
      "Redesign de plataformas e produtos digitais",
    ],
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=75",
    alt: "Design de Interfaces UI/UX, Prototipagem e Design Systems — Suporte In Tech",
  },
];

const arrowClass =
  "shrink-0 grid place-items-center size-9 sm:size-12 lg:size-14 rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:pointer-events-none cursor-pointer";

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
            opts={{
              align: "start",
              dragFree: false,
              breakpoints: {
                "(min-width: 640px)": {
                  align: "start",
                  containScroll: "trimSnaps",
                  dragFree: true,
                },
              },
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0 sm:-ml-6 px-0 sm:px-8 lg:px-12 py-4">
              {cards.map((card) => {
                const isFlipped = !!flippedCards[card.id];

                return (
                  <CarouselItem
                    key={card.id}
                    className="basis-full sm:basis-auto flex justify-center sm:block pl-0 sm:pl-6"
                  >
                    <div
                      onPointerDown={handlePointerDown}
                      onClick={(e) => handleCardClick(card.id, e)}
                      className="group relative w-[280px] h-[480px] sm:w-[325px] sm:h-[510px] lg:w-[360px] lg:h-[540px] border border-border/60 overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl bg-neutral-950 select-none transition-all duration-300"
                    >
                      {/* FACE 1: FOTO E VISÃO PRINCIPAL */}
                      <div
                        className={cn(
                          "absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-7 transition-all duration-500 ease-in-out",
                          isFlipped
                            ? "opacity-0 scale-95 pointer-events-none -translate-y-3"
                            : "opacity-100 scale-100 pointer-events-auto translate-y-0"
                        )}
                      >
                        {/* Imagem de Fundo otimizada via next/image */}
                        <Image
                          src={card.src}
                          alt={card.alt || (typeof card.title === "string" ? card.title : card.category)}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradiente de contraste */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none" />

                        {/* Título e Breve Descrição */}
                        <div className="relative z-10 flex flex-col gap-2 sm:gap-2.5 text-white">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight drop-shadow-sm">
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
                            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full shadow-md bg-white hover:bg-neutral-100 cursor-pointer flex items-center justify-center transition-transform group-hover:scale-105"
                            aria-label="Ver explicação do serviço"
                          >
                            <ArrowUpRight className="h-5 w-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45 will-change-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* FACE 2: EXPLICAÇÃO DETALHADA */}
                      <div
                        className={cn(
                          "absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-7 bg-[#121212] text-white transition-all duration-500 ease-in-out border border-white/10 rounded-3xl",
                          isFlipped
                            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                            : "opacity-0 scale-105 pointer-events-none translate-y-3"
                        )}
                      >
                        {/* Gradiente radial sutil de acabamento */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

                        {/* Área Superior de Conteúdo */}
                        <div className="relative z-10 flex flex-col gap-2 sm:gap-2.5">
                          {/* Categoria / Tag Superior */}
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            {card.category}
                          </span>

                          {/* Título Principal */}
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
                            {card.title}
                          </h3>

                          {/* Explicação breve do serviço */}
                          <p className="text-xs sm:text-[13px] lg:text-sm text-neutral-300 leading-relaxed font-normal">
                            {card.explanation}
                          </p>

                          {/* Lista de Recursos / Escopo do Serviço */}
                          {card.features && card.features.length > 0 && (
                            <ul className="flex flex-col gap-1.5 sm:gap-2 mt-1 sm:mt-2 pt-2.5 sm:pt-3 border-t border-white/10">
                              {card.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs lg:text-sm text-neutral-300 leading-snug">
                                  <span className="size-1.5 rounded-full bg-white shrink-0 mt-1 shadow-xs" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Rodapé / Barra de Ação (Com "Voltar") */}
                        <div className="relative z-10 flex items-center justify-start pt-3 sm:pt-4 border-t border-white/10 mt-auto">
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
