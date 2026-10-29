"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/ui/timeline"), {
  ssr: false,
  loading: () => (
    <div
      id="como-trabalhamos"
      className="h-[240vh] sm:h-[260vh] w-full bg-background"
      aria-hidden="true"
    />
  ),
});

const methodologySeoSteps = [
  {
    step: "01",
    title: "Diagnóstico & Auditoria",
    description:
      "Mapeamento rigoroso de infraestrutura de TI, análise de tráfego, gargalos operacionais e definição clara de escopo técnico para criação de sites, sistemas web e redes.",
  },
  {
    step: "02",
    title: "Arquitetura & Estratégia",
    description:
      "Desenho da topologia de rede, especificação de switches e firewalls, e definição da arquitetura de software, APIs e banco de dados.",
  },
  {
    step: "03",
    title: "Desenvolvimento & Engenharia",
    description:
      "Montagem de racks, conectorização, desenvolvimento de software sob medida, criação de sites rápidos e estruturação de bancos de dados escaláveis.",
  },
  {
    step: "04",
    title: "Design & Experiência (UI/UX)",
    description:
      "Prototipagem interativa, aplicação de Design System, testes de usabilidade e criação de interfaces responsivas focadas em alta conversão.",
  },
  {
    step: "05",
    title: "Homologação & Testes QA",
    description:
      "Simulação de estresse, validação de latência, auditoria de segurança perimetral, adequação à LGPD e aprovação junto ao cliente.",
  },
  {
    step: "06",
    title: "Go-Live com Zero Downtime",
    description:
      "Transição suave e virada de chave planejada para colocar seu novo site, software ou rede em produção sem interromper a operação da empresa.",
  },
  {
    step: "07",
    title: "Sustentação & Suporte 24/7",
    description:
      "Monitoramento proativo contínuo, telemetria em tempo real, manutenção evolutiva e resposta ágil com SLA corporativo garantido.",
  },
];

export function MethodologySection() {
  return (
    <div className="w-full">
      {/* Cabeçalho da Metodologia - Mesma estrutura e alinhamento de Nossos Serviços */}
      <section className="w-full pt-16 sm:pt-24 pb-8 sm:pb-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2 block">
                Como Trabalhamos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Metodologia & Processos
              </h2>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md">
              Nossa esteira técnica combina rigor de engenharia com agilidade corporativa. Acompanhe o passo a passo da jornada que garante entregas com zero downtime e máxima estabilidade.
            </p>
          </div>
        </div>

        {/* Estrutura semântica SSR para indexação integral das 7 etapas pelos motores de busca */}
        <ol className="sr-only">
          {methodologySeoSteps.map((item) => (
            <li key={item.step}>
              <h3>
                {item.step}. {item.title}
              </h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Linha do Tempo Horizontal Interativa com Scroll Pinned */}
      <Timeline
        title="Metodologia & Processos"
        periodLabel="Metodologia & Processo — SuporteInTech"
      />
    </div>
  );
}

export default MethodologySection;
