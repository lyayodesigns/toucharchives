import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Hall of Fame?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of institutions that have modernized their recognition displays with Touch Archive. Get
            started today with a free demo and see how easy it is to create an engaging digital hall of fame.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-white/80">Active Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">46</div>
              <div className="text-white/80">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
