import { Card, CardContent } from "@/components/ui/card"
import { Frame, Monitor, Building2, Settings, Sparkles } from "lucide-react"

const solutions = [
  { title: "Wall Mounted", icon: Frame },
  { title: "Enclosure", icon: Monitor },
  { title: "Floor Kiosk", icon: Building2 },
  { title: "Custom", icon: Settings },
  { title: "All You Need", icon: Sparkles },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {solutions.map((solution, idx) => {
          const Icon = solution.icon
          return (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[180px]">
                <Icon className="w-16 h-16 mb-4 text-primary transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold text-lg">{solution.title}</h3>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
