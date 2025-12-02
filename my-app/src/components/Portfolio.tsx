import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "lucide-react";

const projectImages = [
  "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyODUxNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI4NDQzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2Mjc1OTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            {t.portfolio.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={projectImages[index]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4">
                    
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <ExternalLink className="h-5 w-5 text-slate-900" />
                        </div>
                      </a>
                    
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-green-600">{project.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            {t.portfolio.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}