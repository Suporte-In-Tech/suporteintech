"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Handshake, FileText } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const principles = [
  {
    title: "Diagnóstico antes da solução",
    text: "Nenhum projeto começa com orçamento pronto. Primeiro entendemos sua operação, mapeamos gargalos, riscos e dependências — e só então propomos uma arquitetura. Isso evita retrabalho, compras desnecessárias e soluções que não conversam entre si.",
  },
  {
    title: "Um único responsável técnico",
    text: "Rede, servidores, software e presença digital costumam ficar espalhados entre vários fornecedores que não se falam. Centralizamos tudo em uma equipe só, com um ponto de contato que conhece o seu ambiente de ponta a ponta.",
  },
  {
    title: "Documentação como entrega",
    text: "Cada intervenção gera registro: topologia da rede, inventário de equipamentos, credenciais sob custódia, procedimentos e histórico de chamados. O conhecimento sobre a sua infraestrutura pertence à sua empresa — não a quem a instalou.",
  },
  {
    title: "Continuidade acima de tudo",
    text: "Mudanças são planejadas em janelas de baixo impacto, com plano de retorno definido antes de qualquer alteração. O objetivo é simples: evoluir a tecnologia da sua empresa sem que a operação pare.",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    text: "Boas práticas de proteção de dados aplicadas desde o projeto: controle de acesso, backups verificados e segmentação de rede.",
  },
  {
    icon: Handshake,
    title: "Relação de longo prazo",
    text: "Atuamos como extensão do seu time, acompanhando o crescimento da empresa e antecipando necessidades de infraestrutura.",
  },
  {
    icon: FileText,
    title: "Transparência total",
    text: "Escopo, prazos e custos definidos por escrito. Relatórios claros, em linguagem de negócio, sobre o que foi feito e por quê.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-20 sm:py-28 bg-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Manifesto */}
        <motion.div {...fadeUp} className="max-w-5xl">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-6 block">
            Quem Somos
          </span>
          <p className="text-2xl sm:text-3xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.25] text-foreground">
            A SuporteInTech nasceu para resolver um problema comum:{" "}
            <span className="text-muted-foreground">
              empresas que dependem de tecnologia, mas não têm com quem contar quando ela falha.
            </span>{" "}
            Unimos infraestrutura, software e estratégia digital em uma só equipe — responsável do cabo de rede à
            experiência do seu cliente.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Coluna esquerda fixa */}
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Parceiro técnico,
                <br />
                não apenas fornecedor.
              </h2>
              <div className="mt-6 h-1 w-12 rounded-full bg-primary" />
              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Tecnologia deixou de ser um departamento de apoio: hoje ela é o que mantém vendas, atendimento e
                  logística funcionando. Uma rede instável ou um sistema fora do ar não é um incômodo técnico — é
                  faturamento perdido.
                </p>
                <p>
                  Por isso trabalhamos com uma visão integrada. Quem projeta sua rede entende as aplicações que rodam
                  sobre ela; quem desenvolve seu sistema conhece a infraestrutura que o sustenta. O resultado são
                  decisões mais coerentes, menos falhas entre fornecedores e respostas mais rápidas quando algo
                  precisa de atenção.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Princípios */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Nossos princípios
            </span>
            <ol className="mt-6 divide-y divide-border/70 border-t border-border/70">
              {principles.map((p, i) => (
                <motion.li
                  key={p.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                  className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-2 py-8"
                >
                  <span className="font-mono text-sm text-muted-foreground/70 pt-1 transition-colors group-hover:text-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Compromissos */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-border/70 border-t border-border/70 pt-12">
          {commitments.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <Icon className="size-5 text-foreground" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
