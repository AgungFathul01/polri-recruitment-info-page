import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  TrendingUp,
  Bell,
  ExternalLink,
  Calendar,
  Users,
  Shield,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";

const newsItems = [
  {
    date: "12 Februari 2025",
    title: "Pendaftaran Akpol, Bintara, dan Tamtama Polri 2025 Telah Dibuka",
    description:
      "Polri telah membuka pendaftaran seleksi penerimaan anggota melalui jalur Akademi Kepolisian (Akpol), Bintara, dan Tamtama. Proses pendaftaran berlangsung sejak 5 Februari hingga 6 Maret 2025 dan dilakukan secara daring melalui situs resmi penerimaan.polri.go.id.",
    category: "Pengumuman Resmi",
    icon: Bell,
    source: "Kompas.com",
    highlight: true,
    url: "https://nasional.kompas.com/read/2025/02/12/10584981/pendaftaran-akpol-bintara-dan-tamtama-polri-2025-telah-dibuka",
  },
  {
    date: "6 Februari 2025",
    title: "Resmi Dibuka: Syarat Penerimaan Polri 2025",
    description:
      "Penerimaan Polri 2025 resmi dibuka untuk jalur Taruna Akpol (275 orang), SIPSS (140 orang), Bintara (4.000 orang), dan Tamtama (750 orang). Total kuota penerimaan tahun ini mencapai 5.165 personel.",
    category: "Kuota & Persyaratan",
    icon: Users,
    source: "Kompas.com",
    highlight: true,
    url: "https://www.kompas.com/tren/read/2025/02/06/091500065/resmi-dibuka-ini-syarat-penerimaan-polri-2025-taruna-akpol-sipss-bintara",
  },
  {
    date: "Januari 2026",
    title: "Pendaftaran SIPSS 2026 Dibuka 15-19 Januari",
    description:
      "Sekolah Inspektur Polisi Sumber Sarjana (SIPSS) 2026 akan membuka pendaftaran pada 15-19 Januari 2026. Jalur ini diperuntukkan bagi lulusan S1/S2 dengan kuota 140 peserta didik.",
    category: "Jadwal Terbaru",
    icon: Calendar,
    source: "Polri.go.id",
    highlight: false,
    url: "https://penerimaan.polri.go.id/",
  },
  {
    date: "November 2025",
    title: "Seleksi Bintara Brimob Dimulai 10 November 2025",
    description:
      "Pendaftaran Bintara Brimob tahun 2025 telah dibuka mulai 10-18 November 2025. Seleksi akan berlangsung hingga 23 Desember 2025 dengan tahapan meliputi tes kesehatan, psikologi, akademik, dan kesamaptaan jasmani.",
    category: "Bintara Brimob",
    icon: Shield,
    source: "Polri.go.id",
    highlight: false,
    url: "https://penerimaan.polri.go.id/",
  },
  {
    date: "2025",
    title: "Proses Seleksi Transparan dan Bebas Pungutan",
    description:
      "Karo Penmas Divisi Humas Polri menegaskan bahwa proses seleksi dilakukan secara profesional, transparan, dan akuntabel. Tidak ada pungutan biaya dalam setiap tahapan seleksi. Masyarakat diminta melapor jika menemukan indikasi kecurangan.",
    category: "Informasi Penting",
    icon: FileCheck,
    source: "Divisi Humas Polri",
    highlight: false,
    url: "https://hfrpolri.id/",
  },
  {
    date: "2025",
    title: "Rekrutmen Polri Jalur Santri Jadi Program Prioritas",
    description:
      "Kapolri mengumumkan bahwa rekrutmen anggota Polri jalur santri menjadi program prioritas untuk meningkatkan kualitas personel kepolisian dengan latar belakang pendidikan pesantren.",
    category: "Program Baru",
    icon: TrendingUp,
    source: "Kompas.com",
    highlight: false,
    url: "https://nasional.kompas.com/read/2024/10/05/14000011/rekrutmen-polri-jalur-santri-jadi-program-prioritas-kapolri",
  },
];

export function NewsSection() {
  return (
    <section id="berita" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Newspaper className="mr-1 h-3 w-3" />
            Berita Terkini
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Informasi & Update Terbaru
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Berita dan informasi resmi seputar penerimaan Polri 2025-2026
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news, index) => {
            const IconComponent = news.icon;
            return (
              <a
                key={index}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    news.highlight ? "border-primary/30 bg-primary/5" : ""
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge
                        variant={news.highlight ? "default" : "outline"}
                        className={
                          news.highlight
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        <IconComponent className="mr-1 h-3 w-3" />
                        {news.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Sumber: {news.source}
                      </span>
                      <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Baca selengkapnya
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href="https://penerimaan.polri.go.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Semua Informasi di Portal Resmi
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
