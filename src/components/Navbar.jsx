import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

          <div className="flex items-center space-x-8">
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
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 