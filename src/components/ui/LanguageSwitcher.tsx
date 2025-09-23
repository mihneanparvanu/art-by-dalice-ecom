// src/components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "../../i8n/navigation";
import { useLocale } from "next-intl";

import { styled } from "@linaria/react";

import RoFlag from "../icons/RoFlag";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchTo(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.replace(pathname + (window.location.search || ""), { locale });
  }

  const otherLocale = currentLocale === "en" ? "ro" : "en";

  const dropdownOption = otherLocale === "en" ? "English" : "Romanian";
  const dropdownFlag = otherLocale === "en" ? <EnFlag /> : <RoFlag />;

  // Styles
  const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 32px;
    display: flex;
  `;

  const Button = styled.button`
    background: var(--accent-primary);
    color: var(--white, #fff);
    border-radius: calc(infinity * 1px);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
      background: var(--accent-secondary);
    }
  `;

  const FlagContainer = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: calc(infinity * 1px);
    position: relative;
    overflow: hidden;

    #flag {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  `;

  return (
    <Container>
      <Button
        onClick={() => switchTo(otherLocale)}
        className="languageButton languageSwitcherButton"
      >
        <FlagContainer> {dropdownFlag} </FlagContainer>
      </Button>
    </Container>
  );
}
