"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Jalur Penerimaan", href: "#info" },
  { label: "Persyaratan", href: "#persyaratan" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Tips Sukses", href: "#tips" },
  { label: "Berita", href: "#berita" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="https://penerimaan.polri.go.id/assets/front_theme/logo_polri.png"
            alt="Logo Polri"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold text-foreground">Info Polri</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:flex"
            onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Portal Resmi
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-[280px] max-w-[85vw] transform border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <Image
              src="https://penerimaan.polri.go.id/assets/front_theme/logo_polri.png"
              alt="Logo Polri"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-semibold text-foreground">Info Penerimaan Polri</p>
              <p className="text-xs text-muted-foreground">Portal Informasi Resmi</p>
            </div>
          </div>
          
          <nav className="flex-1 p-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="flex w-full items-center rounded-md px-3 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="border-t border-border p-4">
            <Button
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Kunjungi Portal Resmi
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
