import { CONTACT_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case de Sucesso: Reestruturação Logística & Mapeamento de Redes SOBEI | Suporte In Tech",
  description:
    "Projeto completo de engenharia de infraestrutura na SOBEI: mapeamento físico e lógico de mais de 13 unidades, identificação de gargalos operacionais e documentação viva no Cisco Packet Tracer.",
};

const metaItems = [
  { label: "CLIENTE", value: "SOBEI (Soc. Beneficente Equilíbrio de Interlagos)" },
  { label: "SEGMENTO", value: "Terceiro Setor • Infraestrutura Física, Redes L2/L3 & Conectividade" },
  { label: "ESCOPO DO PROJETO", value: "Auditoria Física, Logística de Redes, Diagnóstico de Gargalos & Topologia Digital" },
  { label: "FERRAMENTAS & PROTOCOLOS", value: "Cisco Packet Tracer, Switches L2/L3, VLANs 802.1Q, STP, Wi-Fi 6, Cat6 & Fibra" },
];

const networkResults = [
  {
    title: "13+ Unidades Mapeadas",
    description: "Levantamento detalhado e topologia completa de todas as dependências da instituição, interligando sede e centros educacionais.",
  },
  {
    title: "Zero Dependência Tácita",
    description: "Documentação digital interativa no Cisco Packet Tracer garantindo que qualquer técnico entenda a rede imediatamente.",
  },
  {
    title: "Eliminação de Gargalos",
    description: "Resolução definitiva de loops de comutação, saturação de banda entre dados e CFTV e sobreposição de canais sem fio.",
  },
  {
    title: "MTTR Reduzido em >70%",
    description: "Tempo médio de diagnóstico e reparo de incidentes de rede reduzido drasticamente através de diagramas lógicos precisos.",
  },
];

