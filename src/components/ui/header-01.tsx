'use client';
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import logoCompletaDark from "../../../public/logo-completa-dark.png";
import logoCompletaLight from "../../../public/logo-completa-light.png";
import logoSimplificadaDark from "../../../public/logo-simplificada-dark.png";
import logoSimplificadaLight from "../../../public/logo-simplificada-light.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const menuItems = [
  { name: "Home", href: "/" },
  { name: "Quem Somos", href: "/#sobre" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Portfólio", href: "/#portfolio" },
];

export function handleNavClick(href: string, e: React.MouseEvent<HTMLAnchorElement>) {
  if (typeof window === "undefined") return;

  if (href === "/") {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } else if (href.startsWith("/#")) {
    const targetId = href.replace("/#", "");
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    // Tratamento de rolagem suave para âncora ao carregar ou mudar de rota para a home
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.pathname === "/" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  React.useEffect(() => {
    if (isScrolled) {
      timerRef.current = setTimeout(() => {
        setIsCollapsed(true);
      }, 250);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsCollapsed(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isScrolled]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out">
      <nav
        data-state={menuState && "active"}
        className={cn(
          "w-full px-3 md:px-6 transition-all duration-500 ease-in-out",
          isScrolled ? "pt-2" : "pt-4",
        )}
      >
        <div
          className={cn(
            "mx-auto w-full transition-all duration-500 ease-in-out px-4 py-2",
            isScrolled
              ? "max-w-5xl rounded-2xl border border-border/50 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
              : "max-w-7xl rounded-2xl border border-transparent bg-transparent backdrop-blur-none shadow-none",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="SuporteInTech Home"
                onClick={(e) => handleNavClick("/", e)}
                className="relative flex items-center h-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg select-none"
              >
                <div
                  className={cn(
                    "relative h-8 flex items-center overflow-hidden transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isCollapsed ? "w-[62px]" : "w-[145px] sm:w-[155px]"
                  )}
                >
                  {/* Logo Completa - Dark Mode */}
                  <Image
                    src={logoCompletaDark}
                    alt="SuporteInTech"
                    priority
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 w-auto max-w-none transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left hidden dark:block",
                      isCollapsed
                        ? "opacity-0 scale-90 -translate-x-3 pointer-events-none"
                        : "opacity-100 scale-100 translate-x-0"
                    )}
                  />
                  {/* Logo Completa - Light Mode */}
                  <Image
                    src={logoCompletaLight}
                    alt="SuporteInTech"
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 w-auto max-w-none transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left dark:hidden",
                      isCollapsed
                        ? "opacity-0 scale-90 -translate-x-3 pointer-events-none"
                        : "opacity-100 scale-100 translate-x-0"
                    )}
                  />

                  {/* Logo Simplificada - Dark Mode */}
                  <Image
                    src={logoSimplificadaDark}
                    alt="SIT"
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 w-auto max-w-none transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left hidden dark:block",
                      isCollapsed
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-75 translate-x-2 pointer-events-none"
                    )}
                  />
                  {/* Logo Simplificada - Light Mode */}
                  <Image
                    src={logoSimplificadaLight}
                    alt="SIT"
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-7 sm:h-8 w-auto max-w-none transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left dark:hidden",
                      isCollapsed
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-75 translate-x-2 pointer-events-none"
                    )}
                  />
                </div>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 pr-2 block cursor-pointer p-2 lg:hidden"
                >
                  <Menu className={cn("size-5 duration-300 transition-all", menuState && "rotate-180 scale-0 opacity-0")} />
                  <X className={cn("absolute inset-0 m-auto size-5 duration-300 transition-all", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <Menus />
            </div>

            <div className={cn(
              "border backdrop-blur-2xl lg:flex w-full flex-wrap items-center justify-end space-y-6 rounded-xl p-4 shadow-xl transition-all duration-300 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              menuState ? "block" : "hidden"
            )}>
              <div className="lg:hidden block p-2">
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item.href, e);
                          setMenuState(false);
                        }}
                        className="text-muted-foreground hover:text-primary text-sm block transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0">
                <ModeToggle />
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="transition-all duration-300"
                >
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <WhatsAppIcon className="size-4 shrink-0 text-[#25D366]" />
                    <span>Fale Conosco</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export function Menus() {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList className="gap-1">
        {menuItems.map((item, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-xs",
              )}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="size-9" aria-hidden="true" />;
  }
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Toggle
          className="group bg-secondary dark:bg-secondary data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    </div>
  );
}

export { Header };

export default Header;
