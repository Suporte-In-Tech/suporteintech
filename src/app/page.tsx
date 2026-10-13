import { Header } from "@/components/ui/header-01";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { HeroSection } from "@/components/hero-section";
import { AppleCardCarousel } from "@/components/ui/carousel-08";
import { MethodologySection } from "@/components/methodology-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

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



