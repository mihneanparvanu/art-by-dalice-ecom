import "../../styles/home.css";
import { styled } from "@linaria/react";
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
`;

const ImageContainer = styled.div``;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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


const PaintingsSection = styled.section `
  display: flex;
`

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
            src="/showcase/hero.jpg"
            alt="hero image"
            width={900}
            height={800}
          ></Image>
        </ImageContainer>
        <div className="heroEndContainer wrapper">
          <HeroTextContainer>
            <HeroHeading>
              {t("hero.heading")}
              <HeadingSpan> {t("hero.heading-span")} </HeadingSpan>
            </HeroHeading>
            <p className="heroSubheading">{t("hero.subheading")}</p>
          </HeroTextContainer>
          <ButtonPrimary title={t("hero.button")} className="" />
        </div>
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
    )}
