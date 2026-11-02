"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Demo = dynamic(() => import("@/components/ui/demo"), {
  ssr: false,
  loading: () => (
    <div
      className="size-[320px] sm:size-[480px] lg:size-[600px] pointer-events-none"
      aria-hidden="true"
    />
  ),
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />

      <main className="relative flex-1 flex flex-col justify-center items-center overflow-hidden px-6 py-28 sm:py-36">
        {/* Globo 3D do Hero no Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0 overflow-hidden">
          <div className="opacity-45 dark:opacity-60 transition-opacity scale-90 sm:scale-100">
            <Demo size={600} speed={0.25} scale={0.85} />
          </div>
        </div>

        {/* Efeito de iluminação radial */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0)_0%,var(--background)_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0)_0%,var(--background)_100%)] -z-0"
          aria-hidden="true"
        />

        {/* Conteúdo Central 404 */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Código 404 Gigante Estilizado */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-foreground/90 font-mono mb-2 drop-shadow-sm select-none">
            404
          </h1>

          {/* Título Principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 max-w-xl text-balance">
            Você navegou para além da nossa infraestrutura.
          </h2>

          {/* Descrição */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            O endereço que você tentou acessar não foi localizado em nossa infraestrutura, foi renomeado ou não está mais disponível. Fique tranquilo: nossa infraestrutura principal continua 100% operacional.
          </p>

          {/* Ação Única: Voltar ao Início */}
          <div className="flex items-center justify-center w-full">
            <Button asChild size="lg" className="w-full sm:w-auto px-8 gap-2 text-sm font-semibold shadow-md cursor-pointer">
              <Link href="/">
                <Home className="size-4" />
                <span>Voltar ao Início</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
