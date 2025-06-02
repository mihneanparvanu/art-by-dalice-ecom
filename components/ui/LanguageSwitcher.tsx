"use client";
import "./language-switcher.css";

// Correct imports for App Router with next-intl
import { useRouter, usePathname } from "../../i8n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  const otherLocale = currentLocale === "en" ? "ro" : "en";

  const mainButtonText = currentLocale === "en" ? "English" : "Romanian";
  const dropdownOption = otherLocale === "en" ? "English" : "Romanian";

  return (
    <div className="languageDropdown z-50">
      <button popoverTarget="langPopover" className="currentLang languageSwitcherButton">{mainButtonText}</button>
      <div popover="manual" id = "langPopover" className="languagesWrapper">
        <button
          onClick={() => changeLanguage(otherLocale)}
          className="languageButton languageSwitcherButton"> 
          {dropdownOption}
        </button>
      </div>
    </div>
  );
}
