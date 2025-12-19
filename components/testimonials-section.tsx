import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Our digital hall of fame has transformed how we display our historical collections. Visitors are more engaged than ever with the interactive touchscreen experience.",
    author: "Sarah Johnson",
    affiliation: "Museum Director, Heritage Museum",
  },
  {
    quote:
      "The ease of updating our hall of fame display is incredible. We can add new inductees and achievements in minutes without any technical expertise.",
    author: "Michael Chen",
    affiliation: "IT Director, State University",
  },
  {
    quote:
      "Our community members love exploring our athletic hall of fame and recognition wall on the interactive display. The touchscreen technology is perfect for showcasing our legacy.",
    author: "Emily Rodriguez",
    affiliation: "Athletic Director, Community Center",
  },
]

export function TestimonialsSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        What Users Are Saying About Touch Archive
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <Card
            key={idx}
            className="bg-card opacity-0 animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "forwards" }}
          >
            <CardContent className="p-8">
              <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.affiliation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