export default function RedesSobeiCasePage() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-background text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
      <Header />

      <main className="w-full max-w-full overflow-x-hidden flex-1 pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb / Back Link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao Portfólio</span>
            </Link>
          </div>

          {/* Header & Title */}
          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              SOBEI — Reestruturação Logística & Mapeamento de Redes
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Mapeamento detalhado da infraestrutura física existente, diagnóstico cirúrgico de gargalos operacionais e desenvolvimento de um ecossistema digital no Cisco Packet Tracer para facilitar todas as futuras manutenções nas mais de 13 unidades da instituição.
            </p>
          </header>

          {/* Ficha Técnica de 4 Colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-muted/40 border border-border/60 mb-12 sm:mb-16 shadow-xs">
            {metaItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Cover Image Showcase (Padronizado como na página de software SOBEI) */}
          <section className="mb-14 sm:mb-16">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 bg-[#364562] aspect-[16/9]">
              <Image
                src="/projetos/sobei-redes-cover.webp"
                alt="Capa Oficial SOBEI — Estruturação da Topologia de Redes da SOBEI (Suporte In Tech)"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Information Bar */}
            <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Network className="size-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Engenharia de Redes & Conectividade Crítica
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Auditoria técnica abrangendo sede administrativa (Matriz Rubens Montanaro), múltiplos Centros de Educação Infantil (CEIs), Centros de Convivência Intergeracional (CCInter) e Núcleos de Convivência de Idosos (NCI).
                </p>
              </div>

              <a
                href={CONTACT_INFO.whatsappAuditoriaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:scale-[1.02] cursor-pointer shrink-0"
              >
                <span>Solicitar Auditoria de Redes</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </section>

          {/* Corpo Explicativo Editorial Estruturado */}
          <div className="space-y-12 sm:space-y-16 py-4 border-t border-border/70 mb-14 sm:mb-20">

            {/* 01. Contexto & Origem do Desafio */}
            <section className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold text-primary">01 /</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Contexto & Origem: O Desafio de uma Infraestrutura Fragmentada
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Com décadas de expansão contínua na Zona Sul de São Paulo, a <strong className="text-foreground">SOBEI</strong> consolidou um patrimônio assistencial e educacional de grande porte, atendendo diariamente milhares de crianças, jovens e idosos em mais de 13 dependências distintas.
                </p>
                <p>
                  Entretanto, o crescimento acelerado ao longo dos anos fez com que a infraestrutura de redes acumulasse diferentes camadas técnicas sem um projeto unificado. Na prática, a instituição enfrentava uma realidade comum em organizações de grande porte:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li><strong>Ausência de Documentação Técnica:</strong> Não existiam diagramas lógicos ou físicos atualizados das unidades. Ninguém sabia com exatidão onde começava ou terminava determinado ramal de rede.</li>
                  <li><strong>Conhecimento Centralizado na Memória:</strong> Procedimentos e detalhes de portas estavam na cabeça de técnicos terceirizados passados, gerando dependência tácita de terceiros.</li>
                  <li><strong>Instabilidade Oculta:</strong> Lentidões intermitentes nos sistemas de secretaria, perda de sinal em reuniões virtuais e câmeras de monitoramento que deixavam de gravar sem aviso prévio.</li>
                </ul>
                <p>
                  O objetivo da liderança técnica da Suporte In Tech foi claro: <strong className="text-foreground">entrar em campo, auditar cada metro de cabo, identificar todos os gargalos ocultos e entregar um mapa lógico interativo e documentado</strong> para que a SOBEI nunca mais dependesse de adivinhações para manter sua operação funcionando.
                </p>
              </div>
            </section>

            {/* 02. Engenharia, Logística de Redes & Modelagem Cisco Packet Tracer */}
            <section className="space-y-6">
              <div className="flex items-baseline gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold text-primary">02 /</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Engenharia & Logística de Redes: A Solução no Cisco Packet Tracer
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Para resolver a raiz do problema, aplicamos engenharia de redes estruturada aliada à logística operacional:
                </p>
                <div className="space-y-4 pl-4 border-l-2 border-primary">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      1. Digitalização Integral no Cisco Packet Tracer (.pkt)
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Modelamos uma réplica virtual exata de cada unidade da SOBEI (Matriz Rubens Montanaro, Araucárias, CCInter, Orquídeas, Sabiás, etc.). O arquivo digital registra a topologia completa: switches, roteadores, faixas de IP, rotas padrão e portas de patch panel.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      2. Segmentação Lógica com VLANs (802.1Q)
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Separamos a rede em 4 VLANs estanques: Administrativo (VLAN 10), Câmeras CFTV (VLAN 20), Alunos/Pedagogia (VLAN 30) e Wi-Fi Visitantes (VLAN 40). O tráfego de videomonitoramento foi completamente blindado, garantindo gravação ininterrupta sem roubar banda das secretarias.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      3. Estruturação Física e Logística de Peças
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Todos os cabos foram certificados e anilhados. Racks foram limpos e reorganizados com patch cords de tamanho correto. Além disso, criamos um inventário de equipamentos sobressalentes para que qualquer ativo danificado seja substituído imediatamente sem aguardar compras de emergência.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 03. Facilidade de Manutenções Futuras */}
            <section className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold text-primary">03 /</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Manutenibilidade & Legado Técnico: A Facilidade em Futuras Intervenções
                </h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Com o mapa lógico interativo e os racks organizados, a rotina de TI da SOBEI passou por uma transformação definitiva:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1.5">
                  <span className="text-xs font-bold text-foreground block">Diagnóstico em Segundos</span>
                  <p className="text-xs text-muted-foreground">
                    Ao abrir o chamado, o suporte consulta o mapa no Packet Tracer e sabe exatamente qual switch e porta atendem aquele ponto antes de enviar um técnico.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1.5">
                  <span className="text-xs font-bold text-foreground block">Expansões Previsíveis</span>
                  <p className="text-xs text-muted-foreground">
                    A instalação de novas salas ou câmeras é feita em faixas de IP previamente reservadas na topologia, sem risco de conflito de endereços.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1.5">
                  <span className="text-xs font-bold text-foreground block">Zero Dependência Tácita</span>
                  <p className="text-xs text-muted-foreground">
                    O conhecimento sobre a rede agora pertence à instituição através de documentação formal e diagramas, e não mais à memória de terceiros.
                  </p>
                </div>
              </div>
            </section>

          </div>

          

          {/* Section: Results & Impact (4 Cards Padronizados) */}
          <section className="mb-14 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                Resultados & Impacto
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Ganhos de Estabilidade e Gestão de TI na SOBEI
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {networkResults.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border/80 flex flex-col justify-between shadow-sm space-y-3"
                >
                  <h3 className="text-base font-bold text-foreground leading-snug">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Final CTA (Padronizado igual à página de software) */}
          <section>
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border/80 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                  Audite sua Infraestrutura
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                  Sua empresa precisa mapear e reestruturar sua rede corporativa?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Da auditoria física de cabeamento à modelagem digital no Cisco Packet Tracer com segmentação de VLANs. Fale diretamente com a equipe técnica da Suporte In Tech.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href={CONTACT_INFO.whatsappAuditoriaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                >
                  <span>Falar com Nossa Equipe</span>
                  <ArrowUpRight className="size-4" />
                </a>

                <Link
                  href="/projetos/sobei"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
                >
                  <span>Ver Projeto de Software</span>
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
