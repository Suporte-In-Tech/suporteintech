"use client";

import * as React from "react";
import Timeline from "@/components/ui/timeline";

export function MethodologySection() {
  return (
    <div className="w-full">
      {/* Cabeçalho da Metodologia - Mesma estrutura e alinhamento de Nossos Serviços */}
      <section className="w-full pt-16 sm:pt-24 pb-6 sm:pb-8 bg-background">
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
      </section>

      {/* Linha do Tempo Horizontal Interativa com Scroll Pinned */}
      <Timeline
        title="Metodologia & Processos"
        periodLabel="Metodologia & Processo — SuporteInTech"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Equipe técnica SuporteInTech em operação"
      />
    </div>
  );
}

export default MethodologySection;
