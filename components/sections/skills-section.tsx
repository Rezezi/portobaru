"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const frontendSkills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Framer Motion", level: 75 },
]

const backendSkills = [
  { name: "Laravel", level: 85 },
  { name: "XAMPP", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL", level: 70 },
  { name: "Express", level: 75 },
]

function SkillBar({ skill, animationDelay, inView }: { skill: { name: string, level: number }, animationDelay: number, inView: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: animationDelay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="skills" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary">F</span>
                </span>
                Frontend Development
              </h3>
              <div>
                {frontendSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    animationDelay={0.1 * index}
                    inView={isInView} 
                  />
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary">B</span>
                </span>
                Backend Development
              </h3>
              <div>
                {backendSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    animationDelay={0.1 * index}
                    inView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}