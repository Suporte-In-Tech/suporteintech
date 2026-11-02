import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { Scale, ArrowLeft, CheckCircle2, AlertCircle, FileCode, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e Condições de Uso do site e serviços da Suporte In Tech. Conheça as diretrizes de propriedade intelectual, contratação e navegação segura.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

export default function TermosDeUso() {
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
              <Scale className="size-3.5" />
              <span>CONTRATOS & CONDIÇÕES GERAIS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Condições gerais de navegação, contratação de serviços técnicos e direitos de propriedade intelectual da Suporte In Tech.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
              <span>Última atualização: {lastUpdated}</span>
              <span>•</span>
              <span>Marco Civil da Internet (Lei nº 12.965/2014)</span>
            </div>
          </div>

          {/* Conteúdo Estruturado */}
          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-12 text-foreground/90 text-sm sm:text-base leading-relaxed">
            {/* Seção 1 */}
            <section className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <CheckCircle2 className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  1. Aceitação dos Termos
                </h2>
              </div>
              <p>
                Ao acessar, navegar ou utilizar qualquer página ou funcionalidade disponível sob o domínio <code>suporteintech.com.br</code>, você declara ter lido, compreendido e concordado expressamente com todos os termos e diretrizes estipulados neste documento e em nossa <strong>Política de Privacidade</strong>.
              </p>
              <p className="m-0 text-xs sm:text-sm text-muted-foreground">
                Caso você discorde de qualquer disposição contida nestes Termos, recomendamos interromper a navegação e abster-se de solicitar orçamentos através de nossos formulários e canais.
              </p>
            </section>

            {/* Seção 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <FileCode className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  2. Objeto e Serviços Oferecidos
                </h2>
              </div>
              <p>
                A <strong>Suporte In Tech</strong> atua no setor de Tecnologia da Informação prestando serviços de alto padrão técnico voltados para empresas, instituições e profissionais, abrangendo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl border border-border/70 bg-card">
                  <strong className="block text-foreground mb-1 text-sm">Criação de Sites e Portais</strong>
                  <span className="text-muted-foreground">Desenvolvimento de sites corporativos, landing pages de alta conversão, portais institucionais e SEO técnico avançado.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border/70 bg-card">
                  <strong className="block text-foreground mb-1 text-sm">Engenharia de Software Sob Medida</strong>
                  <span className="text-muted-foreground">Construção de sistemas web, APIs em Spring Boot / Node.js, painéis administrativos e integração com sistemas legados.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border/70 bg-card">
                  <strong className="block text-foreground mb-1 text-sm">Serviços de Estruturação de Cloud</strong>
                  <span className="text-muted-foreground">Provisionamento e arquitetura em nuvem (AWS, GCP, Cloudflare), automação serverless, bancos de dados escaláveis e FinOps.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border/70 bg-card">
                  <strong className="block text-foreground mb-1 text-sm">Criação de MCPs (Model Context Protocol)</strong>
                  <span className="text-muted-foreground">Construção de servidores MCP customizados e ferramentas especializadas para conectar LLMs e agentes de IA a ecossistemas corporativos.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border/70 bg-card">
                  <strong className="block text-foreground mb-1 text-sm">UI/UX Design & Consultoria de TI</strong>
                  <span className="text-muted-foreground">Prototipagem de interfaces, design systems escaláveis, auditoria de código e consultoria estratégica de governança.</span>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Shield className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  3. Propriedade Intelectual e Direitos Autorais
                </h2>
              </div>
              <p>
                Todos os elementos visuais, textuais, marcas, ilustrações, códigos de demonstração, estruturas de banco de dados e marcas nominativas exibidos neste site — incluindo o logotipo oficial <strong>Suporte In Tech</strong> e o conceito visual <em>SIT</em> — são de propriedade exclusiva de <strong>José Antônio Rodrigues Feitosa</strong> ou utilizados sob licença expressa, estando protegidos pela <strong>Lei nº 9.610/1998 (Lei de Direitos Autorais)</strong> e <strong>Lei nº 9.279/1996 (Propriedade Industrial)</strong>.
              </p>
              <p>
                Os cases de clientes (como a SOBEI — Sociedade Beneficente Equilíbrio de Interlagos) são exibidos a título de portfólio profissional e comprovação técnica de capacidade de entrega, respeitando os direitos autorais e de imagem das respectivas marcas citadas.
              </p>
            </section>

            {/* Seção 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <AlertCircle className="size-5 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                  4. Diretrizes de Uso Aceitável e Vedações
                </h2>
              </div>
              <p>Ao navegar pelo site da Suporte In Tech, o usuário expressamente se compromete a <strong>não</strong>:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Executar varreduras de vulnerabilidade, ataques de negação de serviço (DoS/DDoS) ou tentativas de quebra de autenticação em nossa infraestrutura.</li>
                <li>Utilizar robôs, spiders, scrapers ou outros processos automatizados que sobrecarreguem de forma indevida nossos servidores.</li>
                <li>Utilizar os canais de contato da Suporte In Tech para envio de spam, correntes ou mensagens publicitárias não solicitadas.</li>
                <li>Reproduzir integral ou parcialmente os conteúdos, estudos de caso e projetos autorais sem expressa autorização por escrito.</li>
              </ul>
            </section>

            {/* Seção 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                5. Propostas Comerciais, Orçamentos e Contratos Específicos
              </h2>
              <p>
                As informações contidas neste website têm caráter primordialmente institucional e informativo. Os prazos, valores, níveis de serviço (SLA), escopos de desenvolvimento e garantias de entrega de software ou infraestrutura são formalizados por meio de <strong>Propostas Técnicas e Contratos de Prestação de Serviços (SOW)</strong> específicos, assinados mutuamente pelas partes contratantes.
              </p>
            </section>

            {/* Seção 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                6. Limitação de Responsabilidade
              </h2>
              <p>
                A Suporte In Tech emprega as melhores práticas de engenharia de software e segurança da informação para garantir a máxima disponibilidade do site. Não nos responsabilizamos, contudo, por:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Instabilidades temporárias ocasionadas por falhas na rede mundial de computadores, operadoras de telecomunicações ou provedores globais de nuvem.</li>
                <li>Links e integrações para aplicações de terceiros (como WhatsApp ou Instagram), os quais possuem políticas de privacidade e termos próprios.</li>
                <li>Mau uso do dispositivo do visitante ou infecção por malwares locais.</li>
              </ul>
            </section>

            {/* Seção 7 */}
            <section className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 shadow-xs space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground m-0">
                7. Legislação Aplicável e Foro de Eleição
              </h2>
              <p>
                Estes Termos de Uso são regidos e interpretados integralmente de acordo com as leis da <strong>República Federativa do Brasil</strong>, em especial o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e o <strong>Código Civil Brasileiro</strong>.
              </p>
              <p className="m-0 text-xs sm:text-sm text-muted-foreground">
                Fica eleito o <strong>Foro da Comarca de São Paulo, Estado de São Paulo</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias decorrentes deste instrumento.
              </p>
            </section>

            {/* Seção 8 */}
            <section className="space-y-3 text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border/60">
              <p>
                Dúvidas sobre estes Termos de Uso podem ser enviadas diretamente para{" "}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary underline">
                  {CONTACT_INFO.email}
                </a>{" "}
                ou via WhatsApp no número <strong>{CONTACT_INFO.phone}</strong>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
