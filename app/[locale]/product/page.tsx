//Utilities
import { fetchSingleProduct } from "../../../data/FetchSingleProduct";

//Components
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";


export default async function ProductDetails({ searchParams, params}: {
  searchParams: { id: string}, params: {locale: string}})
  {
  const locale = params.locale || "en"
  const id = searchParams.id
  const product = await fetchSingleProduct(id, locale);
  return (
    <main className="flex flex-col md:flex-row">
      <ProductDisplay img_URL={product.image_url} />
      <ProductInfo
      product = {{
        name: product.name,
        description: product.description,
        price: product.price,
        material: product.material,
        dimensions: product.dimensions,
      }}
      />
    </main>
  );
}
