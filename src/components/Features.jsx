export function Features() {
  const features = [
    {
      title: "Fast Processing",
      description: "Quick and efficient debt management solutions tailored to your needs."
    },
    {
      title: "Secure Platform",
      description: "Bank-grade security protocols to protect your financial information."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from our dedicated team of experts."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Why Choose Gradient Debt
          </h2>
          <p className="text-xl text-gray-600">
            We provide innovative solutions for managing your financial future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 