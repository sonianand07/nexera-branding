import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import FeatureSection from "@/components/feature-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />

        {/* Core Services Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="services">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI-powered creative solutions for businesses of all sizes. Fast, affordable, and tailored to your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Logo & Brand Identity"
              description="Complete brand identity packages including logos, color palettes, typography, and mockups."
              icon="Palette"
              href="/services/logo-branding"
            />
            <ServiceCard
              title="Ad Creative Packs"
              description="Eye-catching ad creatives optimized for various platforms and formats."
              icon="Image"
              href="/services/ad-creative"
            />
            <ServiceCard
              title="Social Media Content"
              description="Monthly content packs to keep your social media presence consistent and engaging."
              icon="MessageSquare"
              href="/services/social-media"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 bg-gray-50">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Powered Advantage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets NexEra Branding apart from traditional agencies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FeatureSection
                title="Style Transfer Technology"
                description="Our AI can mimic the visual style of any brand or aesthetic. Want Apple's minimalism or Nike's boldness? We can apply it to your brand assets."
                icon="Wand2"
                imageUrl="/placeholder.svg?height=300&width=500"
              />
              <FeatureSection
                title="Multilingual Content Delivery"
                description="Reach global audiences with our AI-powered translation and localization. Get your content in multiple languages without losing your brand voice."
                icon="Globe"
                imageUrl="/placeholder.svg?height=300&width=500"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what businesses like yours have experienced.
            </p>
          </div>

          <TestimonialCarousel />
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="px-4 md:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Brand?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Get started today and see how our AI-powered solutions can elevate your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-purple-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

