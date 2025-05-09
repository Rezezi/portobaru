"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Handle mobile menu overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        !hidden && "backdrop-blur-sm bg-background/70 border-b border-border"
      )}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="#home" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Rezezi Axcel
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="relative font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col md:hidden pt-20 px-6",
          isOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20 
        }}
        transition={{ duration: 0.2 }}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-2xl font-medium block py-3 border-b border-border hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}