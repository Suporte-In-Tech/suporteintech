import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { ShieldCheck, ArrowLeft, Mail, Phone, Lock, Eye, FileText, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e Proteção de Dados Pessoais da Suporte In Tech em conformidade com a LGPD (Lei nº 13.709/2018) e o Marco Civil da Internet.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidade() {
  const lastUpdated = "Novembro de 2026";

  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground">
      <Header />

      <main className="w-full flex-1 pt-28 sm:pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Botão de retorno */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para o Início</span>
            </Link>
          </div>

          {/* Cabeçalho da Página */}
          <div className="border-b border-border/80 pb-8 sm:pb-12 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono mb-4">
              <ShieldCheck className="size-3.5" />
              <span>SEGURANÇA DA INFORMAÇÃO & LGPD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Transparência, integridade e segurança no tratamento de dados pessoais pela Suporte In Tech.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
              <span>Última atualização: {lastUpdated}</span>
              <span>•</span>
              <span>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</span>
            </div>
          </div>

          {/* Conteúdo Estruturado */}
          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-12 text-foreground/90 text-sm sm:text-base leading-relaxed">
            {/* Seção 1 */}
            <section className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <FileText className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  1. Identificação do Controlador
                </h2>
              </div>
              <p>
                A <strong>Suporte In Tech</strong>, fundada e liderada por <strong>José Antônio Rodrigues Feitosa</strong>, com sede e atuação principal em <strong>São Paulo/SP</strong> e atendimento em âmbito nacional, atua como Controladora dos dados pessoais coletados por meio do domínio <code>suporteintech.com.br</code> e seus canais correlatos de atendimento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-background border border-border/60">
                  <span className="text-muted-foreground block mb-1">E-mail de Contato / DPO:</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline font-semibold">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-background border border-border/60">
                  <span className="text-muted-foreground block mb-1">Central de Atendimento / WhatsApp:</span>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline font-semibold">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Lock className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  2. Princípios e Compromisso com a LGPD
                </h2>
              </div>
              <p>
                Operamos com rigorosa observância aos princípios fundamentais estabelecidos pelo <strong>Artigo 6º da Lei nº 13.709/2018 (LGPD)</strong>: finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.
              </p>
              <p>
                Como empresa focada em engenharia de software, arquitetura de redes e infraestrutura corporativa, aplicamos o conceito de <em>Privacy by Design</em> e <em>Security by Default</em> em todas as nossas operações internas e desenvolvimentos para clientes.
              </p>
            </section>

            {/* Seção 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Eye className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  3. Dados Coletados e Formas de Coleta
                </h2>
              </div>
              <p>
                Coletamos apenas a quantidade estritamente necessária de dados para viabilizar o relacionamento comercial e técnico com nossos clientes e visitantes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Dados fornecidos voluntariamente pelo usuário:</strong> Ao iniciar contato via WhatsApp, telefone ou e-mail, podemos tratar nome, telefone, e-mail comercial, empresa em que atua e informações contextuais sobre a demanda de desenvolvimento ou infraestrutura solicitada.
                </li>
                <li>
                  <strong>Dados de navegação e telemetria anônima:</strong> Por meio da infraestrutura da Vercel (Analytics e Speed Insights), coletamos métricas anônimas de desempenho de carregamento (Web Vitals), tipo de dispositivo e navegador, sem realizar correlação com a identidade civil do visitante.
                </li>
                <li>
                  <strong>Cookies essenciais e de preferência:</strong> Utilizamos armazenamento local no navegador (localStorage) para salvar suas opções de tema (dark/light) e sua escolha sobre o banner de cookies.
                </li>
              </ul>
            </section>

            {/* Seção 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Server className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  4. Finalidades e Bases Legais do Tratamento
                </h2>
              </div>
              <p>
                Todo e qualquer dado coletado possui finalidade legítima amparada pelas bases legais da LGPD:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border/80 bg-card">
                  <h3 className="text-sm font-bold text-foreground mb-1">Procedimentos Preliminares</h3>
                  <p className="text-xs text-muted-foreground m-0">
                    Art. 7º, V da LGPD. Emissão de propostas comerciais, orçamentos técnicos e cronogramas de projeto solicitados pelo cliente.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card">
                  <h3 className="text-sm font-bold text-foreground mb-1">Execução Contratual</h3>
                  <p className="text-xs text-muted-foreground m-0">
                    Art. 7º, V da LGPD. Desenvolvimento de sistemas sob medida, entrega de arquitetura de redes, suporte técnico e consultoria.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card">
                  <h3 className="text-sm font-bold text-foreground mb-1">Legítimo Interesse & Segurança</h3>
                  <p className="text-xs text-muted-foreground m-0">
                    Art. 7º, IX da LGPD. Prevenção a fraudes, mitigação de ataques cibernéticos e garantia da estabilidade dos servidores.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                5. Compartilhamento com Terceiros
              </h2>
              <p>
                A Suporte In Tech <strong>não comercializa, não aluga e não compartilha dados pessoais</strong> com fins publicitários de terceiros. O compartilhamento ocorre exclusivamente com parceiros tecnológicos essenciais para a infraestrutura operacional:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Provedores de Hospedagem e CDN (Vercel Inc.):</strong> Entrega e roteamento de tráfego seguro sob criptografia SSL/TLS e conformidade internacional SOC 2.
                </li>
                <li>
                  <strong>Canais de Comunicação (Meta / WhatsApp Inc.):</strong> Quando o usuário decide iniciar atendimento diretamente pelo link do mensageiro.
                </li>
                <li>
                  <strong>Autoridades Públicas:</strong> Exclusivamente mediante ordem judicial formal ou requerimento regulatório amparado por lei brasileira.
                </li>
              </ul>
            </section>

            {/* Seção 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                6. Medidas de Segurança Técnica e Organizacional
              </h2>
              <p>
                Adotamos rígidas medidas de segurança da informação compatíveis com os padrões corporativos do setor de TI:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Comunicação 100% criptografada ponta a ponta via certificado SSL/TLS (HTTPS).</li>
                <li>Proteção contra ataques DDoS, injeção de código e cabeçalhos de segurança HTTP modernos.</li>
                <li>Controle estrito de acesso físico e lógico a repositórios, bases e sistemas de clientes.</li>
                <li>Políticas de senhas fortes, autenticação multifatorial (MFA) e princípio do menor privilégio.</li>
              </ul>
            </section>

            {/* Seção 7 */}
            <section className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                7. Direitos do Titular de Dados Pessoais
              </h2>
              <p>
                Em observância ao <strong>Artigo 18 da LGPD</strong>, você tem o direito de, a qualquer momento e mediante requisição gratuita, solicitar:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <span className="p-2 rounded-lg bg-background border border-border/60">• Confirmação da existência de tratamento</span>
                <span className="p-2 rounded-lg bg-background border border-border/60">• Acesso aos seus dados tratados</span>
                <span className="p-2 rounded-lg bg-background border border-border/60">• Correção de dados incompletos ou inexatos</span>
                <span className="p-2 rounded-lg bg-background border border-border/60">• Anonimização, bloqueio ou eliminação de excessos</span>
                <span className="p-2 rounded-lg bg-background border border-border/60">• Revogação do consentimento concedido</span>
                <span className="p-2 rounded-lg bg-background border border-border/60">• Informação sobre entidades de compartilhamento</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Para exercer qualquer um dos seus direitos, basta entrar em contato com nosso Encarregado de Dados (DPO) pelo e-mail{" "}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary underline">
                  {CONTACT_INFO.email}
                </a>. Responderemos à sua demanda no prazo legal.
              </p>
            </section>

            {/* Seção 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                8. Alterações desta Política
              </h2>
              <p>
                A Suporte In Tech reserva-se o direito de atualizar esta Política periodicamente para refletir melhorias em nossos serviços, avanços técnicos ou adequações a novos regulamentos da Autoridade Nacional de Proteção de Dados (ANPD). A data da última versão estará sempre indicada no topo deste documento.
              </p>
            </section>
          </article>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
