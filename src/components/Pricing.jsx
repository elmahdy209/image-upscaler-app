const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Pricing Plan</h2>
        <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          Choose the Plan that suits your needs, and enjoy an exceptional image enlargement experience. All plans come with a 7-day free trial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Plan</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">$0</p>
            <ul className="space-y-4 mb-8">
              {["One-click image upscaling", "Enlarge images up to 4x", "Double popup confirmation", "Free Forever"].map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="cursor-pointer w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-500 relative transform hover:-translate-y-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-blue-500 text-white px-8 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Plan</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">$9.99<span className="text-lg text-gray-600">/month</span></p>
            <ul className="space-y-4 mb-8">
              {[
                "Upload unlimited number of images",
                "Enlarge images up to 8x",
                "Advanced image enlarger tool",
                "Fast technical support via chat",
                "High resolution downloads",
                "7-day image storage"
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="cursor-pointer w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Plan</h3>
            <p className="text-3xl font-bold text-purple-600 mb-6">
              $19.99<span className="text-lg text-gray-600">/month</span>
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Upload unlimited number of images",
                "Enlarge images up to 16x",
                "Advanced image enlarger tool with full customization",
                "24/7 Professional technical support",
                "High resolution downloads",
                "30-day image storage",
                "AI-powered image enhancement",
                "Access to exclusive features"
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="cursor-pointer w-full px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;