
import "./home.css"
// Components
import Image from "next/image";
import FeaturesBox from "./components/featuresBox";
import FeatureItem from "./components/featureItem";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import ProductsSection from "./components/ProductsSection";
import ProductCard from "./components/ProductCard";

// Icons 
import PaintPalette from "./icons/PaintPalette";



export default function Home() {
  const paintingsCards = [
    <ProductCard
      productTitle="In the distance"
      productPrice="400 lei"
      productImage="/products/image 1.jpg"
      productImageAlt=""
    />,
    <ProductCard
      productTitle="Long ago"
      productPrice="370 lei"
      productImage="/products/image 2.png"
      productImageAlt=""
    />,
    <ProductCard
      productTitle="Poetry as a Viking ship"
      productPrice="400 lei"
      productImage="/products/image 3.jpg"
      productImageAlt=""
    />,
    <ProductCard
      productTitle="Rose in the night"
      productPrice="600 lei"
      productImage="/products/image 4.jpg"
      productImageAlt=""
    />
  ]

  const lampsCard = [
    <ProductCard
      productTitle="Tray lamp"
      productPrice="price"
      productImage="/products/traylamp.jpg"
      productImageAlt=""
    />,

    <ProductCard
      productTitle="Bottle lamp"
      productPrice="price"
      productImage="/products/bottlelamp.jpg"
      productImageAlt=""
    />
  ]


  return (
    <div>
      <section className="heroSection">
        <div className="heroImageContainer relative h-[80%] w-full lg:w-[60%] lg:h-full  ">
          <Image
            src="/showcase/hero.jpg" alt=""
            fill={true}
            className="object-cover"
          ></Image>
        </div>
        <div className="heroTextContainer">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium lg:text-6xl">
              Curated Beauty for the Discerning Soul
            </h2>
            <p className="text-[1rem]">
Step into a world where each piece is personally selected to elevate your style, illuminate your home, and awaken the artist within you.            </p>
          </div>
          <ButtonPrimary
            title="Shop Paintings"
            className="w-fit"
          />
        </div>

      </section>
      <ProductsSection
        sectionTitle="All paintings"
        buttonTitle="Shop paintings"
        products={paintingsCards}
      />
      <div className="flex flex-col items-center my-20 md:my-30 bg-surface-secondary text-foreground-secondary py-8 px-10 gap-1">
        <p className="text-[1.5rem] md:text-3xl max-w-[50rem]">
          "The paintings featured on this site are original creations inspired by the beauty of nature and the poetry of Monica Pillat."
        </p>
        <p className="text-[1.2rem] md:text-2xl">
          Dalice
        </p>
      </div>
      <ProductsSection
        sectionTitle="All lamps"
        buttonTitle="Shop lamps"
        products={lampsCard}
      />

      <div className="flex flex-col items-center bg-surface-primary text-foreground-secondary py-6 px-6 lg:px-16 lg:flex-row lg:gap-5">
      {/** Text container */}
      <div>
        <p>
          My artistic creations are destined to unveil your inherent beauty, to illuminate your elegant style and cultivate your refined sensibilities. To adorn yourself with "Dalice" jewelry, to grace your home with my luminous lamps, or to let my paintings speak to your soul—this is to transform uncertainty into shared wonder, to transmute the mundane into the sublime.
          When art becomes part of your daily ritual, stress dissolves into harmony, the spirit finds its rhythm, and each moment blooms with quiet joy. The transformative power of beauty is assured—this I believe with unwavering conviction. What has awakened my own sense of wonder will surely kindle the same light within you.
        </p>
      </div>
      {/**Images container */}
      <div className="lg:w-[60%]">
        <Image
          src=""
          alt=""
          width={500}
          height={500}
        ></Image>
      </div>
       </div>
    </div>
  );
}
