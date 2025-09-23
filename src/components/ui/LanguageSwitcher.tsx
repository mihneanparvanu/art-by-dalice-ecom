// src/components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "../../i8n/navigation";
import { useLocale } from "next-intl";

import { styled } from "@linaria/react";

import "./../../../node_modules/flag-icons/css/flag-icons.min.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchTo(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.replace(pathname + (window.location.search || ""), { locale });
  }

  const otherLocale = currentLocale === "en" ? "ro" : "en";

  const dropdownFlag =
    otherLocale === "en" ? (
      <span className="fi fi-gb "> </span>
    ) : (
      <span className="fi fi-ro"></span>
    );

  // Styles
  const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 32px;
    display: flex;
  `;

  const Button = styled.button`
    background: var(--surface-secondary);
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.4rem;
    border-radius: calc(infinity * 1px);
    color: var(--content-primary);

    &:hover {
      transition: all 0.2s;
      background: var(--cool-gray-900);
    }
  `;

  const FlagContainer = styled.div`
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    border-radius: calc(infinity * 1px);
    overflow: hidden;
    span {
      height: 100%;
      width: 100%;
      scale: 1.25;
    }
  `;

  return (
    <Container>
      <Button
        onClick={() => switchTo(otherLocale)}
        className="languageButton languageSwitcherButton"
      >
        <FlagContainer>{dropdownFlag}</FlagContainer>
      </Button>
    </Container>
  );
}
