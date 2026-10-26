import * as React from "react";
import StackingCards, { type ProjectData } from "@/components/ui/stacking-card";

const projects: ProjectData[] = [
  {
    category: "Engenharia de Software • Case de Sucesso",
    title: "Construção de Plataformas Web — SOBEI",
    description:
      "Desenvolvimento completo do ecossistema de software da instituição: API central em Spring Boot, 4 portais web em Next.js (Institucional, Canal de Ética, Congresso e Backoffice) e Design System autoral.",
    link: "/projetos/sobei-cover.webp",
    color: "#0A193F",
    href: "/projetos/sobei",
  },
  {
    category: "Infraestrutura & Redes • Case de Sucesso",
    title: "Reestruturação Logística de Redes — SOBEI",
    description:
      "Projeto concebido para mapear e documentar a infraestrutura existente nas dependências da SOBEI, identificando gargalos e oportunidades de melhoria para facilitar manutenções futuras através de um mapa lógico e interativo da rede.",
    link: "/projetos/sobei-redes-cover.webp",
    color: "#364562",
    href: "/projetos/redes-sobei",
  },
];

export function ProjectsSection() {
  return (
    <section id="portfolio" className="w-full max-w-full py-16 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 sm:px-8 lg:px-12 mb-4 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2 block">
              Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Projetos em Destaque
            </h2>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md">
            Alguns dos desafios que transformamos em resultados. Use as setas para navegar entre os projetos.
          </p>
        </div>

        <div className="px-3 sm:px-8 lg:px-12">
          <StackingCards projects={projects} className="mx-auto max-w-6xl" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
