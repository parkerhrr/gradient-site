export function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary text-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#home" className="hover:text-secondary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-secondary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
} 