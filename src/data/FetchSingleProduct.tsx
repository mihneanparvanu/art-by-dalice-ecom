import Supabase from "./lib/supabase";

export const fetchSingleProduct = async (id: string, locale: string) => {
  // Fetch product from Supabase
  const { data: product, error } = await Supabase.from("products")
    .select("*, images:products_images(product_id, url)")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase fetch error", error);
    return { data: null, error: error.message };
  }

  if (locale === "ro") {
    const { data: translations } = await Supabase.from("products_translation")
      .select("*")
      .eq("product_id", id);

    if (translations) {
      product.name = translations[0].name || product.name;
      product.description = translations[0].description || product.description;
      product.materials.material =
        translations[0].material || product.materials.material;
      product.album = translations[0].album || product.album;
      product.exhibition = translations[0].exhibition || product.exhibition;
    }
  }

  if (!product) {
    return null;
  }
  return product;
  console.log(product);
};
