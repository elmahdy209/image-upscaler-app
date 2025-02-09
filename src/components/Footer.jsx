// src/components/Footer.jsx

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          {/* أيقونات وسائل التواصل الاجتماعي */}
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-4"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-4"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-4"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-4"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="flex justify-center mb-8">
          {/* روابط الصفحات */}
          <a href="/" className="text-gray-400 hover:text-white mx-4">
            الصفحة الرئيسية
          </a>
          <a href="#about" className="text-gray-400 hover:text-white mx-4">
            عن الموقع
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-4">
            تواصل معنا
          </a>
        </div>

        {/* حقوق الطبع والنشر */}
        <div className="text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
