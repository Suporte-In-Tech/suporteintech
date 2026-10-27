import React from "react";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

export function RootJsonLd() {
  const baseUrl = SITE_CONFIG.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${baseUrl}/#organization`,
        name: SITE_CONFIG.name,
        alternateName: [SITE_CONFIG.brandName, "SIT", "Suporte In Tech TI e Software"],
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo-completa-dark.png`,
          width: 586,
          height: 143,
        },
        image: `${baseUrl}/logo-completa-dark.png`,
        description: SITE_CONFIG.description,
        slogan: SITE_CONFIG.slogan,
        telephone: CONTACT_INFO.phoneInternational,
        email: CONTACT_INFO.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.state,
          addressCountry: SITE_CONFIG.location.country,
        },
        areaServed: [
          {
            "@type": "City",
            name: "São Paulo",
          },
          {
            "@type": "State",
            name: "São Paulo",
          },
          {
            "@type": "Country",
            name: "Brasil",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT_INFO.phoneInternational,
            contactType: "customer service",
            email: CONTACT_INFO.email,
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          },
          {
            "@type": "ContactPoint",
            telephone: CONTACT_INFO.phoneInternational,
            contactType: "sales",
            email: CONTACT_INFO.email,
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          },
        ],
        knowsAbout: [
          "Criação de Sites Profissionais",
          "Desenvolvimento de Software Sob Medida",
          "Desenvolvimento de Sistemas Web",
          "Criação de Landing Pages de Alta Conversão",
          "Portais Institucionais e Corporativos",
          "Arquitetura de Software e APIs REST",
          "Desenvolvimento Fullstack Next.js, React e Spring Boot",
          "UI/UX Design e Design Systems",
          "Infraestrutura de TI e Redes Corporativas",
          "Cabeamento Estruturado e Segmentação VLAN",
          "Consultoria e Suporte Técnico de TI",
          "Segurança da Informação e Adequação à LGPD",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Engenharia de Software, Criação de Sites e Infraestrutura de TI",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Criação de Sites Profissionais, Portais Web e Landing Pages",
                serviceType: "Criação de Sites e Desenvolvimento Web",
                description:
                  "Desenvolvimento de sites institucionais rápidos, responsivos, otimizados para o Google (SEO técnico e Core Web Vitals) e focados em conversão de clientes.",
                provider: { "@id": `${baseUrl}/#organization` },
                areaServed: "BR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desenvolvimento de Software Sob Medida & Sistemas Web",
                serviceType: "Engenharia de Software",
                description:
                  "Construção de sistemas corporativos, plataformas SaaS, painéis administrativos (Backoffice), integrações de APIs REST e bancos de dados escaláveis em Java, Spring Boot, Node.js, Next.js e React.",
                provider: { "@id": `${baseUrl}/#organization` },
                areaServed: "BR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design, Prototipagem & Design Systems",
                serviceType: "Design de Interfaces e Experiência do Usuário",
                description:
                  "Design de interfaces web e mobile de alto padrão, prototipagem interativa, criação de Design Systems escaláveis e redesign moderno de plataformas legadas.",
                provider: { "@id": `${baseUrl}/#organization` },
                areaServed: "BR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Infraestrutura de TI, Arquitetura e Logística de Redes",
                serviceType: "Infraestrutura de Redes e Suporte de TI",
                description:
                  "Cabeamento estruturado Cat6 e fibra óptica, configuração de roteadores, switches L2/L3 e firewalls, VLANs 802.1Q, Wi-Fi corporativo de alta densidade e mapeamento digital no Cisco Packet Tracer.",
                provider: { "@id": `${baseUrl}/#organization` },
                areaServed: "BR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing Digital, SEO Técnico & Performance",
                serviceType: "Marketing Digital e Posicionamento Orgânico",
                description:
                  "Posicionamento orgânico no Google (SEO), gestão de tráfego pago (Google Ads e Meta Ads), funis de aquisição e análise de métricas de conversão e ROI.",
                provider: { "@id": `${baseUrl}/#organization` },
                areaServed: "BR",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.brandName,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "A Suporte In Tech faz criação de sites profissionais e landing pages para empresas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. A Suporte In Tech projeta e desenvolve sites institucionais, portais corporativos e landing pages de alta conversão utilizando Next.js, React e Tailwind CSS, com máxima velocidade (Core Web Vitals), design autoral responsivo e otimização completa de SEO para o Google.",
            },
          },
          {
            "@type": "Question",
            name: "Como funciona o desenvolvimento de software sob medida na Suporte In Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Atuamos em todas as etapas da engenharia de software: diagnóstico de processos, arquitetura de APIs REST e bancos de dados (Java, Spring Boot, Node.js, PostgreSQL), desenvolvimento fullstack de sistemas web e painéis administrativos, adequação à LGPD, testes de qualidade (QA) e implantação com zero downtime.",
            },
          },
          {
            "@type": "Question",
            name: "Quais serviços de infraestrutura de TI e redes corporativas vocês oferecem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Realizamos auditoria física e lógica de redes, cabeamento estruturado Cat6 e fibra óptica, configuração de switches gerenciáveis L2/L3, roteadores e firewalls, segmentação em VLANs (802.1Q), redes corporativas de alta densidade (Wi-Fi 6), CFTV IP e documentação completa de topologia no Cisco Packet Tracer.",
            },
          },
          {
            "@type": "Question",
            name: "Como solicitar um orçamento para criação de site, software ou infraestrutura de TI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Você pode entrar em contato diretamente com nossa equipe técnica pelo WhatsApp comercial (11) 99252-7640 para agendar um diagnóstico técnico do seu projeto de site, sistema sob medida ou rede corporativa.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface CaseStudyJsonLdProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  serviceType: string;
  keywords: string[];
}

export function CaseStudyJsonLd({
  title,
  description,
  slug,
  image,
  serviceType,
  keywords,
}: CaseStudyJsonLdProps) {
  const baseUrl = SITE_CONFIG.url;
  const pageUrl = `${baseUrl}${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfólio & Cases",
            item: `${baseUrl}/#portfolio`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: title,
        description,
        image: `${baseUrl}${image}`,
        author: {
          "@id": `${baseUrl}/#organization`,
        },
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        mainEntityOfPage: pageUrl,
        about: serviceType,
        keywords: keywords.join(", "),
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
