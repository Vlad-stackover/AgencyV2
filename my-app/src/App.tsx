import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

// Subpages
import Privacy from "./pages/Privacy";


export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Main one-page layout */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Hero />
              <Services />
              <Portfolio />
              <Process />
              <Testimonials />
              <Pricing />
              <CTA />
              <Footer />
            </div>
          }
        />

        {/* Subpages */}
        <Route path="/privacy" element={<Privacy />} />
        
      </Routes>
    </LanguageProvider>
  );
}
