import dynamic from "next/dynamic";
import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

const AppleCardCarousel = dynamic(
  () => import("@/components/ui/carousel-08").then((mod) => mod.AppleCardCarousel)
);
const MethodologySection = dynamic(
  () => import("@/components/methodology-section").then((mod) => mod.MethodologySection)
);
const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((mod) => mod.ProjectsSection)
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground">
      <Header />
      <main className="w-full flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <AppleCardCarousel />
        <MethodologySection />
        <ProjectsSection />
      </main>
      <MinimalFooter />
    </div>
  );
}
