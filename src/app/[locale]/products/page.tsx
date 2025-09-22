import fetchProducts from "../../../data/FetchProducts";
import ProductCard from "../../../components/product/ProductCard";
import Link from "next/link";

import { styled } from "@linaria/react";

export default async function ProductsPage(props: {
  searchParams: Promise<{ album: string }>;
  params: Promise<{ locale: string }>;
}) {
  const album = (await props.searchParams).album;
  const params = await props.params;
  const locale = params.locale || "en";

  const products = await fetchProducts(locale, album);
  const hasProducts = Array.isArray(products) && products.length > 0;

  const NoProductsDisplay = styled.div`
    height: 80dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--content-tertiary);
  `;

  if (!hasProducts) {
    return <NoProductsDisplay>No products found</NoProductsDisplay>;
  }

  return (
    <main className="flex py-10 px-3 justify-center">
      <div className="flex flex-col justify-center">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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
