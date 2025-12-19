import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">CONNECT WITH US TODAY</h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Digital hall of fame displays are transforming how institutions preserve and share their legacy. Don't
            limit yourself with static plaques that are expensive and difficult to update. Let Touch Archive build an
            interactive touchscreen experience to engage and honor your community's most valuable members, athletic
            achievements, and historical milestones.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
