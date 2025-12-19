import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureSectionProps {
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  reversed?: boolean
  buttonText?: string
}

export function FeatureSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
  buttonText = "Learn More",
}: FeatureSectionProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg group ${reversed ? "order-2 lg:order-1" : ""}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className={`space-y-6 ${reversed ? "order-1 lg:order-2" : ""}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
              >
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}
