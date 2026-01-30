import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const requirements = {
  umum: [
    "Warga Negara Indonesia (WNI)",
    "Beriman dan bertakwa kepada Tuhan Yang Maha Esa",
    "Setia kepada NKRI berdasarkan Pancasila dan UUD 1945",
    "Sehat jasmani dan rohani",
    "Tidak pernah dipidana karena melakukan suatu kejahatan",
    "Berwibawa, jujur, adil, dan berkelakuan tidak tercela",
    "Tidak pernah diberhentikan dengan tidak hormat sebagai pegawai",
    "Tidak terlibat penyalahgunaan narkoba",
  ],
  fisik: [
    "Tinggi badan minimal Pria: 165 cm, Wanita: 160 cm",
    "Berat badan proporsional (BMI ideal)",
    "Tidak buta warna",
    "Tidak bertato dan tidak bertindik (pria)",
    "Bebas dari penyakit menular",
  ],
  dokumen: [
    "Ijazah/STTB asli dan fotokopi",
    "Akta kelahiran asli",
    "Kartu Keluarga (KK)",
    "KTP elektronik",
    "SKCK dari Polres setempat",
    "Surat keterangan sehat dari RS Pemerintah",
    "Pas foto terbaru",
  ],
};

export function RequirementsSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Persyaratan Umum
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Pastikan Anda memenuhi semua persyaratan sebelum mendaftar
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Persyaratan Umum</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.umum.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-muted-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Persyaratan Fisik</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.fisik.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-muted-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Dokumen yang Diperlukan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.dokumen.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-muted-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
