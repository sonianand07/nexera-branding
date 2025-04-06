import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/placeholder.svg?height=500&width=1000')] bg-no-repeat bg-cover opacity-5 z-0"></div>

      <div className="container relative z-10 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-purple-700">AI-Powered</span> Digital Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Transform your brand with affordable, high-quality digital assets created by our advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/request">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="AI-generated brand assets showcase"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">24hr Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

