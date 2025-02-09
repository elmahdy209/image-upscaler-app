// src/components/ContactSection.jsx

import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال البيانات أو التنقل إلى صفحة شكرًا
    console.log("Form submitted", formData);
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
         Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          If you have any questions or comments, please feel free to contact us
        </p>

        <div className="flex justify-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
            onSubmit={handleSubmit}
          >
            {/* حقل الاسم */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email"
              />
            </div>

            {/* حقل الرسالة */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
              />
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
