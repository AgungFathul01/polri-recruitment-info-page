import { Badge } from "@/components/ui/badge";
import {
  Dumbbell,
  BookOpen,
  Heart,
  FileCheck,
  Users2,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const tips = [
  {
    icon: Dumbbell,
    title: "Persiapan Fisik",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-600",
    description:
      "Mulai latihan rutin minimal 6 bulan sebelum tes. Fokus pada lari, push-up, sit-up, pull-up, dan renang.",
    checklist: [
      "Lari 12 menit tanpa henti",
      "Push-up & sit-up 30+ repetisi",
      "Latihan renang rutin",
      "Jaga berat badan ideal",
    ],
  },
  {
    icon: BookOpen,
    title: "Persiapan Akademik",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    description:
      "Pelajari materi CAT meliputi TWK, TIU, dan TKP. Latihan soal secara rutin untuk meningkatkan skor.",
    checklist: [
      "TWK: Wawasan Kebangsaan",
      "TIU: Intelegensia Umum",
      "TKP: Karakteristik Pribadi",
      "Simulasi CAT online",
    ],
  },
  {
    icon: Heart,
    title: "Kesehatan Mental",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-600",
    description:
      "Jaga kesehatan mental dengan istirahat cukup dan persiapan matang untuk tes psikologi.",
    checklist: [
      "Tidur 7-8 jam per hari",
      "Latihan meditasi & relaksasi",
      "Kelola stres dengan baik",
      "Pelajari pola tes psikologi",
    ],
  },
  {
    icon: FileCheck,
    title: "Kelengkapan Dokumen",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
    description:
      "Siapkan semua dokumen jauh-jauh hari. Pastikan tidak ada kesalahan dan berkas dalam kondisi baik.",
    checklist: [
      "KTP & Kartu Keluarga asli",
      "Ijazah & transkrip legalisir",
      "SKCK terbaru",
      "Pas foto sesuai ketentuan",
    ],
  },
  {
    icon: Users2,
    title: "Bergabung Komunitas",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600",
    description:
      "Ikut bimbingan belajar atau komunitas calon Polri untuk berbagi informasi dan motivasi.",
    checklist: [
      "Gabung grup bimbel Polri",
      "Sharing pengalaman senior",
      "Latihan fisik bersama",
      "Update info terbaru",
    ],
  },
  {
    icon: Target,
    title: "Fokus dan Konsisten",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    description:
      "Tetapkan target yang jelas dan konsisten dalam persiapan. Jangan mudah menyerah.",
    checklist: [
      "Buat jadwal latihan harian",
      "Evaluasi progress mingguan",
      "Tetap termotivasi",
      "Berdoa dan berusaha",
    ],
  },
];

export function TipsSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Lightbulb className="mr-1 h-3 w-3" />
            Panduan Persiapan
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Tips Sukses Seleksi Polri
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Persiapkan diri Anda dengan matang menggunakan panduan lengkap berikut
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${tip.color}`} />
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${tip.bgColor} transition-transform group-hover:scale-110`}>
                    <tip.icon className={`h-6 w-6 ${tip.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-4" />

                {/* Checklist */}
                <div className="space-y-2.5">
                  {tip.checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${tip.textColor}`} />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Step number badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${tip.bgColor} ${tip.textColor}`}>
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Persiapan matang adalah kunci keberhasilan dalam seleksi Polri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
