"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  GraduationCap,
  Shield,
  Anchor,
  BookOpen,
  Users,
  Clock,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Taruna Akpol",
    subtitle: "Akademi Kepolisian",
    description:
      "Pendidikan perwira Polri selama 4 tahun di Akpol Lemdiklat Polri Semarang. Lulusan akan menjadi Perwira Pertama dengan pangkat Inspektur Polisi Dua (Ipda).",
    icon: GraduationCap,
    quota: "275 orang",
    education: "SMA/SMK Sederajat",
    duration: "4 Tahun",
    location: "Akpol Semarang",
    color: "from-blue-600 to-blue-800",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-600",
    requirements: [
      "Usia 17-21 tahun",
      "Tinggi badan min. Pria 165cm, Wanita 163cm",
      "Belum pernah menikah",
      "Nilai rapor rata-rata 70",
    ],
  },
  {
    title: "Bintara Polri",
    subtitle: "Brigadir Polisi",
    description:
      "Pendidikan Bintara di SPN Polda dan Sepolwan. Lulusan akan menjadi Bintara Polri dengan pangkat Brigadir Polisi Dua (Bripda).",
    icon: Shield,
    quota: "4.000 orang",
    education: "SMA/SMK Sederajat",
    duration: "7-9 Bulan",
    location: "SPN Polda",
    color: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    subCategories: [
      "Bintara PTU",
      "Bintara Brimob",
      "Bintara Polair",
      "Bakomsus (Kesehatan, IT, Hukum, dll)",
    ],
    requirements: [
      "Usia 18-22 tahun",
      "Tinggi badan min. Pria 165cm, Wanita 163cm",
      "Belum pernah menikah",
    ],
  },
  {
    title: "Tamtama Polri",
    subtitle: "Bhayangkara",
    description:
      "Pendidikan Tamtama di SPN Polda Metro Jaya atau SPN Polda Jawa Timur. Lulusan akan menjadi Tamtama Polri dengan pangkat Bhayangkara Dua (Bharada).",
    icon: Anchor,
    quota: "750 orang",
    education: "SMA/SMK Sederajat",
    duration: "5-6 Bulan",
    location: "SPN Polda",
    color: "from-amber-600 to-amber-800",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10 text-amber-600",
    subCategories: ["Tamtama Brimob", "Tamtama Polair"],
    requirements: [
      "Usia 18-22 tahun",
      "Tinggi badan min. Pria 163cm, Wanita 160cm",
      "Belum pernah menikah",
    ],
  },
  {
    title: "SIPSS",
    subtitle: "Sekolah Inspektur Polisi Sumber Sarjana",
    description:
      "Jalur khusus bagi lulusan S1/S2 untuk menjadi Perwira Pertama Polri dengan pangkat Inspektur Polisi Dua (Ipda) melalui pendidikan pembentukan SIPSS.",
    icon: BookOpen,
    quota: "140 orang",
    education: "S1/S2",
    duration: "6 Bulan",
    location: "Akpol Semarang",
    color: "from-rose-600 to-rose-800",
    borderColor: "border-rose-500/30",
    iconBg: "bg-rose-500/10 text-rose-600",
    subCategories: [
      "Bidang Hukum",
      "Bidang Teknologi",
      "Bidang Kesehatan",
      "Bidang Psikologi",
    ],
    requirements: [
      "Usia maksimal 28 tahun (S1) atau 30 tahun (S2)",
      "IPK minimal 2.75",
      "Bersedia ditempatkan di seluruh NKRI",
    ],
  },
];

function CategoryCard({
  category,
}: {
  category: (typeof categories)[0];
}) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = category.icon;

  return (
    <Card
      className={`group relative overflow-hidden border-2 ${category.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${category.color} p-5 text-white`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{category.title}</h3>
            <p className="mt-1 text-sm text-white/80">{category.subtitle}</p>
          </div>
          <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Badge className="border-white/30 bg-white/20 text-white hover:bg-white/30">
            <Users className="mr-1 h-3 w-3" />
            {category.quota}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>

        {/* Info Grid */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
            <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {category.education}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
            <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {category.duration}
            </span>
          </div>
          <div className="col-span-2 flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
            <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {category.location}
            </span>
          </div>
        </div>

        {/* Collapsible Content */}
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger asChild>
            <button
              className="mb-3 flex w-full items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted/50 active:scale-[0.98]"
              type="button"
            >
              <span>{expanded ? "Sembunyikan Detail" : "Lihat Detail"}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
            <div className="mb-4 space-y-4 rounded-lg border border-border bg-muted/20 p-4">
              {/* Sub Categories */}
              {category.subCategories && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Jalur Tersedia
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.subCategories.map((sub) => (
                      <Badge
                        key={sub}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Persyaratan Utama
                </p>
                <ul className="space-y-2">
                  {category.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button
          asChild
          className={`w-full bg-gradient-to-r ${category.color} transition-all hover:opacity-90`}
        >
          <a
            href="https://penerimaan.polri.go.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function InfoCards() {
  return (
    <section id="info" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            4 Jalur Penerimaan
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Jalur Penerimaan Polri 2025
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Pilih jalur pendaftaran yang sesuai dengan kualifikasi dan minat
            Anda. Total kuota tahun ini: 5.165 personel
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
