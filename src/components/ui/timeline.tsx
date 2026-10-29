// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type JourneyItem = {
  id: string;
  year: string;
  month: string;
  content: string;
  order?: number;
};

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Reveal animation duration, in seconds. */
  duration?: number;
  /** Fallback reveal duration when `duration` is omitted, in seconds. */
  scrollDuration?: number;
  topData?: JourneyItem[];
  bottomData?: JourneyItem[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "etapa-1",
    year: "01",
    month: "Diagnóstico & Auditoria",
    content: "Mapeamento rigoroso de infraestrutura, análise de tráfego, gargalos e definição clara de escopo técnico.",
    order: 1,
  },
  {
    id: "etapa-3",
    year: "03",
    month: "Desenvolvimento & Engenharia",
    content: "Montagem de racks, conectorização, código sob medida e estruturação de bancos de dados escaláveis.",
    order: 3,
  },
  {
    id: "etapa-5",
    year: "05",
    month: "Homologação & Testes QA",
    content: "Simulação de estresse, validação de latência, auditoria de segurança perimetral e aprovação pelo cliente.",
    order: 5,
  },
  {
    id: "etapa-7",
    year: "07",
    month: "Sustentação & Suporte 24/7",
    content: "Monitoramento proativo contínuo, telemetria em tempo real e resposta ágil com SLA corporativo garantido.",
    order: 7,
  },
];

const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "etapa-2",
    year: "02",
    month: "Arquitetura & Estratégia",
    content: "Desenho da topologia de rede, especificação de switches, firewalls e definição de arquitetura de software.",
    order: 2,
  },
  {
    id: "etapa-4",
    year: "04",
    month: "Design & Experiência",
    content: "Prototipagem interativa, testes de usabilidade e criação de interfaces fluidas focadas em alta conversão.",
    order: 4,
  },
  {
    id: "etapa-6",
    year: "06",
    month: "Go-Live com Zero Downtime",
    content: "Transição suave e virada de chave planejada para não interromper um único segundo da operação da sua empresa.",
    order: 6,
  },
];

