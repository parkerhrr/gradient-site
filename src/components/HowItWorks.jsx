import workspaceImage from '../assets/workspace.jpg'

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Portfolio Review",
      description: "We analyze your delinquent commercial accounts and provide a clear recovery strategy within 48 hours."
    },
    {
      number: "2",
      title: "Transparent Recovery",
      description: "Our team executes the recovery plan while keeping you informed at every step, maintaining professional relationships with your customers."
    },
    {
      number: "3",
      title: "Results-Based Payment",
      description: "You only pay when we successfully recover funds - ensuring our interests are perfectly aligned with yours."
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple, transparent process to help you recover assets
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Steps Section */}
          <div className="flex-1 space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-6 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-light shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base font-light text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="aspect-square bg-[#F2EEF0] rounded-2xl overflow-hidden">
              <img 
                src={workspaceImage}
                alt="Modern workspace with people working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 