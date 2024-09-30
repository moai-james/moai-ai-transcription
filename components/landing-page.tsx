'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mic, FileText, Clock, Globe, CheckCircle, Wand2 } from "lucide-react"
import Link from "next/link"
import { RainbowButton } from "@/components/ui/rainbow-button"
import BlurIn from "@/components/ui/blur-in"
import { FadeText } from "@/components/ui/fade-text"
import BlurFade from "@/components/ui/blur-fade"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Wand2 className="h-6 w-6 mr-2 text-blue-500" />
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">AI Transcribe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <FadeText
                  text="Transform Your Audio with AI Magic"
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                  direction="down"
                />
                <FadeText
                  text="Experience lightning-fast, incredibly accurate transcriptions powered by cutting-edge AI technology."
                  className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300"
                  direction="down"
                />
              </div>
              <div className="space-x-4">
                <BlurFade delay={0.5} yOffset={10}>
                  <RainbowButton>Get Started Free</RainbowButton>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 dark:text-blue-400">Magical Features</h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">Multiple File Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Support for various audio and video file formats, making transcription a breeze.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Get your transcriptions in minutes, not hours. Time is on your side with AI Transcribe.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">Global Language Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Transcribe content in over 30 languages, breaking down language barriers effortlessly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 dark:text-blue-400">Choose Your Magic Plan</h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white dark:bg-gray-800 border-blue-100 dark:border-blue-900 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Starter</CardTitle>
                  <CardDescription>For those dipping their toes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-500">$9.99</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Up to 10 hours of audio
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Standard accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Choose Starter</Button>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-blue-100 dark:border-blue-900 hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-bold">Popular</div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Pro</CardTitle>
                  <CardDescription>For the serious magicians</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-500">$24.99</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Up to 50 hours of audio
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      High accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Priority email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Choose Pro</Button>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-blue-100 dark:border-blue-900 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Enterprise</CardTitle>
                  <CardDescription>For transcription wizards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-500">Custom</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Contact us for pricing</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Unlimited audio
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      Highest accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                      24/7 phone & email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600 dark:text-blue-400">Ready to Experience the Magic?</h2>
              <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                Join thousands of satisfied users and start transcribing with AI today.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Wand2 className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-blue-600 dark:text-blue-400">AI Transcribe</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
                Contact Us
              </Link>
            </nav>
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Transcribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}