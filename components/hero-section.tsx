"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-secondary blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <Shield className="h-4 w-4" />
              <span>Pendaftaran Dibuka Tahun 2026</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Portal Informasi Penerimaan Polri
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Wujudkan impian Anda menjadi bagian dari Kepolisian Negara Republik Indonesia. 
            Dapatkan informasi lengkap tentang persyaratan, jadwal, dan proses seleksi.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              onClick={() => {
                document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
