import Link from "next/link"
import { ArrowRight, Check, Calendar, Zap, BarChart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Content Packs</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Consistent, engaging content for your social media channels, created by our AI to match your brand
                  voice.
                </p>
                <Button asChild size="lg">
                  <Link href="/request?service=social-media">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Social media content examples"
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
                  <Calendar className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Monthly Content</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>15-30 posts per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Content calendar planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Platform-specific formatting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Seasonal content themes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Types</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Engaging image posts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Carousel/slideshow content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quote and text graphics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Promotional content</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy & Analytics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Content strategy document</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Hashtag research</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly performance report</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Content optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Examples Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Content Examples</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI creates diverse content types tailored to your brand and audience. Here are some examples of what
                we can create for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Lifestyle post example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Lifestyle Content</h3>
                  <p className="text-gray-600 mb-3">
                    Relatable, aspirational content that showcases your products in real-life settings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#lifestyle</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#brandname</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Educational post example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Educational Content</h3>
                  <p className="text-gray-600 mb-3">
                    Informative posts that position your brand as an authority in your industry.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#didyouknow</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#tips</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Promotional post example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Promotional Content</h3>
                  <p className="text-gray-600 mb-3">
                    Strategic promotional posts that drive conversions without being overly salesy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#special</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">#limited</span>
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
                  <h2 className="text-3xl font-bold">Multilingual Content</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Reach diverse audiences with our AI-powered translation and localization. Get your social content in
                  multiple languages without losing your brand voice.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Culturally appropriate translations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Localized hashtags and references</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Support for 20+ languages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Region-specific content adaptations</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/request?service=social-media">Get Multilingual Content</Link>
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
                        alt="English content example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Start your day with our premium coffee blend.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">Spanish</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Spanish content example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Comienza tu día con nuestra mezcla de café premium.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">French</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="French content example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Commencez votre journée avec notre mélange de café premium.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="p-4 bg-gray-50 border-b">
                      <span className="text-sm font-medium">German</span>
                    </div>
                    <div className="p-4">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="German content example"
                        className="w-full h-auto mb-2"
                      />
                      <p className="text-sm">Beginnen Sie Ihren Tag mit unserer Premium-Kaffeemischung.</p>
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
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-1">$399</div>
                  <p className="opacity-80">per month</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>15 posts per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>2 content types</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Basic content calendar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>English only</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Monthly delivery</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=social-media&plan=starter">Select Starter</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-purple-500 transform md:-translate-y-4">
                <div className="bg-purple-700 text-white p-6 text-center relative">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <div className="text-3xl font-bold mb-1">$699</div>
                  <p className="opacity-80">per month</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>20 posts per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>4 content types</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Detailed content calendar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Up to 2 languages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Bi-weekly delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Basic performance report</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=social-media&plan=growth">Select Growth</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-purple-700 text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <div className="text-3xl font-bold mb-1">$999</div>
                  <p className="opacity-80">per month</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>30 posts per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>All content types</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Strategic content calendar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Up to 5 languages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Weekly delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Strategy optimization</span>
                    </li>
                  </ul>

                  <Button asChild size="lg" className="w-full">
                    <Link href="/request?service=social-media&plan=premium">Select Premium</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container px-4 md:px-8 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get started today and receive your first batch of AI-generated content within a week.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/request?service=social-media">Start Your Content Journey</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

