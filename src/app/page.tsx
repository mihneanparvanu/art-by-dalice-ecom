"use client";
import "./home.css";
import { useEffect, useState } from "react";
// Components
import Image from "next/image";
import ButtonPrimary from "./components/ButtonPrimary";
import ProductsSection from "./components/ProductsSection";
import ProductCard from "./components/ProductCard";
import FetchProducts from "./data/FetchProducts";
import Link from "next/link";

// Icons

interface Painting {
  id: string;
  name: string;
  image_url?: string;
  imageAlt?: string;
  price: string;
}

export default function Home() {
  const [paintings, setPaintings] = useState<Painting[] | null>(null);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const getPaintings = async () => {
       console.log("Fetching");
      setFetchError(null);
      const { data, error } = await FetchProducts();
     console.log("Supabase raw data:", data)
     console.log("Supabase raw error:", error)

      if (error) {
        console.log(error);
        setPaintings(null);
      }

      if (data) {
        setPaintings(data);
        setFetchError(null);
      }
    };
    getPaintings()
  }, []);

  return (
    <div>
      <section className="heroSection">
        <div className="heroImageContainer relative h-[80%] w-full lg:w-[60%] lg:h-full  ">
          <img
            src="/showcase/hero.jpg"
            alt=""
            className="object-cover rounded-[0.2rem]"
          ></img>
        </div>
        <div className="heroTextContainer">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium lg:text-7xl lg:max-w">
              Curated Beauty for <br /> the Discerning Soul
            </h2>
            <p className="text-[1rem]">
              Step into a world where each piece is personally selected to
              elevate your style, illuminate your home, and awaken the artist
              within you.
            </p>
          </div>
          <ButtonPrimary title="Shop the new collection" className="w-fit" />
        </div>
      </section>
      {paintings && (
        <ProductsSection
          sectionTitle="All paintings"
          buttonTitle="Shop paintings"
          products={paintings.slice(0,4).map((painting) => (
            <Link href={{pathname:"/product", query: {id:painting.id}}} 
            key={painting.id}>
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

      <div className="flex flex-col items-center my-20 md:my-30 bg-surface-secondary text-foreground-secondary py-8 px-10 gap-1">
        <p className="text-[1.5rem] md:text-3xl max-w-[50rem]">
          &quot;The paintings featured on this site are original creations
          inspired by the beauty of nature and the poetry of Monica
          Pillat.&quot;
        </p>
        <p className="text-[1.2rem] md:text-2xl">Dalice</p>
      </div>

      <div className="flex flex-col items-center bg-surface-primary text-foreground-secondary py-6 px-6 lg:px-16 lg:flex-row lg:gap-5">
        {/** Text container */}
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
        {/**Images container */}
        <div className="lg:w-[60%]">
          <Image src="" alt="" width={500} height={500}></Image>
        </div>
      </div>
    </div>
  );
}
