import Supabase from "./lib/supabase";

import { DisplayProduct } from "./DisplayProduct";

export default async function fetchProduct(
  id: string,
  locale: string,
): Promise<DisplayProduct | undefined> {
  const { data, error } = await Supabase.from("products")
    .select(
      "*, products_translations(*), products_images(*), albums(*, albums_translations(album_id, locale, name)), exhibitions(id, exhibitions_translations(*))",
    )
    .eq("id", id)
    .eq("products_translations.locale", locale)
    .eq("albums.albums_translations.locale", locale)
    .eq("exhibitions.exhibitions_translations.locale", locale);

  if (error) throw error;
  if (!data) return undefined;

  const product = data[0];
  const pTranslations = product.products_translations[0];
  const pImages = product.products_images;
  const albumName = product.album.albums_translations;
  const exhibitionName = product.exhibitions.exhibitions_translations.name;

  return {
    id: product.id,
    name: pTranslations.name,
    price: product.price,
    dimensions: product.dimensions,
    description: pTranslations.description,
    materials: pTranslations.materials,
    images: pImages,
    album: albumName,
    exhibition: exhibitionName,
  };
}