export default function Timeline({
  textColor = "var(--color-foreground, currentColor)",
  mutedTextColor = "var(--color-muted-foreground, #71717a)",
  activeColor = "var(--color-primary, currentColor)",
  backgroundColor = "var(--color-background, transparent)",
  topData = defaultTopJourneyData,
  bottomData = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const allJourneyItems: JourneyItem[] = [
    ...topData,
    ...bottomData,
  ].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    const yearDiff = Number(a.year) - Number(b.year);
    if (!isNaN(yearDiff) && yearDiff !== 0) return yearDiff;
    return a.id.localeCompare(b.id);
  });

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = wholeSliderRef.current;

    if (!section || !slider) return;

    const items = allJourneyItems;

    // Se preferir movimento reduzido, exibe tudo sem animações
    if (reducedMotion) {
      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
        gsap.set(`.description-${item.id}`, {
          opacity: 1,
          clearProps: "transform",
        });
      });
      gsap.set(".journey-line", { width: "100%" });

      const mm = gsap.matchMedia();
      mm.add("(max-width: 600px)", () => {
        gsap.to(slider, {
          xPercent: -76.8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "92% bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
      mm.add("(min-width: 601px)", () => {
        gsap.to(slider, {
          xPercent: -41.5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "92% bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    }

    // Configuração inicial das hastes, pontos e opacidade
    items.forEach((item) => {
      const isTop = topData.some((topItem) => topItem.id === item.id);
      gsap.set(`.jl-${item.id}`, {
        scaleY: 0,
        transformOrigin: isTop ? "bottom bottom" : "top top",
      });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
    });

    const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
    const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

    items.forEach((item) => {
      try {
        titleSplits[item.id] = new SplitText(`.title-${item.id}`, {
          type: "lines",
          mask: "lines",
        });
        descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
          type: "lines",
          mask: "lines",
        });
      } catch (err) {
        console.warn("SplitText fallback:", err);
      }
    });

    const getTargets = (id: string, type: "title" | "desc") => {
      const split = type === "title" ? titleSplits[id] : descriptionSplits[id];
      if (split?.lines && split.lines.length > 0) {
        return split.lines;
      }
      return type === "title" ? `.title-${id}` : `.description-${id}`;
    };

    // Item 01: Animação de entrada imediata assim que a seção surge na tela
    // Isso garante que ao travar no topo, o Tópico 01 já esteja 100% visível e pronto
    const item1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "top top",
        scrub: true,
      },
    });

    item1Tl
      .fromTo(".jl-etapa-1", { scaleY: 0 }, { scaleY: 1, ease: "none" })
      .fromTo(".jd-etapa-1", { scale: 0 }, { scale: 1, ease: "none" }, "<")
      .fromTo(
        getTargets("etapa-1", "title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        "<0.2"
      )
      .fromTo(
        getTargets("etapa-1", "desc"),
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        "<0.1"
      );

    const mm = gsap.matchMedia();

    const buildTimeline = (slidePercent: number, lineWidth: string) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "92% bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: "none",
        },
      });

      // 1. Movimento horizontal do slider do início (Tópico 01) até o fim (Tópico 07)
      tl.fromTo(
        slider,
        { xPercent: 0 },
        { xPercent: slidePercent, duration: 90, ease: "none" },
        0
      );

      // 2. Crescimento contínuo da linha central guia
      tl.fromTo(
        ".journey-line",
        { width: "0%" },
        { width: lineWidth, duration: 90, ease: "none" },
        0
      );

      // 3. Animações sincronizadas das etapas 02 até 07 conforme deslizam para o campo de visão
      const stepConfig = [
        { id: "etapa-2", time: 12 },
        { id: "etapa-3", time: 26 },
        { id: "etapa-4", time: 40 },
        { id: "etapa-5", time: 54 },
        { id: "etapa-6", time: 68 },
        { id: "etapa-7", time: 80 },
      ];

      stepConfig.forEach(({ id, time }) => {
        tl.fromTo(
          `.jl-${id}`,
          { scaleY: 0 },
          { scaleY: 1, duration: 5, ease: "power1.out" },
          time
        );
        tl.fromTo(
          `.jd-${id}`,
          { scale: 0 },
          { scale: 1, duration: 5, ease: "back.out(2)" },
          time
        );
        tl.fromTo(
          getTargets(id, "title"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 7, ease: "power2.out" },
          time + 1
        );
        tl.fromTo(
          getTargets(id, "desc"),
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 7, ease: "power2.out" },
          time + 2
        );
      });

      return tl;
    };

    // MOBILE (<= 600px): curso amplo até -76.8%
    mm.add("(max-width: 600px)", () => {
      buildTimeline(-76.8, "98%");
    });

    // DESKTOP (> 600px): curso calibrado até -41.5%
    mm.add("(min-width: 601px)", () => {
      buildTimeline(-41.5, "100%");
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      item1Tl.kill();
      Object.values(titleSplits).forEach((split) => split?.revert?.());
      Object.values(descriptionSplits).forEach((split) => split?.revert?.());
    };
  }, { dependencies: [reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="como-trabalhamos"
      className="h-[240vh] sm:h-[260vh] w-full relative overflow-clip select-none"
      style={sectionStyle}
    >
      <div className="h-screen w-full sticky top-0 flex flex-col justify-center items-start overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] max-h-[64vh] w-[165vw] items-center px-[5vw] max-[600px]:h-[62vh] max-[600px]:w-[430vw] max-[600px]:px-[7vw]"
        >
          <div className="relative h-full w-full">
            {/* Linha Central Guia */}
            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 flex items-center h-fit pointer-events-none z-0">
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 shadow-sm"
                style={activeStyle}
              ></div>
              <div
                className="h-0.5 w-[0%] rounded-full journey-line opacity-80"
                style={activeStyle}
              ></div>
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 shadow-sm"
                style={activeStyle}
              ></div>
            </div>

            {/* Metade Superior: Itens Ímpares (01, 03, 05, 07) */}
            <div className="flex h-1/2 w-full items-center justify-start">
              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw] pl-[2vw] max-[600px]:pl-[5vw]">
                {topData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] pl-[2.5vw] pr-[1vw] max-[600px]:w-[70vw] max-[600px]:pl-[5vw] flex flex-col justify-start shrink-0"
                  >
                    {/* Haste Vertical e Ponto Superior conectados à linha base */}
                    <div className="absolute left-0 top-[1.8vw] max-[600px]:top-[2vw] bottom-0 w-8 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                      <div
                        className={`size-[0.85vw] max-[600px]:size-[3.5vw] rounded-full shrink-0 jd-${item.id} shadow-sm z-10`}
                        style={activeStyle}
                      />
                      <div
                        className={`w-0.5 flex-1 origin-bottom jl-${item.id} opacity-85`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="pt-[1vw] max-[600px]:pt-2 space-y-[0.8vw] max-[600px]:space-y-1.5">
                      <h4
                        className={`title-${item.id} text-[2.2vw] font-semibold tracking-tight leading-tight max-[600px]:text-[5.5vw]`}
                      >
                        <span className="opacity-60 font-mono text-[1.8vw] max-[600px]:text-[4.5vw] mr-2">
                          {item.year}.
                        </span>
                        {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.3vw] leading-[1.3] font-normal max-[600px]:w-[95%] max-[600px]:text-[3.8vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metade Inferior: Itens Pares (02, 04, 06) */}
            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw] pl-[18vw] max-[600px]:pl-[60vw]">
                {bottomData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] pl-[2.5vw] pr-[1vw] max-[600px]:w-[70vw] max-[600px]:pl-[5vw] flex flex-col justify-end shrink-0"
                  >
                    {/* Haste Vertical e Ponto Inferior conectados à linha base */}
                    <div className="absolute left-0 top-0 bottom-[1.8vw] max-[600px]:bottom-[2vw] w-8 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                      <div
                        className={`w-0.5 flex-1 origin-top jl-${item.id} opacity-85`}
                        style={activeStyle}
                      />
                      <div
                        className={`size-[0.85vw] max-[600px]:size-[3.5vw] rounded-full shrink-0 jd-${item.id} shadow-sm z-10`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="pb-[1vw] max-[600px]:pb-2 space-y-[0.8vw] max-[600px]:space-y-1.5">
                      <h4
                        className={`title-${item.id} text-[2.2vw] font-semibold tracking-tight leading-tight max-[600px]:text-[5.5vw]`}
                      >
                        <span className="opacity-60 font-mono text-[1.8vw] max-[600px]:text-[4.5vw] mr-2">
                          {item.year}.
                        </span>
                        {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.3vw] leading-[1.3] font-normal max-[600px]:w-[95%] max-[600px]:text-[3.8vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
