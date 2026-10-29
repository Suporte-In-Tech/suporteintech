import { CONTACT_INFO } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoSimplificadaDark from "../../../public/logo-simplificada-dark.png";

// Self-contained SVG icons for social networks
function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: "Sobre Nós", href: "/#sobre" },
    { title: "Projeto Software SOBEI", href: "/projetos/sobei" },
    { title: "Projeto Redes SOBEI", href: "/projetos/redes-sobei" },
  ];

  const support = [
    { title: "Contato via WhatsApp", href: CONTACT_INFO.whatsappUrl, external: true },
    { title: "Solicitar Orçamento", href: CONTACT_INFO.whatsappUrl, external: true },
  ];

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Serviços", href: "/#servicos" },
    { title: "Portfólio", href: "/#portfolio" },
  ];

  const socialLinks = [
    { icon: <GithubIcon className="size-4" />, link: "#", label: "GitHub" },
    { icon: <InstagramIcon className="size-4" />, link: "#", label: "Instagram" },
    { icon: <LinkedinIcon className="size-4" />, link: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative min-h-[100dvh] flex flex-col bg-[#2b2b2b] text-white rounded-t-3xl md:rounded-t-[2.5rem] border-t border-white/10 overflow-hidden shadow-2xl">
      {/* Efeito de leve brilho suave abrangendo o footer */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_45%,transparent_85%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_50%,rgba(255,255,255,0.03),transparent_75%)]"
        aria-hidden="true"
      />

      {/* Conteúdo posicionado no topo com as linhas estendidas até o fim do footer */}
      <div className="relative z-10 bg-[radial-gradient(35%_80%_at_30%_0%,rgba(255,255,255,0.06),transparent)] mx-auto w-full max-w-5xl md:border-x md:border-white/10 flex-1 flex flex-col">
        <div className="pt-6 md:pt-8 px-6 md:px-10">
          <div className="bg-white/10 h-px w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 px-6 md:px-10 py-8 md:py-10">
          <div className="flex flex-col gap-5 max-w-sm">
            <Link href="/" aria-label="SuporteInTech Home" className="w-max opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src={logoSimplificadaDark}
                alt="SuporteInTech — Criação de Sites, Desenvolvimento de Software e TI"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-300 font-mono text-sm text-balance leading-relaxed">
              SuporteInTech — Criação de sites profissionais, desenvolvimento de software sob medida, infraestrutura de redes e suporte de TI corporativo.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-white/10 bg-white/5 border border-white/10 text-neutral-300 hover:text-white rounded-md p-1.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-16 lg:gap-20">
            <div className="flex flex-col gap-6 min-w-[140px]">
              <div>
                <span className="text-neutral-400 mb-3 block text-xs font-semibold uppercase tracking-wider">
                  Suporte
                </span>
                <div className="flex flex-col gap-1.5">
                  {support.map(({ href, title, external }, i) => (
                    <a
                      key={i}
                      className="w-max py-1 text-sm text-neutral-300 hover:text-white duration-200 hover:underline"
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-neutral-400 mb-3 block text-xs font-semibold uppercase tracking-wider">
                  Navegação
                </span>
                <div className="flex flex-col gap-1.5">
                  {navigation.map(({ href, title }, i) => (
                    <Link
                      key={i}
                      className="w-max py-1 text-sm text-neutral-300 hover:text-white duration-200 hover:underline"
                      href={href}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-[140px]">
              <span className="text-neutral-400 mb-3 block text-xs font-semibold uppercase tracking-wider">
                Empresa & Projetos
              </span>
              <div className="flex flex-col gap-1.5">
                {company.map(({ href, title }, i) => (
                  <Link
                    key={i}
                    className="w-max py-1 text-sm text-neutral-300 hover:text-white duration-200 hover:underline"
                    href={href}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Barra inferior de copyright posicionada na base do footer */}
        <div className="mt-auto w-full">
          <div className="bg-white/10 h-px w-full" />
          <div className="flex max-w-5xl flex-col justify-between gap-2 px-6 md:px-10 pt-4 pb-8">
            <p className="text-neutral-400 text-center font-light text-xs">
              © {year} SuporteInTech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const DitheredFooter = MinimalFooter;
export default MinimalFooter;
