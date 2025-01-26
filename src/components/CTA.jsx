import { HoverButton } from './ui/HoverButton'

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-6">
          Ready to optimize your collection process?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Let's discuss how we can help restore balance to your portfolio
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
    </section>
  )
} 