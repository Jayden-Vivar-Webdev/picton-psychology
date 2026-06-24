import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { ApproachSection } from "@/components/approach-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <Reveal direction="up">
          <ServicesSection />
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <StatsSection />
        </Reveal>
        <Reveal direction="left">
          <AboutSection />
        </Reveal>
        <Reveal direction="up">
          <TeamSection />
        </Reveal>
        <Reveal direction="right">
          <ApproachSection />
        </Reveal>
        <Reveal direction="up">
          <TestimonialsSection />
        </Reveal>
        <Reveal direction="up">
          <FaqSection />
        </Reveal>
        <Reveal direction="up">
          <ContactCta />
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
