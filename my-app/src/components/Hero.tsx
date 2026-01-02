import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <span className="text-xl text-slate-900">Adeo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">{t.nav.portfolio}</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">{t.nav.pricing}</a>
            <LanguageSwitcher />
            <a
              href="mailto:gruzinvlad96@gmail.com?subject=Zapytanie%20WebCraft"
            >
              <Button variant="default">{t.nav.getStarted}</Button>
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-slate-900">
              {t.hero.title}{" "}
              <span className="text-blue-600">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-xl text-slate-600">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:gruzinvlad96@gmail.com?subject=Zapytanie%20WebCraft"
              >
                <Button size="lg" className="gap-2">
                  {t.hero.startProject}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button size="lg" variant="outline">
                  {t.hero.viewWork}
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl text-slate-900">200+</div>
                <div className="text-slate-600">{t.hero.stats.projects}</div>
              </div>
              <div className="h-12 w-px bg-slate-300"></div>
              <div>
                <div className="text-3xl text-slate-900">98%</div>
                <div className="text-slate-600">{t.hero.stats.satisfaction}</div>
              </div>
              <div className="h-12 w-px bg-slate-300"></div>
              <div>
                <div className="text-3xl text-slate-900">14 Days</div>
                <div className="text-slate-600">{t.hero.stats.delivery}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg1NDUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web design workspace"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}