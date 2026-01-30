"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Siap Bergabung dengan Polri?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
            Jangan lewatkan kesempatan untuk menjadi bagian dari Kepolisian Negara
            Republik Indonesia. Daftar sekarang melalui portal resmi penerimaan Polri.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
            >
              Kunjungi Portal Resmi
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              onClick={() => window.open("https://penerimaan.polri.go.id/", "_blank")}
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
