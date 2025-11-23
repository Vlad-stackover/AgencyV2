import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}