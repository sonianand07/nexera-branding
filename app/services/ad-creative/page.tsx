import Link from "next/link"
import { ArrowRight, Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AdCreativePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Ad Creative Packs</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Eye-catching, conversion-focused ad creatives for all your digital marketing campaigns.
                </p>
                <Button asChild size="lg">
                  <Link href="/request?service=ad-creative">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Ad creative examples"
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Static Ads</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Facebook/Instagram feed ads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Google Display Network banners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn ad creatives</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Twitter/X ad formats</span>
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
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Story/Reel Ads</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Instagram/Facebook Stories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>TikTok ad formats</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>YouTube Shorts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Snapchat ad formats</span>
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
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ad Copy & Messaging</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Compelling headlines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Persuasive ad descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Call-to-action variations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>A/B testing options</span>
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
              <h2 className="text-3xl font-bold mb-4">AI Style Transfer for Ads</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI can mimic the visual style of successful brands and campaigns. Want ads that feel like Apple's
                minimalism or Nike's boldness? We can do that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                  <img src="/placeholder.svg?height=400&width=600" alt="Original ad style" className="w-full h-auto" />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Original Ad</h3>
                    <p className="text-gray-600">Your product with standard styling</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Minimalist style transfer"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Minimalist Style</h3>
                    <p className="text-gray-600">Your product with Apple-inspired styling</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Bold style transfer"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Bold Style</h3>
                    <p className="text-gray-600">Your product with Nike-inspired styling</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Luxury style transfer"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Luxury Style</h3>
                    <p className="text-gray-600">Your product with premium, upscale styling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multilingual Section */}
        <section className="py-16">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-purple-700" />
                  </div>
                  <h2 className="text-3xl font-bold">Multilingual Ad Delivery</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Reach global audiences with our AI-powered translation and localization. Get your ads in multiple
                  languages without losing your brand voice.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Culturally appropriate translations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Localized imagery and references</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Support for 20+ languages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Region-specific ad formats</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/request?service=ad-creative">Get Multilingual Ads</Link>
                </Button>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">English</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="English ad example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Experience the difference</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">Spanish</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Spanish ad example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Experimenta la diferencia</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">French</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="French ad example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Découvrez la différence</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">German</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="German ad example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Erleben Sie den Unterschied</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-8 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-purple-700 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Basic Pack</h3>
                  <div className="text-3xl font-bold mb-1">$299</div>
                  <p className="opacity-80">One-time payment</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>5 static ad creatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>2 ad copy variations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>1 style transfer option</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>English only</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>48-hour delivery</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=ad-creative&plan=basic">Select Basic</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-purple-500 transform md:-translate-y-4">
                <div className="bg-purple-700 text-white p-6 text-center relative">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-2">Standard Pack</h3>
                  <div className="text-3xl font-bold mb-1">$499</div>
                  <p className="opacity-80">One-time payment</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>10 static ad creatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>3 story/reel ad creatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>4 ad copy variations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>2 style transfer options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Up to 2 languages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>48-hour delivery</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=ad-creative&plan=standard">Select Standard</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-purple-700 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Premium Pack</h3>
                  <div className="text-3xl font-bold mb-1">$799</div>
                  <p className="opacity-80">One-time payment</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>15 static ad creatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>6 story/reel ad creatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>6 ad copy variations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>3 style transfer options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Up to 5 languages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>48-hour delivery</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=ad-creative&plan=premium">Select Premium</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container px-4 md:px-8 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ad Campaigns?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get started today and receive your AI-generated ad creatives within 48 hours.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/request?service=ad-creative">Start Creating Ads</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

