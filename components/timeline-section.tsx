"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, CheckCircle2, Clock } from "lucide-react";

const schedules = {
  akpol: {
    title: "Taruna Akpol 2025",
    events: [
      {
        date: "4 Feb - 6 Mar 2025",
        title: "Pendaftaran Online dan Verifikasi",
        status: "completed",
      },
      {
        date: "7 - 11 Mar 2025",
        title: "Pakta Integritas dan Rikmin Awal",
        status: "completed",
      },
      { date: "14 - 18 Mar 2025", title: "Rikkes I", status: "completed" },
      { date: "16 - 17 Apr 2025", title: "CAT Psikologi I", status: "completed" },
      { date: "2 - 4 Mei 2025", title: "CAT Uji Akademik", status: "completed" },
      {
        date: "17 - 20 Mei 2025",
        title: "Uji Jasmani dan Antropometri",
        status: "completed",
      },
      { date: "27 Mei - 2 Jun 2025", title: "Rikkes II", status: "completed" },
      { date: "10 - 13 Jun 2025", title: "PMK dan PSI II", status: "completed" },
      { date: "14 - 15 Jun 2025", title: "Rikmin Akhir", status: "completed" },
      { date: "1 - 2 Jul 2025", title: "Sidang Akhir Panda", status: "completed" },
      {
        date: "8 - 28 Jul 2025",
        title: "Tahapan Seleksi Panpus AKPOL",
        status: "completed",
      },
      {
        date: "1 Agustus 2025",
        title: "Rencana Buka Dik Integrasi",
        status: "completed",
      },
    ],
  },
  sipss: {
    title: "SIPSS 2026",
    events: [
      {
        date: "15 - 19 Jan 2026",
        title: "Pendaftaran Online dan Verifikasi",
        status: "active",
      },
      {
        date: "20 - 22 Jan 2026",
        title: "Pendaftaran Online, Pakta Integritas dan Rikmin Awal",
        status: "upcoming",
      },
      { date: "23 - 24 Jan 2026", title: "Rikkes I", status: "upcoming" },
      { date: "25 - 26 Jan 2026", title: "CAT Psikologi I", status: "upcoming" },
      {
        date: "27 - 28 Jan 2026",
        title: "CAT Aspek Pengetahuan, AMI dan PMK",
        status: "upcoming",
      },
      {
        date: "30 Jan 2026",
        title: "Sidang Menuju Rikkes II (14.00 WIB)",
        status: "upcoming",
      },
      { date: "31 Jan - 1 Feb 2026", title: "Rikkes II", status: "upcoming" },
      {
        date: "2 - 3 Feb 2026",
        title: "Uji Jasmani dan Antropometri",
        status: "upcoming",
      },
      { date: "4 - 6 Feb 2026", title: "PMK dan PSI II", status: "upcoming" },
      { date: "7 - 8 Feb 2026", title: "Rikmin Akhir", status: "upcoming" },
      {
        date: "10 Feb 2026",
        title: "Sidang Akhir Panda (14.00 WIB)",
        status: "upcoming",
      },
      {
        date: "12 - 27 Feb 2026",
        title: "Seleksi Tingkat Pusat",
        status: "upcoming",
      },
    ],
  },
  brimob: {
    title: "Bintara Brimob 2025",
    events: [
      {
        date: "10 - 18 Nov 2025",
        title: "Pendaftaran Online dan Verifikasi",
        status: "completed",
      },
      {
        date: "19 - 22 Nov 2025",
        title: "Pakta Integritas dan Rikmin Awal",
        status: "completed",
      },
      {
        date: "24 - 26 Nov 2025",
        title: "Pemeriksaan Kesehatan Tahap I",
        status: "completed",
      },
      {
        date: "27 - 28 Nov 2025",
        title: "CAT Psikologi Tahap I",
        status: "completed",
      },
      {
        date: "29 Nov - 2 Des 2025",
        title: "Gladi CAT & Pelaksanaan CAT Uji Akademik",
        status: "completed",
      },
      { date: "3 - 4 Des 2025", title: "Pelaksanaan EKG", status: "completed" },
      {
        date: "5 - 9 Des 2025",
        title: "Uji Kesamaptaan Jasmani dan Antropometri",
        status: "completed",
      },
      {
        date: "11 Des 2025",
        title: "Sidang Menuju Rikkes II",
        status: "completed",
      },
      { date: "12 - 13 Des 2025", title: "Rikkes Tahap II", status: "completed" },
      {
        date: "14 - 17 Des 2025",
        title: "Wawancara PMK dan Psikologi II",
        status: "completed",
      },
      { date: "18 - 21 Des 2025", title: "Rikmin Akhir", status: "completed" },
      {
        date: "23 Des 2025",
        title: "Sidang Kelulusan Akhir",
        status: "completed",
      },
    ],
  },
  tamtama: {
    title: "Tamtama Polri 2025",
    events: [
      {
        date: "5 Feb - 6 Mar 2025",
        title: "Pendaftaran Online dan Verifikasi",
        status: "completed",
      },
      { date: "7 Mar 2025", title: "Pakta Integritas", status: "completed" },
      { date: "19 - 23 Mar 2025", title: "Rikmin Awal", status: "completed" },
      { date: "14 - 19 Apr 2025", title: "Rikkes I", status: "completed" },
      { date: "29 - 30 Apr 2025", title: "CAT Psikologi I", status: "completed" },
      { date: "19 - 21 Mei 2025", title: "Uji Akademik", status: "completed" },
      {
        date: "27 Mei 2025",
        title: "Sidang Menuju Rikkes II",
        status: "completed",
      },
      { date: "10 - 11 Jun 2025", title: "Rikkes II", status: "completed" },
      {
        date: "14 - 16 Jun 2025",
        title: "Uji Jasmani dan Antropometri",
        status: "completed",
      },
      { date: "20 - 22 Jun 2025", title: "PMK dan PSI II", status: "completed" },
      {
        date: "23 - 26 Jun 2025",
        title: "Rikmin Akhir dan Supervisi Panpus",
        status: "completed",
      },
      { date: "2 Jul 2025", title: "Sidang Akhir Panda", status: "completed" },
      {
        date: "7 Jul 2025",
        title: "Rencana Buka Dik Tamtama",
        status: "completed",
      },
    ],
  },
};

