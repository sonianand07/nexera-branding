import { type LucideIcon, Wand2, Globe } from "lucide-react"

interface FeatureSectionProps {
  title: string
  description: string
  icon: "Wand2" | "Globe"
  imageUrl: string
}

export default function FeatureSection({ title, description, icon, imageUrl }: FeatureSectionProps) {
  const IconComponent: Record<string, LucideIcon> = {
    Wand2,
    Globe,
  }

  const Icon = IconComponent[icon]

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-purple-700" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

