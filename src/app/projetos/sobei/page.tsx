import { CONTACT_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { CaseStudyJsonLd } from "@/components/seo/json-ld";
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
  ExternalLink,
} from "lucide-react";

const pageTitle =
  "Case de Sucesso: Criação de Site, Ecossistema Digital & Software SOBEI";
const pageDescription =
  "Desenvolvimento completo de software sob medida e criação de portais web para a SOBEI: API central em Java Spring Boot, 4 sites/plataformas em Next.js (Institucional, Canal de Ética LGPD, Congresso e Backoffice) e Design System autoral.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "criação de site institucional",
    "desenvolvimento de software sob medida",
    "desenvolvimento de sistemas web",
    "case de sucesso software",
    "portal web Next.js",
    "API Spring Boot",
    "canal de ética LGPD",
    "Design System",
    "SOBEI",
    "Suporte In Tech",
  ],
  alternates: {
    canonical: "/projetos/sobei",
  },
  openGraph: {
    title: `${pageTitle} | Suporte In Tech`,
    description: pageDescription,
    url: "/projetos/sobei",
    type: "article",
    images: [
      {
        url: "/projetos/sobei-cover.webp",
        width: 1920,
        height: 1080,
        alt: "Capa Oficial SOBEI — Criação de Sites, Plataformas Administrativas e Ecossistema de Software (Suporte In Tech)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | Suporte In Tech`,
    description: pageDescription,
    images: ["/projetos/sobei-cover.webp"],
  },
};

const metaItems = [
  { label: "CLIENTE", value: "SOBEI (Soc. Beneficente Equilíbrio de Interlagos)" },
  { label: "SEGMENTO", value: "Terceiro Setor • Educação & Assistência Social" },
  { label: "SERVIÇOS", value: "Arquitetura de Software, Fullstack Web & Design System" },
  { label: "TECNOLOGIAS", value: "Java, Spring Boot, Next.js, React, TypeScript, PostgreSQL" },
];

const softwareResults = [
  {
    title: "5 Aplicações Integradas",
    description: "Centralização de todas as regras de negócio e dados em uma única API REST escalável.",
  },
  {
    title: "100% Sigilo & Conformidade",
    description: "Canal de Ética aderente à LGPD com proteção total ao denunciante e protocolos auditáveis.",
  },
  {
    title: "Credenciamento Automatizado",
    description: "Gestão inteligente de vagas por oficina no congresso e emissão instantânea de crachás digitais.",
  },
  {
    title: "Governança & Triagem Unificada",
    description: "Painel administrativo com mapas de calor analíticos e controle granular de permissões (RBAC).",
  },
];

const brandIdentityRows = [
  {
    name: "Laranja / Ouro (Congresso SOBEI & Educação)",
    bg: "#F59E0B",
    hex: "#F59E0B",
    badgeBg: "bg-black/25 text-white border-white/15",
    iconSrc: "/projetos/sobei-header-icon.png",
    logoSrc: "/projetos/sobei-logo-white.png",
    border: "border-transparent",
  },
  {
    name: "Vermelho (Canal de Ética & Integridade)",
    bg: "#E53935",
    hex: "#E53935",
    badgeBg: "bg-black/25 text-white border-white/15",
    iconSrc: "/projetos/sobei-header-icon.png",
    logoSrc: "/projetos/sobei-logo-white.png",
    border: "border-transparent",
  },
  {
    name: "Azul SOBEI Oficial (Portal Institucional & Presidência)",
    bg: "#1B1464",
    hex: "#1B1464",
    badgeBg: "bg-black/25 text-white border-white/15",
    iconSrc: "/projetos/sobei-header-icon.png",
    logoSrc: "/projetos/sobei-logo-white.png",
    border: "border-transparent",
  },
  {
    name: "Lavanda (Backoffice Administrativo & Social)",
    bg: "#7C6BC4",
    hex: "#7C6BC4",
    badgeBg: "bg-black/25 text-white border-white/15",
    iconSrc: "/projetos/sobei-header-icon.png",
    logoSrc: "/projetos/sobei-logo-white.png",
    border: "border-transparent",
  },
  {
    name: "Branco Puro (Aplicações em Fundos Claros & Impressos)",
    bg: "#FFFFFF",
    hex: "#FFFFFF",
    badgeBg: "bg-neutral-100 text-[#1B1464] border-neutral-300",
    iconSrc: "/projetos/sobei-header-icon-blue.png",
    logoSrc: "/projetos/sobei-logo-blue.png",
    border: "border border-neutral-200/90 shadow-xs",
  },
];

export default function SobeiCasePage() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-background text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
      <CaseStudyJsonLd
        title={pageTitle}
        description={pageDescription}
        slug="/projetos/sobei"
        image="/projetos/sobei-cover.webp"
        serviceType="Desenvolvimento de Software Sob Medida, Criação de Sites e Design System"
        keywords={[
          "criação de site",
          "desenvolvimento de software",
          "Next.js",
          "Spring Boot",
          "Design System",
          "SOBEI",
          "Suporte In Tech",
        ]}
      />
      <Header />

      <main className="w-full max-w-full overflow-x-hidden flex-1 pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao Portfólio</span>
            </Link>
          </div>

          {/* Header & Title */}
          <header className="mb-8 sm:mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
              Case de Sucesso • Engenharia de Software & Web
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              SOBEI — Ecossistema Digital & Plataformas Web
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Desenvolvimento completo da arquitetura de software, portais web e Design System para a Sociedade Beneficente Equilíbrio de Interlagos: uma API central corporativa em Spring Boot integrada a quatro aplicações web em Next.js.
            </p>
          </header>

          {/* Metadata Card (Mantido exatamente como na Foto 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 mb-10 shadow-sm">
            {metaItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-foreground leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Cover Image Showcase (Mantido exatamente como na Foto 1) */}
          <section className="mb-14 sm:mb-16">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 bg-[#0A193F] aspect-[16/9]">
              <Image
                src="/projetos/sobei-cover.webp"
                alt="Capa Oficial SOBEI — Plataformas Administrativas e Site Institucional (Suporte In Tech)"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Visit Portal Bar (Mantido exatamente como na Foto 1) */}
            <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="size-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Portal Institucional Aberto ao Público
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Acesse o portal público institucional com o catálogo de unidades, projetos pedagógicos e portal de vagas em tempo real.
                </p>
              </div>

              <a
                href="https://sobei.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:scale-[1.02] cursor-pointer shrink-0"
              >
                <span>Visitar sobei.org.br</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </section>

          {/* Corpo Explicativo Editorial Limpo (Sem excesso de caixas e cards) */}
          <div className="space-y-12 sm:space-y-16 py-4 border-t border-border/70 mb-14 sm:mb-20">

            {/* 01. O Desafio de Negócio */}
            <section className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                01 / Contexto & Desafio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                O Desafio de Negócio
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">SOBEI (Sociedade Beneficente Equilíbrio de Interlagos)</strong> é uma das maiores e mais tradicionais instituições filantrópicas de São Paulo, prestando assistência continuada e educação infantil a milhares de crianças, jovens e famílias.
                </p>
                <p>
                  Antes da atuação da <strong className="text-foreground">Suporte In Tech</strong>, os processos da entidade operavam com canais descentralizados, triagens manuais para processos seletivos e a necessidade urgente de um canal oficial de ética seguro e em conformidade estrita com as diretrizes da LGPD. Além disso, eventos de grande magnitude, como o Congresso SOBEI de Educação Infantil, demandavam um sistema dedicado capaz de gerenciar centenas de inscrições simultâneas e organizar a distribuição de vagas por oficina em tempo real.
                </p>
              </div>
            </section>

            {/* 02. Arquitetura do Ecossistema: Os 5 Sistemas */}
            <section className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                  02 / Engenharia & Arquitetura
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                  Os 5 Sistemas do Ecossistema SOBEI
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para sanar a fragmentação, foi projetada uma arquitetura desacoplada e escalável, dividida em um núcleo central de processamento e quatro portais front-end especializados:
                </p>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <div className="border-l-2 border-primary pl-4 space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    1. API REST Centralizada (<code className="text-xs font-mono font-semibold text-primary">api.sobei.org.br</code>)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Back-end construído em <strong className="text-foreground font-medium">Java 21/25</strong> e <strong className="text-foreground font-medium">Spring Boot 4</strong> com banco de dados <strong className="text-foreground font-medium">PostgreSQL 15</strong> e migrações versionadas via Flyway. Responsável por autenticação Stateless JWT com controle de perfis (RBAC), protocolos de denúncia, banco de talentos, submissão de currículos com armazenamento seguro em nuvem no Cloudflare R2 e geração dinâmica de crachás e relatórios via OpenPDF.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    2. Portal Institucional Principal (<code className="text-xs font-mono font-semibold text-primary">sobei.org.br</code>)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Canal público em <strong className="text-foreground font-medium">Next.js 16</strong> e <strong className="text-foreground font-medium">React 19</strong> focado em alta velocidade e acessibilidade. Inclui catálogo interativo das unidades (CEIs, CCInter e NCI), apresentação dos projetos pedagógicos e portal de vagas de emprego integrado diretamente à API corporativa.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    3. Canal de Ética & Compliance (<code className="text-xs font-mono font-semibold text-primary">denuncias.sobei.org.br</code>)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Plataforma segura e independente para registros anônimos ou identificados com validação de esquemas via <strong className="text-foreground font-medium">Zod</strong> e <strong className="text-foreground font-medium">React Hook Form</strong>. Gera números de protocolo criptografados e possibilita consulta pública da apuração por timeline, preservando total sigilo e aderência à LGPD.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    4. Plataforma do Congresso SOBEI 2026 (<code className="text-xs font-mono font-semibold text-primary">congresso.sobei.org.br</code>)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Aplicação dedicada para o evento comemorativo de 20 anos. Realiza validação algorítmica de CPF, catálogo dinâmico de oficinas com preenchimento de vagas em tempo real e emissão instantânea de crachás digitais com QR Code para credenciamento rápido no local.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    5. Backoffice Administrativo Unificado (<code className="text-xs font-mono font-semibold text-primary">administracao.sobei.org.br</code>)
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Painel administrativo de acesso restrito à coordenação e suporte. Centraliza a triagem de relatos de ética, mapas de calor analíticos com <strong className="text-foreground font-medium">Recharts</strong>, publicação de vagas e gestão operacional das listas de presença do congresso.
                  </p>
                </div>
              </div>
            </section>

            {/* 03. Design System & Metodologia Visual */}
            <section className="space-y-12 sm:space-y-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">
                  03 / Design & Experiência
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                  Design System & Interfaces Autorais
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  Todo o ecossistema foi documentado e arquitetado no Paper Pro com tokens semânticos e Tailwind CSS. A experiência foi desenhada para conectar acolhimento humano, rigor institucional e usabilidade de ponta a ponta.
                </p>
              </div>

              {/* Showcase 01: Landing Page (Inspirado na Referência 1) */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-mono font-bold text-primary">01</span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      Landing page
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Hierarquia de conteúdo e presença institucional do portal sobei.org.br pensadas para desktop e mobile.
                  </p>
                </div>

                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 bg-neutral-950 shadow-2xl aspect-[16/9]">
                  <Image
                    src="/projetos/sobei-responsive-showcase.webp"
                    alt="sobei.org.br — Portal institucional oficial em versões desktop e mobile"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Showcase 02: Identidade Visual (Inspirado na Referência 2) */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-mono font-bold text-primary">02</span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      Identidade visual
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Variações cromáticas e aplicações do símbolo e logotipo oficial da SOBEI nos domínios do ecossistema.
                  </p>
                </div>

                {/* Grid de Identidade estilo Referência 2 */}
                <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-3 sm:p-5 shadow-sm">
                  <div className="flex flex-col gap-2.5 sm:gap-3.5">
                    {brandIdentityRows.map((row, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 sm:gap-3.5">
                        {/* Bloco Esquerdo: Ícone Pequeno da SOBEI (Símbolo Oficial) */}
                        <div
                          style={{ backgroundColor: row.bg }}
                          className={`w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-28 rounded-xl sm:rounded-2xl flex items-center justify-center p-2.5 sm:p-4 shadow-sm shrink-0 transition-transform duration-200 hover:scale-[1.02] ${row.border}`}
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={row.iconSrc}
                              alt="Ícone Pequeno Oficial SOBEI"
                              width={70}
                              height={70}
                              className="object-contain max-h-10 sm:max-h-14 md:max-h-16 w-auto"
                            />
                          </div>
                        </div>

                        {/* Bloco Direito: Logotipo Completo e Código da Cor */}
                        <div
                          style={{ backgroundColor: row.bg }}
                          className={`flex-1 h-16 sm:h-24 md:h-28 rounded-xl sm:rounded-2xl flex items-center justify-between px-3 sm:px-6 md:px-8 py-2 sm:py-3 shadow-sm transition-transform duration-200 hover:scale-[1.01] ${row.border}`}
                        >
                          <div className="relative flex-1 max-w-[140px] sm:max-w-xs md:max-w-sm h-full flex items-center justify-start">
                            <Image
                              src={row.logoSrc}
                              alt={`Logotipo SOBEI — ${row.name}`}
                              width={320}
                              height={85}
                              className="object-contain max-h-9 sm:max-h-14 md:max-h-16 w-auto"
                            />
                          </div>

                          {/* Código da cor no lado dentro da cor que se refere */}
                          <div className="shrink-0 pl-2 sm:pl-4">
                            <span className={`font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border shadow-xs whitespace-nowrap ${row.badgeBg}`}>
                              {row.hex}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Section: Software Results (Mantido exatamente como na Foto 2) */}
          <section className="mb-14 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Resultados & Impacto
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Ganhos de Operação e Governança
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softwareResults.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border/80 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Final CTA (Foco em Contato & Conversão) */}
          <section>
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border/80 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                  Iniciar um Projeto
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                  Sua instituição precisa de uma plataforma sob medida?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Da modelagem de APIs robustas ao desenvolvimento de portais web de alta performance com design autoral. Converse diretamente com a equipe técnica da Suporte In Tech.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href={CONTACT_INFO.whatsappSoftwareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                >
                  <span>Falar com Nossa Equipe</span>
                  <ArrowUpRight className="size-4" />
                </a>

                <Link
                  href="/projetos/redes-sobei"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
                >
                  <span>Ver Projeto de Redes</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
