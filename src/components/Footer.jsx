export function Footer() {
  return (
    <footer className="bg-[#F2EEF0] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-light tracking-wider text-gray-800 mb-4">
              <span className="font-medium">Gradient</span>
              <span className="font-extralight ml-1">Debt</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Streamlining commercial debt recovery for banks without compromising customer relationships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">info@gradientdebt.com</li>
              <li className="text-gray-600">1-800-GRADIENT</li>
              <li className="text-gray-600">123 Financial District<br />New York, NY 10004</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Gradient Debt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 