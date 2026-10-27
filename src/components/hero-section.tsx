"use client";

import * as React from "react";
import Demo from "@/components/ui/demo";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12">
      {/* Globe Canvas Layer - Centralizado no meio da tela */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0 overflow-hidden">
        <div className="opacity-75 dark:opacity-85 transition-opacity translate-y-6 sm:translate-y-8 lg:translate-y-10">
          <Demo
            size={640}
            speed={0.35}
            scale={0.88}
          />
        </div>
      </div>

      {/* Main Content Grid - Distribuído de cima a baixo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 flex-1">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 flex flex-col justify-start self-start pt-6 sm:pt-8 lg:pt-12 transition-all">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-snug">
              Da infraestrutura à tela,
              <br />
              <span className="text-foreground/90">nós construímos o futuro.</span>
              <span className="sr-only">
                {" "}— Criação de Sites Profissionais, Desenvolvimento de Software Sob Medida, Sistemas Web e Infraestrutura de TI
              </span>
            </h1>
          </div>

          {/* Right Column: Accent Bar + Description + CTA na parte inferior direita */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 lg:pl-8 self-end pb-4 sm:pb-6 lg:pb-8">
            {/* Accent Bar */}
            <div className="w-12 h-1 rounded-full bg-primary" />

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              A estabilidade que sua logística corporativa exige, a arquitetura
              de rede que suporta a expansão, a experiência digital que encanta
              seus usuários e a consultoria que guia cada linha de código. Da
              infraestrutura de TI à sua plataforma online — nós garantimos que
              nada pare.
            </p>

            {/* CTA */}
            <a
              href="#servicos"
              className="group inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mt-1"
            >
              <span>Nossos serviços</span>
              <span className="flex items-center justify-center size-7 sm:size-8 rounded-md bg-primary text-primary-foreground group-hover:translate-x-1.5 transition-transform duration-200 shadow-sm">
                <ChevronRight className="size-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
