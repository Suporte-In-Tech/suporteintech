import * as React from "react";
import Link from "next/link";
import StackingCards, { type ProjectData } from "@/components/ui/stacking-card";

const projects: ProjectData[] = [
  {
    category: "Engenharia de Software • Projeto",
    title: "Construção de Plataformas Web — SOBEI",
    description:
      "Desenvolvimento completo do ecossistema de software da instituição: API central em Spring Boot, 4 portais web em Next.js (Institucional, Canal de Ética, Congresso e Backoffice) e Design System autoral.",
    link: "/projetos/sobei-cover.webp",
    color: "#0A193F",
    href: "/projetos/sobei",
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
              Projeto em Destaque
            </h2>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-md">
            Um dos principais desafios técnicos que transformamos em resultados concretos para nossos clientes.
          </p>
        </div>

        <div className="px-3 sm:px-8 lg:px-12">
          <StackingCards projects={projects} className="mx-auto max-w-6xl" />
        </div>

        {/* Sumário semântico SSR para garantir indexação completa do projeto pelos crawlers */}
        <div className="sr-only">
          {projects.map((project) => (
            <article key={project.href}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.href && (
                <Link href={project.href}>
                  Ver projeto completo: {project.title}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
