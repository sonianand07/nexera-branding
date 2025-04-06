"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Upload, Palette, ImageIcon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RequestPage() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || ""

  const [selectedService, setSelectedService] = useState(initialService)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-16">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Request Our Services</h1>
              <p className="text-xl text-gray-600">
                Fill out the form below to get started with your AI-powered digital marketing assets.
              </p>
            </div>

            {formSubmitted ? (
              <Card className="bg-white shadow-lg">
                <CardContent className="pt-6 px-6 pb-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Request Submitted Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your request. Our team will review your information and get back to you within 24
                    hours to discuss the next steps.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)}>Submit Another Request</Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Service Request Form</CardTitle>
                  <CardDescription>Please provide the details about your project requirements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" placeholder="Your Company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Service Selection</h3>
                      <RadioGroup
                        defaultValue={selectedService}
                        onValueChange={setSelectedService}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="logo-branding" id="logo-branding" className="peer sr-only" />
                          <Label
                            htmlFor="logo-branding"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-purple-700 peer-data-[state=checked]:bg-purple-50 [&:has([data-state=checked])]:border-purple-700 [&:has([data-state=checked])]:bg-purple-50 cursor-pointer"
                          >
                            <Palette className="mb-3 h-6 w-6 text-purple-700" />
                            <div className="space-y-1 text-center">
                              <p className="text-sm font-medium leading-none">Logo & Brand Identity</p>
                            </div>
                          </Label>
                        </div>

                        <div>
                          <RadioGroupItem value="ad-creative" id="ad-creative" className="peer sr-only" />
                          <Label
                            htmlFor="ad-creative"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-purple-700 peer-data-[state=checked]:bg-purple-50 [&:has([data-state=checked])]:border-purple-700 [&:has([data-state=checked])]:bg-purple-50 cursor-pointer"
                          >
                            <ImageIcon className="mb-3 h-6 w-6 text-purple-700" />
                            <div className="space-y-1 text-center">
                              <p className="text-sm font-medium leading-none">Ad Creative Packs</p>
                            </div>
                          </Label>
                        </div>

                        <div>
                          <RadioGroupItem value="social-media" id="social-media" className="peer sr-only" />
                          <Label
                            htmlFor="social-media"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-purple-700 peer-data-[state=checked]:bg-purple-50 [&:has([data-state=checked])]:border-purple-700 [&:has([data-state=checked])]:bg-purple-50 cursor-pointer"
                          >
                            <MessageSquare className="mb-3 h-6 w-6 text-purple-700" />
                            <div className="space-y-1 text-center">
                              <p className="text-sm font-medium leading-none">Social Media Content</p>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Project Details</h3>
                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Please describe your project, target audience, and any specific requirements you have."
                          className="min-h-32"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select>
                            <SelectTrigger id="industry">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="food">Food & Beverage</SelectItem>
                              <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select>
                            <SelectTrigger id="timeline">
                              <SelectValue placeholder="Select your timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (24-48 hours)</SelectItem>
                              <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                              <SelectItem value="relaxed">Relaxed (1-2 weeks)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* AI Features */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">AI Features</h3>

                      <div className="space-y-2">
                        <Label>Style Transfer</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Input id="reference-url" placeholder="Reference URL (optional)" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="border border-gray-200 rounded-md px-4 py-2 w-full flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                              <Upload className="h-5 w-5 text-gray-500" />
                              <span className="text-sm text-gray-500">Upload reference image</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="languages">Multilingual Support</Label>
                        <Select>
                          <SelectTrigger id="languages">
                            <SelectValue placeholder="Select languages (if needed)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english-only">English Only</SelectItem>
                            <SelectItem value="spanish">English + Spanish</SelectItem>
                            <SelectItem value="french">English + French</SelectItem>
                            <SelectItem value="german">English + German</SelectItem>
                            <SelectItem value="chinese">English + Chinese</SelectItem>
                            <SelectItem value="multiple">Multiple Languages</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Budget Range</h3>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard">Standard Package</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="premium" id="premium" />
                          <Label htmlFor="premium">Premium Package (Additional customization)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom">Custom Quote (For complex projects)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full">
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

