export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Rezezi Axcel</p>
            <p className="text-muted-foreground text-sm">Fullstack Developer</p>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} Rezezi Axcel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}