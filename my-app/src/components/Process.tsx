import { MessageCircle, Pencil, Code2, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const stepIcons = [MessageCircle, Pencil, Code2, Rocket];

export function Process() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            {t.process.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            {t.process.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100"></div>
                )}
                
                <div className="relative bg-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm text-blue-600 mb-2">{step.duration}</div>
                  <h3 className="text-xl text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}