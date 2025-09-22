// src/components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "../../i8n/navigation";
import { useLocale } from "next-intl";
import { styled } from "@linaria/react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchTo(locale: string) {
const newPath = locale == "en" ? pathname : 

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

  const Button = styled.button`
    background: var(--accent-primary, #000);
    color: var(--white, #fff);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
      background: var(--accent-secondary, #333);
    }
  `;

  return (
    <Container>
      <Button
        onClick={() => switchTo(otherLocale)}
        className="languageButton languageSwitcherButton"
      >
        {dropdownOption}
      </Button>
    </Container>
  );
}