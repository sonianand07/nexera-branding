import Link from "next/link"
import { ArrowRight, Palette, Image, MessageSquare, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Palette" | "Image" | "MessageSquare"
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent: Record<string, LucideIcon> = {
    Palette,
    Image,
    MessageSquare,
  }

  const Icon = IconComponent[icon]

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-purple-700" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="text-purple-700 font-medium inline-flex items-center hover:underline">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

