import { Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            {t.testimonials.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">"{testimonial.content}"</p>
              <div className="pt-6 border-t border-slate-200">
                <div className="text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}