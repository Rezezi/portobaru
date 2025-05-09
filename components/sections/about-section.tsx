"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, BookOpen, User2 } from "lucide-react"

import { cn } from "@/lib/utils"

const aboutData = {
  description: "I'm Rezezi Axcel, a passionate fullstack developer with a keen eye for design and a love for creating seamless user experiences. My journey in development started with a curiosity for how things work on the web, which evolved into a professional career building innovative solutions for modern problems.",
  qualities: [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Developer",
      description: "I enjoy bringing ideas to life through code, focusing on building scalable and maintainable applications."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Lifelong Learner",
      description: "Technology evolves rapidly, and I'm committed to continuously improving my skills and staying updated with the latest trends."
    },
    {
      icon: <User2 className="w-8 h-8" />,
      title: "Problem Solver",
      description: "I approach each project as a unique problem to solve, finding the most efficient and effective solutions."
    }
  ]
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          
          <div className="space-y-10">
            <p className="text-lg md:text-xl text-muted-foreground text-center mx-auto max-w-3xl">
              {aboutData.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {aboutData.qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 * index,
                    ease: "easeOut"  
                  }}
                  className={cn(
                    "p-6 rounded-lg text-center",
                    "bg-accent/50 backdrop-blur-sm"
                  )}
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}