import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LogoBrandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Logo & Brand Identity Pack</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Establish a strong, cohesive brand identity with our AI-powered design solutions.
                </p>
                <Button asChild size="lg">
                  <Link href="/request?service=logo-branding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Brand identity examples"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16">
          <div className="container px-4 md:px-8 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Logo Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Primary logo in multiple formats</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Secondary/alternative logo versions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Logo mark/icon for social profiles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Favicon for website</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Elements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Color palette with hex codes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Typography selection and hierarchy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Brand patterns and textures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Iconography style guide</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Guidelines</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Logo usage and spacing rules</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Color application guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Typography implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Digital brand application examples</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Style Transfer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Style Transfer Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI can adapt to any brand aesthetic you admire. Want the sleek minimalism of Apple or the bold
                energy of Nike? We can apply those styles to your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Original brand style"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Original Style</h3>
                  <p className="text-gray-600">Your brand's starting point</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Minimalist style transfer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Minimalist Style</h3>
                  <p className="text-gray-600">Clean, elegant, and sophisticated</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Bold style transfer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Bold Style</h3>
                  <p className="text-gray-600">Energetic, vibrant, and attention-grabbing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container px-4 md:px-8 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-700">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  Fill out our detailed brand questionnaire to help our AI understand your vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Generation</h3>
                <p className="text-gray-600">Our AI creates multiple design concepts based on your requirements.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-700">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Refinement</h3>
                <p className="text-gray-600">Select your preferred concept and request any adjustments.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-700">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-gray-600">Receive your complete brand package in all necessary formats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-8 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>

            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-700 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Logo & Brand Identity Pack</h3>
                <div className="text-4xl font-bold mb-1">$499</div>
                <p className="opacity-80">One-time payment</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Complete logo package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Brand color palette</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Typography selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Brand guidelines document</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All source files included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>2 rounds of revisions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>48-hour delivery</span>
                  </li>
                </ul>

                <Button asChild size="lg" className="w-full">
                  <Link href="/request?service=logo-branding">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container px-4 md:px-8 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get started today and receive your complete brand identity package within 48 hours.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/request?service=logo-branding">Start Your Brand Journey</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

