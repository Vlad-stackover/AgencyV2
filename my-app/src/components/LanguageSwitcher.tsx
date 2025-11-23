import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span>{language === 'en' ? 'PL' : 'EN'}</span>
    </Button>
  );
}
