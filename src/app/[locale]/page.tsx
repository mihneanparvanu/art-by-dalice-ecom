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

const ImageContainer = styled.div`
`;

export default async function Home(props: HomeParams) {
  const params = await props.params;
  const locale = params.locale || "en";
  const t = await getTranslations("Home");
  const paintings = await fetchProducts(locale);
  return (
    <div className="">
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
          <div className="hero-text-container">
            <h1 className="heroHeading">
              {t("hero.heading")}
              <span className="hero-heading-span">
                {" "}
                {t("hero.heading-span")}
              </span>
            </h1>
            <p className="heroSubheading">{t("hero.subheading")}</p>
          </div>
          <ButtonPrimary title={t("hero.button")} className="" />
        </div>
      </HeroSection>

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

      <div className="wrapper">
        <p className="">{t("quote")}</p>
        <p className="">Dalice</p>
      </div>
      <div className="wrapper">
        <div>
          <p>
            My artistic creations are destined to unveil your inherent beauty,
            to illuminate your elegant style and cultivate your refined
            sensibilities. To adorn yourself with &quot;Dalice&quot; jewelry, to
            grace your home with my luminous lamps, or to let my paintings speak
            to your soul&mdash;this is to transform uncertainty into shared
            wonder, to transmute the mundane into the sublime. When art becomes
            part of your daily ritual, stress dissolves into harmony, the spirit
            finds its rhythm, and each moment blooms with quiet joy. The
            transformative power of beauty is assured&mdash;this I believe with
            unwavering conviction. What has awakened my own sense of wonder will
            surely kindle the same light within you.
          </p>
        </div>
      </div>
    </div>
  );
}
