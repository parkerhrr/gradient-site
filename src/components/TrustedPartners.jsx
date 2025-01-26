import bank1Logo from '../assets/logos/bank1-logo.svg'
import brand2Logo from '../assets/logos/brand2-logo.svg'
import brand3Logo from '../assets/logos/brand3-logo.svg'
import brand4Logo from '../assets/logos/brand4-logo.svg'

export function TrustedPartners() {
  const partners = [
    { name: "Bank Three", logo: brand3Logo, scale: 'scale-110' },
    { name: "Bank Two", logo: brand2Logo, scale: 'scale-125' },
    { name: "Bank One", logo: bank1Logo, scale: 'scale-95' },
    { name: "Bank Four", logo: brand4Logo, scale: 'scale-90' },
  ]

  return (
    <section className="relative -mt-16 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg font-light text-gray-600">
            Trusted by global leaders, and now bringing world-class solutions to regional and community partners
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full h-24 flex items-center justify-center px-6"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className={`w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0 ${partner.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 