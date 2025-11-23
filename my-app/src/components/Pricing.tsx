import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();
  
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            {t.pricing.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border-2 ${
                  isPopular 
                    ? 'border-blue-600 shadow-2xl scale-105' 
                    : 'border-slate-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {t.pricing.mostPopular}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="text-4xl text-slate-900 mb-1">{plan.price}</div>
                  <div className="text-sm text-slate-600">{t.pricing.oneTime}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={isPopular ? "default" : "outline"}
                  size="lg"
                >
                  {t.nav.getStarted}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600">
            {t.pricing.customNote} <a href="#contact" className="text-blue-600 hover:underline">{t.pricing.contactUs}</a> {t.pricing.customNoteSuffix}
          </p>
        </div>
      </div>
    </section>
  );
}