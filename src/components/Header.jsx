// src/components/Header.jsx
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8">
      <div  className="container  mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" ><div className=" cursor-pointer flex items-center gap-4">
          <div className="w-16 h-16"> 
            <img 
              src="/public/img-enhancer.jpeg"
              className="rounded-full w-full h-full object-cover ring-2 ring-white/30 shadow-lg"
              alt="Image Enhancer Logo"
            />
          </div>
          <h1 className="text-4xl font-bold">ImageGenix</h1>
        </div></Link>
        
        <nav className="flex space-x-6 text-lg">
          <a href="/" className="hover:text-yellow-300 transition duration-300 font-semibold">Home</a>
          <a href="#features" className="hover:text-yellow-300 transition duration-300 font-semibold">Features</a>
          <a href="#pricing" className="hover:text-yellow-300 transition duration-300 font-semibold">Pricing</a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300 font-semibold">Contact</a>
          <a href="register" className="hover:text-yellow-300 transition duration-300 font-semibold">SignUp</a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
