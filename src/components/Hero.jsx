import { AuroraBackground } from './ui/AuroraBackground'
import { HoverButton } from './ui/HoverButton'

export function Hero() {
  return (
    <AuroraBackground>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8">
            Commercial collection for regional and community banks
          </h1>
          <p className="text-xl font-light text-gray-600 mx-auto max-w-3xl mb-12">
            Specializing in restoring balance to community and regional banks portfolios through commercial and industrial debt collection
          </p>
          <div className="flex justify-center">
            <a 
              href="https://form.typeform.com/to/vWAugNcp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverButton>
                Talk to us →
              </HoverButton>
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
} 