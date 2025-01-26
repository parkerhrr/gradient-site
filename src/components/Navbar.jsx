import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HoverButton } from './ui/HoverButton'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-light tracking-wider text-gray-800 hover:text-primary transition-colors">
              <span className="font-medium">Gradient</span>
              <span className="font-extralight ml-1">Debt</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-base font-normal text-gray-700 hover:text-gray-900 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-base font-normal text-gray-700 hover:text-gray-900 transition-colors"
            >
              How it Works
            </a>
            <a 
              href="https://form.typeform.com/to/vWAugNcp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverButton>
                Contact
              </HoverButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="block px-4 py-2 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="block px-4 py-2 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              How it Works
            </a>
            <div className="px-4">
              <a 
                href="https://form.typeform.com/to/vWAugNcp"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <HoverButton>
                  Contact
                </HoverButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 