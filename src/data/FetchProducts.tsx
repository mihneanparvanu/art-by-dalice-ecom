import Supabase from "./lib/supabase";

interface Product {
  id: string
  name: string
  price: string
  description: string
  image_url?: string
  material: string
  dimensions: string
  album: string
}
export default async function fetchProducts (locale: string): Promise <Product[]> {
  // Fetch products from Supabase
  const { data: products, error } = await Supabase.from("products").select();

  if (error) {
    console.error("Supabase fetch error", error);
  }

  if (!products) {
    return [];
  }

  console.log("Fetched products", products);

  if (locale == "ro") {
    // Fetch translations for Romanian
    const { data: translations } = await Supabase.from(
      "products_translation"
    ).select("product_id, name, description, material, album");

    // Search for the translations of the products
    products.forEach((product) => {
      const translation = translations?.find((t) => t.product_id == product.id);
      if (translation) {
        product.name = translation.name || product.name;
        product.description = translation.description || product.description;
        product.material = translation.material || product.material;
        product.album = translation.album || product.album;
      }
    });
  }

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    image_url: product.image_url,
    material: product.material,
    dimensions: product.dimensions,
    album: product.album,
  }));
}
