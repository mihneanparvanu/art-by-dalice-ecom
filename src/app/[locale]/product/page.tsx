//Utilities
import { fetchSingleProduct } from "../../../data/FetchSingleProduct";
import { css } from "@linaria/core";

//Components
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";

import { Product } from "@/data/Product";

export default async function ProductDetails(props: {
  searchParams: Promise<{ id: string }>;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const locale = params.locale || "en";
  const id = searchParams.id;
  const product: Product = await fetchSingleProduct(id, locale);
  return (
    <main className="flex w-full flex-col md:flex-row h-[90svh]">
      <ProductDisplay className={sideBySide} imgURL={product.image_url} />
      <ProductInfo
        className={sideBySide}
        locale={locale}
        product={{
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          materials: product.materials,
          dimensions: product.dimensions,
          album: product.album,
          exhibition: product.exhibition,
        }}
      />
    </main>
  );
}

const sideBySide = css`
  width: 50%;
`;
