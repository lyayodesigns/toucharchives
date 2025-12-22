import { Card, CardContent } from "@/components/ui/card"
import { Frame, Monitor, Building2, Check } from "lucide-react"

const solutions = [
  { 
    title: "Wall-Mounted Touchscreen", 
    icon: Frame,
    features: [
      "Instantly grabs attention",
      "Easiest to install",
      "Complements wall wraps beautifully"
    ]
  },
  { 
    title: "Touchscreen Enclosure", 
    icon: Monitor,
    features: [
      "Strong visual centerpiece",
      "Fully customizable design",
      "Showcases your history with impact"
    ]
  },
  { 
    title: "Floor-Standing Touchscreen Kiosk", 
    icon: Building2,
    features: [
      "Eye catching and inviting",
      "Easy to move",
      "Preserves wall space"
    ]
  },
]

export function SolutionsGrid() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        The Easiest Digital Hall of Fame Solution
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Choose the perfect touchscreen display setup for your space
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, idx) => {
          const Icon = solution.icon
          return (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="flex flex-col items-center p-8 text-center h-full">
                <Icon className="w-16 h-16 mb-6 text-primary transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold text-xl mb-6">{solution.title}</h3>
                <ul className="space-y-3 text-left w-full">
                  {solution.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
