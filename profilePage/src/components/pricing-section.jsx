import { useContext } from "react"
import { Card, CardContent } from "./ui/card"
import { Info } from 'lucide-react'
import { DataContext } from "../context/ProfileContext"

export default function PricingSection() {

  const Price = useContext(DataContext)

  const services = [
    {
      name: "Basic Inspection",
      price: Price?.pricing.basicInspection,
      duration: "per hour",
      description: "Basic electrical inspection and minor repairs"
    },
    {
      name: "Full-Day Service",
      price: Price?.pricing.fullDayService,
      duration: "per day",
      description: "Complete electrical system inspection and repairs"
    },
    {
      name: "Emergency Service",
      price: Price?.pricing.emergencyService,
      duration: "per hour",
      description: "24/7 emergency electrical repairs"
    }
  ]

  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold mb-4">Pricing</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name}>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">{service.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-bold">{service.price}</span>
                <span className="text-sm text-muted-foreground">{service.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
        <Info className="w-4 h-4 mt-0.5" />
        <p>Additional charges may apply for locations beyond 10km. Materials charged separately.</p>
      </div>
    </div>
  )
}

