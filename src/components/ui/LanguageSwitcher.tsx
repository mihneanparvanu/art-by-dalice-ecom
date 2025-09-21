"use client";

// Correct imports for App Router with next-intl
import { useRouter, usePathname } from "../../i8n/navigation";
import { useLocale } from "next-intl";
import { styled } from "@linaria/react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchTo(locale: string) {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);

    const newPath = `${locale}${pathname}${url.search}`;
    router.replace(newPath);
  }

  const otherLocale = currentLocale === "en" ? "ro" : "en";
  const dropdownOption = otherLocale === "en" ? "English" : "Romanian";

  // Styles

  const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 32px;
    display: flex;
  `;

  return (
    <Container>
      <button
        onClick={() => switchTo(otherLocale)}
        className="languageButton languageSwitcherButton"
      >
        {dropdownOption}
      </button>
    </Container>
  );
}
