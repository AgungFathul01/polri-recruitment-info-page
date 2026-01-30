import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { InfoCards } from "@/components/info-cards";
import { RequirementsSection } from "@/components/requirements-section";
import { TimelineSection } from "@/components/timeline-section";
import { TipsSection } from "@/components/tips-section";
import { NewsSection } from "@/components/news-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <InfoCards />
      <section id="persyaratan">
        <RequirementsSection />
      </section>
      <section id="jadwal">
        <TimelineSection />
      </section>
      <section id="tips">
        <TipsSection />
      </section>
      <section id="berita">
        <NewsSection />
      </section>
      <CTASection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
