"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "PPLG Class",
    description: "A project from the PPLG class.",
    image: "/pplg.png",
    tags: ["Next.js", "TypeScript","Tailwind CSS"],
    liveLink: "https://kelas-five.vercel.app/",
    githubLink: "https://github.com/Rezezi/pplg"
  },
  {
    title: "UTS Project",
    description: "My midterm exam project, a fully responsive web app.",
    image: "/image.png",
    tags: ["Next.js", "TypeScript","Tailwind CSS"],
    liveLink: "https://uts-axcel.vercel.app/",
    githubLink: "https://github.com/Rezezi/uts-axcel"
  },
  {
    title: "Gig Flow",
    description: "A Sistem Crud .",
    image: "/gig.png",
    tags: ["laravel", "PHP", "MySQL"],
    liveLink: "#",
    githubLink: "https://github.com/rezezi/laravel"
  }
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}