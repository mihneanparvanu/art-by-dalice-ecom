import Supabase from "./lib/supabase";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image_url?: Promise<string>;
  material: string;
  dimensions: string;
  album: string;
}

export default async function fetchProducts(
  locale: string,
  album: string,
): Promise<Product[]> {
  // Fetch products from Supabase
  const { data: products, error } = await Supabase.from("products")
    .select()
    .eq("album", album);

  if (error) {
    console.error("Supabase fetch error", error);
  }

  if (!products) {
    return [];
  }

  const fetchProductImagesFor = async (id: string): Promise<string[]> => {
    const { data: images, error } = await Supabase.from("product_images")
      .select("url")
      .eq("product_id", id);

    if (error) {
      console.error(`Supabase image fetch error for product ${id}`, error);
      return [];
    }

    // Return only the array of URL strings
    return images.map((img) => img.url);
  };

  let finalProducts = products || [];

  console.log("Fetched products", finalProducts);

  // 2. Handle Translations (Await only if locale is 'ro')
  if (locale === "ro") {
    // Fetch all translations first
    const { data: translations } = await Supabase.from(
      "products_translation",
    ).select("product_id, name, description, material, album");

    if (translations) {
      // Apply translations directly to the product data
      finalProducts = finalProducts.map((product) => {
        const translation = translations.find(
          (t) => t.product_id === product.id,
        );
        return {
          ...product, // Keep original English data as fallback
          name: translation?.name || product.name,
          description: translation?.description || product.description,
          material: translation?.material || product.material,
          album: translation?.album || product.album,
        };
      });
    }
  }

  // 3. Concurrently Fetch Product Images
  // Create an array of Promises for image fetching
  const imagePromises = finalProducts.map((product) =>
    fetchProductImagesFor(product.id),
  );

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    image_url: imagePromises[0],
    material: product.material,
    dimensions: product.dimensions,
    album: product.album,
  }));
}
