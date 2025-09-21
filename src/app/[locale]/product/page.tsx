//Utilities
import { fetchSingleProduct } from "../../../data/FetchSingleProduct";

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
    <main className="flex flex-col gap-1.5 md:flex-row">
      <ProductDisplay imgURL={product.image_url} />
      <ProductInfo
        locale={locale}
        product={{
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          material: product.material,
          dimensions: product.dimensions,
          album: product.album,
        }}
      />
    </main>
  );
}
