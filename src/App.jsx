import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import FeaturesSection from "./components/FeaturesSection";
import UploadSection from "./components/UploadSection";
import PricingSection from "./components/Pricing";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import SignUp from "./components/SignUp";

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <>
    <header className="sticky top-0 z-50 w-full">
      <Header />
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="mt-auto">
      <Footer />
    </footer>
  </>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Routes>
        {/* Main routes with layout */}
        <Route path="/" element={
          <MainLayout>
            <>
              <UploadSection />
              <FeaturesSection />
              <PricingSection />
              <ContactSection />
            </>
          </MainLayout>
        } />

        {/* Routes without layout */}
        <Route path="/register" element={<SignUp type="register" />} />
      </Routes>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;