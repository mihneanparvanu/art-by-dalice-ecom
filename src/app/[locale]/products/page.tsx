import fetchProducts from "../../../data/FetchProducts";
import ProductCard from "../../../components/product/ProductCard";
import Link from "next/link";
export default async function ProductsPage(props: {
  searchParams: Promise<{ album: string }>;
  params: Promise<{ locale: string }>;
}) {
  const album = (await props.searchParams).album;
  const params = await props.params;
  const locale = params.locale || "en";
  const products = await fetchProducts(locale, album);
  return (
    <main className="flex py-10 px-3">
      <div className="flex flex-col items-center w-full">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">
          {products &&
            products.map((product) => (
              <Link
                href={{ pathname: "/product", query: { id: product.id } }}
                key={product.id}
              >
                <ProductCard
                  productTitle={product.name}
                  productPrice={product.price}
                  productImageURL={product.image_url}
                />
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}


