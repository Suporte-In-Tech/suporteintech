"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "sit_cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Verificar consentimento prévio salvo no localStorage
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Falha ao acessar localStorage (ex: navegação privada restrita)
    }
  }, []);

  const handleConsent = (level: "all" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ level, date: new Date().toISOString() }));
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Consentimento de Cookies e Privacidade"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative rounded-2xl border border-border/80 bg-background/95 dark:bg-neutral-900/95 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/20 text-foreground">
        {/* Botão de Fechar Rápido (Assume essenciais) */}
        <button
          onClick={() => handleConsent("essential")}
          aria-label="Fechar aviso de cookies e manter apenas essenciais"
          className="absolute top-4 right-4 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <X className="size-4" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-3 pr-6">
          <div className="flex items-center justify-center size-9 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
            <Cookie className="size-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-tight flex items-center gap-1.5">
              Privacidade & Cookies
              <ShieldCheck className="size-3.5 text-primary" />
            </h3>
            <span className="text-[11px] text-muted-foreground font-mono">
              Em conformidade com a LGPD
            </span>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          Utilizamos cookies essenciais para garantir a estabilidade e segurança do nosso site, além de tecnologias analíticas anônimas para compreender como nossos serviços são acessados. Você pode aceitar todos ou optar apenas pelos essenciais.
        </p>

        {/* Links Legais */}
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-4 pb-4 border-b border-border/60">
          <Link
            href="/politica-de-privacidade"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
          <span>•</span>
          <Link
            href="/termos-de-uso"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Termos de Uso
          </Link>
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Button
            size="sm"
            onClick={() => handleConsent("all")}
            className="w-full sm:flex-1 text-xs font-medium cursor-pointer shadow-sm"
          >
            Aceitar Todos
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleConsent("essential")}
            className="w-full sm:flex-1 text-xs font-medium cursor-pointer"
          >
            Apenas Essenciais
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default CookieBanner;
