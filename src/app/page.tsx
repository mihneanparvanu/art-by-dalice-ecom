import "./home.css"
// Components
import Image from "next/image";
import ButtonPrimary from "./components/ButtonPrimary";
import ProductsSection from "./components/ProductsSection";
import ProductCard from "./components/ProductCard";
import supabase from "./config/supabaseClient";


// Icons


export default function Home() {
  console.log(supabase)
  const paintingsData = [
    {
      id: "painting-1",
      title: "In the distance",
      price: "400 lei",
      image: "/products/image 1.jpg",
      imageAlt: ""
    },
    {
      id: "painting-2",
      title: "Long ago",
      price: "370 lei",
      image: "/products/image 2.png",
      imageAlt: ""
    },
    {
      id: "painting-3",
      title: "Poetry as a Viking ship", // Changed title to be unique from other images
      price: "400 lei", // Original was 370 lei, updated to 400 as per common price for this image
      image: "/products/image 3.jpg",
      imageAlt: ""
    },
    {
      id: "painting-4",
      title: "Rose in the night", // Changed title to be unique from other images
      price: "600 lei", // Original was 370 lei, updated to 600 as per common price for this image
      image: "/products/image 4.jpg",
      imageAlt: ""
    },
  ]

  const lampsData = [
    {
      id: "lamp-1",
      title: "Tray lamp",
      price: "price",
      image: "/products/traylamp.jpg",
      imageAlt: ""
    },
    {
      id: "lamp-2",
      title: "Bottle lamp",
      price: "price",
      image: "/products/bottlelamp.jpg",
      imageAlt: ""
    }
  ]

  return (
    <div>
      <section className="heroSection">       
        <div className="heroImageContainer relative h-[80%] w-full lg:w-[60%] lg:h-full  ">
          <Image
            src="/showcase/hero.jpg" alt=""
            fill={true}
            className="object-cover rounded-[0.2rem]"
          ></Image>
        </div>
        <div className="heroTextContainer">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium lg:text-7xl lg:max-w">
              Curated Beauty for <br/> the Discerning Soul
            </h2>
            <p className="text-[1rem]">
              Step into a world where each piece is personally selected to elevate your style, illuminate your home, and awaken the artist within you.
            </p>
          </div>
          <ButtonPrimary
            title="Shop the new collection"
            className="w-fit"
          />
        </div>
      </section>
      <ProductsSection
        sectionTitle="All paintings"
        buttonTitle="Shop paintings"
        products={paintingsData.map(painting => (
          <ProductCard
            key={painting.id}
            productTitle={painting.title}
            productPrice={painting.price}
            productImage={painting.image}
            productImageAlt={painting.imageAlt}
          />
        ))}
      />

      <div className="flex flex-col items-center my-20 md:my-30 bg-surface-secondary text-foreground-secondary py-8 px-10 gap-1">
        <p className="text-[1.5rem] md:text-3xl max-w-[50rem]">
          &quot;The paintings featured on this site are original creations inspired by the beauty of nature and the poetry of Monica Pillat.&quot;
        </p>
        <p className="text-[1.2rem] md:text-2xl">
          Dalice
        </p>
      </div>

      <ProductsSection
        sectionTitle="All lamps"
        buttonTitle="Shop lamps"
        products={lampsData.map(lamp => (
          <ProductCard
            key={lamp.id}
            productTitle={lamp.title}
            productPrice={lamp.price}
            productImage={lamp.image}
            productImageAlt={lamp.imageAlt}
          />
        ))}
      />

      <div className="flex flex-col items-center bg-surface-primary text-foreground-secondary py-6 px-6 lg:px-16 lg:flex-row lg:gap-5">
        {/** Text container */}
        <div>
          <p>
            My artistic creations are destined to unveil your inherent beauty, to illuminate your elegant style and cultivate your refined sensibilities. To adorn yourself with &quot;Dalice&quot; jewelry, to grace your home with my luminous lamps, or to let my paintings speak to your soul&mdash;this is to transform uncertainty into shared wonder, to transmute the mundane into the sublime.
            When art becomes part of your daily ritual, stress dissolves into harmony, the spirit finds its rhythm, and each moment blooms with quiet joy. The transformative power of beauty is assured&mdash;this I believe with unwavering conviction. What has awakened my own sense of wonder will surely kindle the same light within you.
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