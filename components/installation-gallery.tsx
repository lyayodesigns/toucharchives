import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const installations = [
  {
    category: "University",
    title: "State University Archive Display",
    image: "university touchscreen archive installation wall mounted",
  },
  {
    category: "Museum",
    title: "History Museum Interactive Display",
    image: "museum digital archive touchscreen kiosk",
  },
  {
    category: "Library",
    title: "Public Library Heritage Display",
    image: "library interactive archive display",
  },
  {
    category: "Corporate",
    title: "Company History Archive",
    image: "corporate archive touchscreen display",
  },
  {
    category: "Community Center",
    title: "Community Heritage Display",
    image: "community center digital archive",
  },
  {
    category: "High School",
    title: "School History Archive",
    image: "high school touchscreen archive display",
  },
]

export function InstallationGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Touchscreen Installations</h2>
          <p className="text-lg text-gray-600">Explore real-world examples of our digital archive displays</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((installation, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/.jpg?height=400&width=600&query=${installation.image}`}
                    alt={installation.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-900 text-white hover:bg-blue-800">{installation.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{installation.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
