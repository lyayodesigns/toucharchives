import { HeroSection } from "@/components/hero-section"
import { SolutionsGrid } from "@/components/solutions-grid"
import { FeatureSection } from "@/components/feature-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Hall of Fame & Interactive Recognition Display",
  description:
    "Transform your hall of fame, awards, and achievements into an engaging digital touchscreen display. Interactive recognition platform for schools, museums, and organizations. Cloud-based, easy to update.",
  keywords: [
    "digital hall of fame",
    "interactive hall of fame",
    "touchscreen display",
    "digital recognition wall",
    "interactive trophy case",
    "digital donor wall",
    "athletic hall of fame",
    "wall of honor",
    "digital awards display",
    "touchscreen kiosk",
    "hall of fame software",
    "recognition display system",
    "digital signage for schools",
    "museum touchscreen display",
  ],
  openGraph: {
    title: "Digital Hall of Fame & Interactive Recognition Display | Touch Archive",
    description:
      "Interactive touchscreen platform for halls of fame, awards, and recognition displays. Honor your legacy with modern technology.",
    type: "website",
    url: "https://toucharchive.com",
    images: [
      {
        url: "/Touchstone Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Touch Archive Digital Hall of Fame Touchscreen Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Hall of Fame & Interactive Recognition Display",
    description:
      "Transform your hall of fame into an engaging digital touchscreen display. Cloud-based, easy to update.",
    images: ["/Touchstone Kiosk.jpg"],
  },
  alternates: {
    canonical: "https://toucharchive.com",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <AnimatedSection>
        <SolutionsGrid />
      </AnimatedSection>

      <AnimatedSection>
        <FeatureSection
          title="Interactive Digital Hall of Fame Display"
          description="Our touchscreen hall of fame software brings your awards, achievements, and historical collections into the modern era. Perfect for schools, universities, athletic departments, museums, and organizations looking to create an engaging digital recognition experience."
          features={[
            "Digital Hall of Fame Displays",
            "Athletic Awards & Trophies",
            "Wall of Honor Recognition",
            "Notable Members & Inductees",
            "Custom Layouts & Templates",
            "Unlimited Categories & Entries",
          ]}
          imageSrc="/Touchscreen Floor Standing Kiosk.jpg"
          imageAlt="Interactive Digital Hall of Fame Touchscreen Display"
        />
      </AnimatedSection>

      <AnimatedSection className="bg-muted/30">
        <FeatureSection
          title="Showcase Your Legacy & Athletic Achievements"
          description="An interactive touchscreen display through Touch Archive can be used for any type of hall of fame recognition and preservation. This cloud-based digital platform can be the home for all your athletic awards, donor recognition, historical content, achievements, and community milestones."
          features={[
            "Athletic Hall of Fame",
            "Community Achievements",
            "Donor Recognition Wall",
            "Cultural Heritage Archives",
            "Custom Recognition Collections",
          ]}
          imageSrc="/TDS Install - Brown Football.jpeg"
          imageAlt="Digital Hall of Fame Legacy Display"
          reversed
        />
      </AnimatedSection>

      <AnimatedSection>
        <FeatureSection
          title="All-in-One Digital Recognition Solution"
          description="Now that there are no limits on how many people you can honor in your digital hall of fame, why not honor everyone? Touch Archive makes it easy to recognize an unlimited number of inductees, preserve countless records, and create an interactive trophy case that engages visitors."
          features={[
            "Unlimited Hall of Fame Entries",
            "Easy Import from Spreadsheets",
            "Safely Stored on Cloud Servers",
            "Daily Automated Backups",
            "Advanced Sorting & Filtering",
            "Cross-Linked Content & Media",
          ]}
          imageSrc="/Wall-mounted_Touchscreen.jpg"
          imageAlt="Digital Hall of Fame Management System"
        />
      </AnimatedSection>

      <BenefitsSection />

      <AnimatedSection className="bg-muted/30">
        <TestimonialsSection />
      </AnimatedSection>

      <ContactSection />

      <CTASection />
    </main>
  )
}
