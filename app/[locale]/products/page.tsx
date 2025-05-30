import fetchProducts from "../../../data/FetchProducts";
import ProductCard from "../../../components/product/ProductCard"
import Link from "next/link";
export default async function ProductsPage({params}: {params: {locale: string}}) {
  const locale = params.locale || "en"
  const products = await fetchProducts(locale);
  return (
    <main className="flex pt-10">
      <div className="flex flex-col items-center w-full">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">
          {products &&
            products.map((product) => (
              <Link href={{ pathname: "/product", query: { id: product.id } }}>
                <ProductCard
                  key={product.id}
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
