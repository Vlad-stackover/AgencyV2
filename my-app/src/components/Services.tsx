import { Palette, Zap, Smartphone, Search, Code, LineChart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const serviceIcons = [Palette, Zap, Smartphone, Search, Code, LineChart];

export function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            {t.services.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}