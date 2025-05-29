//Utilities
import { fetchSingleProduct } from "./../data/FetchSingleProduct";

//Components
import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_URL?: string;
}

export default async function ProductDetails({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams.id;
  const product = await fetchSingleProduct(id);
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
