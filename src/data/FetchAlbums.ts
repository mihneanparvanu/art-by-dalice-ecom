import Supabase from "./lib/supabase";

export default async function fetchAlbums(): Promise<string[]> {
  const { data, error } = await Supabase.rpc("get_enum_values");
  if (error) {
    throw error;
  }
  return data ?? ([] as string[]);
}
