import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Info Penerimaan Polri</span>
          </div>
          
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Website ini merupakan portal informasi tidak resmi yang bertujuan membantu 
            calon pendaftar Polri. Untuk informasi resmi dan pendaftaran, kunjungi{" "}
            <a
              href="https://penerimaan.polri.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              penerimaan.polri.go.id
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://penerimaan.polri.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portal Resmi Polri
            </a>
            <a
              href="https://penerimaan.polri.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Panduan Pendaftaran
            </a>
            <a
              href="https://penerimaan.polri.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </div>
          
          <div className="border-t pt-6 w-full">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Info Penerimaan Polri. Semua informasi bersumber dari 
              portal resmi Kepolisian Negara Republik Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
