import { styled } from "@linaria/react";
import { css } from "@linaria/core";
// Components
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import ProductsSection from "../../components/product/ProductsSection";
import ProductCard from "../../components/product/ProductCard";

import Link from "next/link";
import Image from "next/image";

// Utilities
import { getTranslations } from "next-intl/server";
import fetchProducts from "../../data/FetchProducts";

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
  padding-block: 2rem;
  background-color: var(--surface-secondary);
  @media screen and (width < 1024px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div``;

const HeroImage = css`
  width: 100%;
`;

const HeroTextButtonContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  padding-inline-end: 2 rem;
  @media screen and (width < 1024px) {
    width: 100%;
    padding-inline: 1rem;
  }
`;

const HeroTextContainer = styled.div`
  width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

const PaintingsSection = styled.section`
  display: flex;
`;

export default async function Home(props: HomeParams) {
  const params = await props.params;
  const locale = params.locale || "en";
  const t = await getTranslations("Home");
  const paintings = await fetchProducts(locale);
  return (
    <>
      <HeroSection>
        <ImageContainer>
          <Image
            className={HeroImage}
            src="/showcase/hero.jpg"
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
          <ButtonPrimary title={t("hero.button")} className="" />
        </HeroTextButtonContainer>
      </HeroSection>
      <PaintingsSection>
        {paintings && (
          <ProductsSection
            sectionTitle={t("paintingsSection.title")}
            buttonTitle={t("paintingsSection.button")}
            products={paintings.slice(0, 4).map((painting) => (
              <Link
                href={{ pathname: "/product", query: { id: painting.id } }}
                key={painting.id}
              >
                <ProductCard
                  key={painting.id}
                  productTitle={painting.name}
                  productPrice={painting.price}
                  productImageURL={painting.image_url}
                />
              </Link>
            ))}
          />
        )}
      </PaintingsSection>
    </>
  );
}
