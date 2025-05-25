import CategoryHolder from "../components/products/CategoryHolder";

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
              title="Photography"
              imageURL="/products/image 4.jpg"
            />
            <CategoryHolder
              title="Portraits"
              imageURL="/products/image 5.jpg"
            />
          </div>
        </div>

        <div className="w-full contour">
          <div className="grid grid-rows-3 grid-cols-3 w-full h-full gap-4">
          
          
          
          
          
          
          
          
          
          </div>
        </div>
      </section>
    </div>
  );
}
