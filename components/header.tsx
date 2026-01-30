"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, ExternalLink } from "lucide-react";

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
          <Shield className="h-8 w-8 text-primary" />
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

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-bold">Info Polri</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className="text-left text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Portal Resmi
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
