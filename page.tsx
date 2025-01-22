import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Server, MessageSquare, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { Layout } from "@/components/Layout"

export default function LandingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black to-[#1a2e1a]">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17368912182566786db41f2c765ec069c62f0_Nq9viekjFM-removebg-preview-khrzSgOS7B4TXNI5Rj8kJjPJ0y2AFB.png')] bg-center bg-no-repeat bg-contain blur-sm" />
          <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17368912182566786db41f2c765ec069c62f0_Nq9viekjFM-removebg-preview-khrzSgOS7B4TXNI5Rj8kJjPJ0y2AFB.png"
              alt="CHAO MUANG RedM Server Logo"
              width={300}
              height={300}
              className="mb-8 animate-float"
            />
            <h1 className="mb-6 text-4xl font-bold text-[#e4c054] md:text-6xl font-['Rye']">Welcome to CHAO MUANG</h1>
            <p className="max-w-2xl mb-8 text-lg text-gray-300">
              Experience the ultimate Red Dead Redemption 2 roleplay server. Immerse yourself in the Wild West with a
              thriving community of outlaws, lawmen, and everything in between.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-western bg-[#8B4513] text-[#e4c054] hover:bg-[#654321] border-[#e4c054]">
                Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-western border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white"
              >
                Discord
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-[#e4c054] md:text-4xl font-['Playfair_Display']">
              Server Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-black/60 border-[#e4c054]/20">
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="w-12 h-12 mb-4 text-[#e4c054]" />
                  <h3 className="mb-2 text-xl font-bold text-[#e4c054] font-['Playfair_Display']">Active Community</h3>
                  <p className="text-center text-gray-300">Join our thriving community of passionate roleplayers</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border-[#e4c054]/20">
                <CardContent className="flex flex-col items-center p-6">
                  <Server className="w-12 h-12 mb-4 text-[#e4c054]" />
                  <h3 className="mb-2 text-xl font-bold text-[#e4c054] font-['Playfair_Display']">
                    Stable Performance
                  </h3>
                  <p className="text-center text-gray-300">Experience smooth gameplay with our optimized server</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border-[#e4c054]/20">
                <CardContent className="flex flex-col items-center p-6">
                  <MessageSquare className="w-12 h-12 mb-4 text-[#e4c054]" />
                  <h3 className="mb-2 text-xl font-bold text-[#e4c054] font-['Playfair_Display']">Custom Scripts</h3>
                  <p className="text-center text-gray-300">Unique features and mechanics for enhanced roleplay</p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border-[#e4c054]/20">
                <CardContent className="flex flex-col items-center p-6">
                  <Gamepad2 className="w-12 h-12 mb-4 text-[#e4c054]" />
                  <h3 className="mb-2 text-xl font-bold text-[#e4c054] font-['Playfair_Display']">Regular Events</h3>
                  <p className="text-center text-gray-300">Participate in exciting community events and competitions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-[#e4c054] md:text-4xl font-['Playfair_Display']">
              How to Join
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">1. Join our Discord server to get started</p>
              <p className="text-lg">2. Read and accept our server rules</p>
              <p className="text-lg">3. Complete the whitelist application</p>
              <p className="text-lg">4. Download required resources and connect to the server</p>
            </div>
            <Button size="lg" className="mt-8 btn-western btn-discord">
              Join Discord
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 text-center bg-black/80">
          <p className="text-gray-400">© 2024 CHAO MU ANG RedM Server. Not affiliated with Rockstar Games.</p>
        </footer>
      </div>
    </Layout>
  )
}

