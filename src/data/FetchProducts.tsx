import Supabase from "./lib/supabase";

interface ProductImage {
  url: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  images: ProductImage[];
  material: string;
  dimensions: string;
  album: string;
}

export default async function fetchProducts(
  locale: string,
  album: string,
): Promise<Product[]> {
  // 1. Fetch products from database
  const { data: products, error } = await Supabase.from("products")
    .select("*, products_images(product_id, url, order)")
    .eq("album", album);

  if (error || !products) return [];

  console.log(products[2]);

  let translatedProducts = products;

  if (locale === "ro") {
    // Fetch all translations first
    const { data: translations } = await Supabase.from(
      "products_translation",
    ).select("product_id, name, description, material, album");

    if (translations) {
      const translationMap = new Map(
        translations?.map((t) => [t.product_id, t]) || [],
      );

      translatedProducts = products.map((product) => {
        const translation = translationMap.get(product.id);
        return {
          ...product,
          name: translation?.name || product.name,
          description: translation?.description || product.description,
          material: translation?.material || product.material,
          album: translation?.album || product.album,
        };
      });
    }
  }
  return translatedProducts.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    images: product.products_images || [],
    material: product.material,
    dimensions: product.dimensions,
    album: product.album,
  }));
}
