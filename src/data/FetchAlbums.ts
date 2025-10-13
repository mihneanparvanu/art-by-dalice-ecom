import Supabase from "./lib/supabase";

export default async function fetchAlbums(): Promise<string[]> {
  const { data, error } = await Supabase.from("albums_translation").select();
  if (error) {
    throw error;
  }
  return data ?? ([] as string[]);
}
