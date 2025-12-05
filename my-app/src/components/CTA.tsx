import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:gruzinvlad96@gmail.com?subject=Zapytanie%20WebCraft"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                {t.cta.scheduleConsultation}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                {t.cta.viewPortfolio}
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-blue-500">
            <a href="mailto:gruzinvlad96@gmail.com" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              gruzinvlad96@gmail.com
            </a>
            <a href="tel:+48739562035" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              +48 739-562-035
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}