import Supabase from "./lib/supabase";

export default async function fetchAlbums(locale: string): Promise<string[]> {
  const { data, error } = await Supabase.from("albums")
    .select("*, albums_translations(album_id, locale, name)")
    .eq("albums_translations.locale", locale);
  if (error) {
    throw error;
  }
  if (!data) {
    return [];
  }

  return data.map((album) => album.albums_translations[0].name || "");
}