function TimelineEvent({
  event,
  isLast,
}: {
  event: { date: string; title: string; status: string };
  isLast: boolean;
}) {
  const getStatusStyle = () => {
    switch (event.status) {
      case "completed":
        return {
          dot: "bg-emerald-500",
          badge: "bg-emerald-500/10 text-emerald-600",
          line: "bg-emerald-500/30",
        };
      case "active":
        return {
          dot: "bg-primary animate-pulse",
          badge: "bg-primary/10 text-primary",
          line: "bg-border",
        };
      default:
        return {
          dot: "bg-muted-foreground/30",
          badge: "bg-muted text-muted-foreground",
          line: "bg-border",
        };
    }
  };

  const style = getStatusStyle();

  return (
    <div className="relative flex gap-4 pb-6">
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className={`h-3 w-3 shrink-0 rounded-full ${style.dot}`} />
        {!isLast && <div className={`w-0.5 flex-1 ${style.line}`} />}
      </div>

      {/* Content */}
      <div className="-mt-0.5 flex-1 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className={style.badge}>
            <Clock className="mr-1 h-3 w-3" />
            {event.date}
          </Badge>
          {event.status === "completed" && (
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          )}
        </div>
        <p className="mt-1.5 text-sm font-medium text-foreground">
          {event.title}
        </p>
      </div>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section id="jadwal" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            <CalendarDays className="mr-1 h-3 w-3" />
            Jadwal Resmi
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Jadwal Seleksi Penerimaan Polri
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Jadwal resmi seleksi penerimaan anggota Polri berdasarkan pengumuman
            Kapolri
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="sipss" className="w-full">
            <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
              <TabsTrigger
                value="sipss"
                className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                SIPSS 2026
              </TabsTrigger>
              <TabsTrigger
                value="brimob"
                className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Bintara Brimob
              </TabsTrigger>
              <TabsTrigger
                value="akpol"
                className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Taruna Akpol
              </TabsTrigger>
              <TabsTrigger
                value="tamtama"
                className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Tamtama
              </TabsTrigger>
            </TabsList>

            {Object.entries(schedules).map(([key, schedule]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-6 text-xl font-bold text-foreground">
                      {schedule.title}
                    </h3>
                    <div className="max-h-[500px] overflow-y-auto pr-2">
                      {schedule.events.map((event, index) => (
                        <TimelineEvent
                          key={`${key}-${index}`}
                          event={event}
                          isLast={index === schedule.events.length - 1}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
