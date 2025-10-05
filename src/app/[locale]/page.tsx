import { styled } from "@linaria/react";
import { css } from "@linaria/core";
// Components
import Image from "next/image";

// Utilities
import { getTranslations } from "next-intl/server";
import fetchProducts from "../../data/FetchProducts";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale == "en"
      ? "Dalice (Daniela Davidescu Brown)"
      : "Dalice (Daniela Davidescu Brown)";

  return {
    title: title,
    alternates: {
      languages: {
        en: "/shop",
        ro: "/shop",
      },
    },
  };
}

type HomeParams = {
  params: Promise<{
    locale: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

// Styles
const HeroSection = styled.section`
  display: flex;
  gap: 2rem;
  height: 90dvh;
  background-color: var(--surface-secondary);
  @media screen and (width < 1024px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const HeroImage = css`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const HeroTextButtonContainer = styled.div`
  padding-block-end: 2rem;
  padding-inline: 1rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 3rem;
  padding-inline-end: 2 rem;
  @media screen and (width < 1024px) {
    width: 100%;
    padding-inline: 1rem;
  }
`;

const HeroTextContainer = styled.div`
  color: var(--accent-primary);
  width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (width < 1024px) {
    width: 100%;
  }
`;

const HeroHeading = styled.h1`
  font-size: 6rem;
  font-family: var(--font-serif);
  line-height: 1.1;
  font-weight: 600;
`;

const HeadingSpan = styled.span`
  font-style: italic;
`;

export default async function Home(props: HomeParams) {
  const params = await props.params;
  const locale = params.locale || "en";
  const t = await getTranslations("Home");
  return (
    <>
      <HeroSection>
        <ImageContainer>
          <Image
            priority={true}
            className={HeroImage}
            src="/hero/hero.jpg"
            alt="hero image"
            width={900}
            height={800}
          ></Image>
        </ImageContainer>
        <HeroTextButtonContainer>
          <HeroTextContainer>
            <HeroHeading>
              {t("hero.heading")}
              <HeadingSpan> {t("hero.heading-span")} </HeadingSpan>
            </HeroHeading>
            <p className="heroSubheading">{t("hero.subheading")}</p>
          </HeroTextContainer>
        </HeroTextButtonContainer>
      </HeroSection>
    </>
  );
}
