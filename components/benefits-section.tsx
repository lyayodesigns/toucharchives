import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Cloud, Smartphone, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Trophy,
    title: "Unlimited Recognition",
    description: "Honor unlimited inductees, awards, and achievements without physical space constraints.",
  },
  {
    icon: Users,
    title: "Engaging Experience",
    description: "Interactive touchscreen interface that captivates visitors and encourages exploration.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Platform",
    description: "Secure cloud storage with automatic backups and easy content management from anywhere.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Access",
    description: "Works on touchscreens, tablets, smartphones, and can be embedded on your website.",
  },
  {
    icon: Shield,
    title: "ADA Compliant",
    description: "Fully accessible design ensures everyone can explore your hall of fame content.",
  },
  {
    icon: Zap,
    title: "Easy Updates",
    description: "Add new inductees and content in minutes without technical expertise or downtime.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Touch Archive?</h2>
          <p className="text-lg text-muted-foreground">
            The complete digital hall of fame solution for modern institutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card
                key={idx}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
