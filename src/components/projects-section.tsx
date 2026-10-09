"use client";

import * as React from "react";
import StackingCards, { type ProjectData } from "@/components/ui/stacking-card";

const projects: ProjectData[] = [
  {
    category: "Infraestrutura & Redes",
    title: "Modernização de Data Center",
    description:
      "Reestruturação completa do ambiente de servidores de uma rede de clínicas: novo cabeamento estruturado, virtualização e redundância de energia, com migração realizada sem nenhuma interrupção do atendimento.",
    link: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    color: "#2f4fd8",
  },
  {
    category: "Engenharia de Software",
    title: "Plataforma E-commerce B2B",
    description:
      "Portal de vendas sob medida integrado ao ERP do cliente, com catálogo dinâmico, tabelas de preço por região e checkout otimizado — resultando em pedidos online 3x mais rápidos.",
    link: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    color: "#5b3fd9",
  },
  {
    category: "UI/UX & Produto",
    title: "App de Gestão Logística",
    description:
      "Redesign da experiência de um aplicativo de rastreamento de entregas. Novo design system, fluxos simplificados e interface acessível para motoristas e operadores em campo.",
    link: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    color: "#0f6e66",
  },
  {
    category: "Segurança da Informação",
    title: "Blindagem de Rede Corporativa",
    description:
      "Implantação de firewalls de nova geração, VPN segmentada e monitoramento contínuo de ameaças para um escritório de advocacia, garantindo conformidade com a LGPD.",
    link: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    color: "#b3245f",
  },
  {
    category: "Marketing & Performance",
    title: "Dashboard de Performance",
    description:
      "Central de métricas unificando tráfego pago, orgânico e CRM em tempo real, permitindo decisões orientadas a dados e redução de 40% no custo por lead.",
    link: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    color: "#c2410c",
  },
];

export function ProjectsSection() {
  return (
    <section id="portfolio" className="w-full py-16 sm:py-24 bg-background">
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
            Alguns dos desafios que transformamos em resultados. Use as setas para navegar entre os cases.
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
