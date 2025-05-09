"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, PresentationControls } from "@react-three/drei"

import { Button } from "@/components/ui/button"
import HeroModel from "@/components/three/hero-model"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 pt-20 lg:pt-0">
        <div className="flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Rezezi Axcel
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-4">
              Fullstack Developer
            </h2>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mt-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Creating beautiful, functional, and user-centered digital experiences through clean and efficient code.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>

        <div className="h-[400px] lg:h-[600px] order-first lg:order-last flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            className="w-full h-full"
          >
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-0.5, 0.5]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <Float rotationIntensity={0.2}>
                <HeroModel />
              </Float>
            </PresentationControls>
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={5}
              blur={2.4}
            />
          </Canvas>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-10 h-10 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}