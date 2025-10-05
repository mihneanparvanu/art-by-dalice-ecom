// Utilities
import { fetchSingleProduct } from "../../../data/FetchSingleProduct";
 
// Components
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
    <main>
      <ProductDisplay imgURL={product.images[0].url}></ProductDisplay>
      <ProductInfo product={product} locale={locale} className=""></ProductInfo>
    </main>
  );
}
