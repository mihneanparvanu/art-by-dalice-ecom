"use client"
import { useRouter } from "next/router"
import {useState, useEffect, use} from "react"
import ENFlag from "../../public/icons/ENFlag"

const languages = [
    {code: "en", label: "English", flag: "EN"},
    {code: "ro", label: "Romanian", flag: "RO"}
]

export default function LanguageSwitcher () {
    const router = useRouter();
    const {locale: currentLocale, pathname, asPath, query} = router;

    const [selectedLanguage, setSelectedLanguage] = useState(currentLocale || "en");
    useEffect(() => {
        if (currentLocale) {
            setSelectedLanguage(currentLocale);
        }
    }, [currentLocale]);

    const handleLanguageChange = (newLocale: string) => {
        if (newLocale !== selectedLanguage) {
            setSelectedLanguage(newLocale);
            router.push ({pathname, query}, asPath, {locale: newLocale})
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      handleLanguageChange(event.target.value);

const handleFlagSwitchToggle = () => {
    const newLocale = selectedLanguage === "en" ? "ro" : "en";
    handleLanguageChange(newLocale);
}

    return (
        <div className="w-7 h-7 rounded-full overflow-hidden border-2 flex flex-col items-center border-white">
           <ENFlag className="h-full"
           />
        </div>
    )
}