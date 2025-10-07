import Supabase from "./lib/supabase";

import { Product } from "./Product";

export const fetchSingleProduct = async (
  id: string,
  locale: string,
): Promise<Product> => {
  // Fetch product from Supabase
  const { data: product, error } = await Supabase.from("products")
    .select(
      "*, images:products_images(product_id, url), exhibitions:exhibitions!inner(name, name_ro)",
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase fetch error", error);
  }

  product.exhibitionName = product.exhibitions.name;

  if (locale === "ro") {
    const { data: translations } = await Supabase.from("products_translation")
      .select("*")
      .eq("product_id", id);

    if (translations) {
      product.name = translations[0].name || product.name;
      product.description = translations[0].description || product.description;
      product.materials.material =
        translations[0].materials.material || product.materials.material;
      product.album = translations[0].album || product.album;
      product.exhibitionName = product.exhibitions.name_ro;
    }
  }

  return product;
};
