import CategoryHolder from "../components/products/CategoryHolder";
import ProductGridItem from "../components/products/ProductGridItem";
import { PaintingsData } from "../data/PaintingsData";

export default function Products() {
  return (
    <div className="">
      <section className="container flex flex-col items-center py-8 w-full gap-10">
        <div className="flex flex-col gap-8 contour w-full">
          <div className="containerTitle flex flex-col items-center gap-2">
            <h1 className="text-5xl text-center">All products</h1>
            <p className="">
              Fill your space with work that inspires, entertains and resonates
              with you
            </p>
          </div>
          <div className="categroies flex justify-start gap-8">
            <CategoryHolder title="All" imageURL="/products/image 1.jpg" />
            <CategoryHolder title="Trending" imageURL="/products/image 2.png" />
            <CategoryHolder
              title="Paintings"
              imageURL="/products/image 3.jpg"
            />
            <CategoryHolder
              title="Lamps"
              imageURL="/products/image 4.jpg"
            />
            <CategoryHolder
              title="Portraits"
              imageURL="/products/image 5.jpg"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-full grid grid-cols-4 gap-5">
            {PaintingsData.map(painting => (
              <ProductGridItem
              key={painting.id}
              title={painting.title}
              price={painting.price}
              imageURL={painting.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
