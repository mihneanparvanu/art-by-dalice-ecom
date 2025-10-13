import Supabase from "./lib/supabase";
import { DisplayProduct } from "./DisplayProduct";

export default async function fetchProducts(
  locale: string,
): Promise<DisplayProduct[] | undefined> {
  const { data, error } = await Supabase.from("products")
    .select(
      "id, price, dimensions, album, exhibition, products_images(product_id, url), products_translations(product_id, name, locale, description, materials), exhibition(id, exhibitions_translations(exhibition_id, locale, name)) ",
    )
    .eq("products_translations.locale", locale)
    .eq("exhibition.exhibitions_translations.locale", locale);

  if (error) throw error;
  if (!data) return [];

  return data.map((product) => {
    return {
      id: product.id,
      name: product.products_translations?.[0]?.name || "",
      price: product.price,
      description: product.products_translations?.[0]?.description || "",
      materials: product.products_translations?.[0]?.materials || "",
      dimensions: product.dimensions,
      exhibition: product.exhibition?.exhibitions_translations?.[0].name || "",
      images: product.products_images,
      album: product.album || "",
    };
  });
}
