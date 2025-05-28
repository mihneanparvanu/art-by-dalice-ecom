import Supabase from "../SupabaseClient";

interface Product {
  id: string
  name: string
  price: string
  image_url?: string
}
export default async function fetchProducts () {
 
 console.log(Supabase.getChannels)

  const { data, error } = await Supabase.from("products").select();

  if (error) {
    console.error("Supabase fetch error", error)
    return {data: null, error: error.message}
  }


  return {data: data as Product[], error: null}
};
