// src/components/FeaturesSection.jsx

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Fast Results</h3>
            <p>Get your images upscaled within seconds with our advanced AI tools.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">High-Quality</h3>
            <p>Experience enhanced image quality with 16x upscaling capabilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p>Simple and intuitive interface for all your image upscaling needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
