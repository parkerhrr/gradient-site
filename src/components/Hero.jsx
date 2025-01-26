import { AuroraBackground } from './ui/AuroraBackground'
import { HoverButton } from './ui/HoverButton'

export function Hero() {
  return (
    <AuroraBackground>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-light text-gray-900 mb-6">
            Commercial collection<br />
            for regional and community banks.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Specializing in restoring balance to community and regional banks portfolios<br />
            through commercial and industrial debt collection.
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