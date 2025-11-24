import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span>{language === 'pl' ? 'EN' : 'PL'}</span>
    </Button>
  );
}
