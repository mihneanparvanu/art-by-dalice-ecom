import Supabase from "../SupabaseClient"

export const fetchSingleProduct = async (id: string) => {
     // Fetch products from Supabase
 const { data, error } = await Supabase.from("products")
 .select()
 .eq("id", id)
 .single()

    if (error) {
        console.error("Supabase fetch error", error)
        return {data: null, error: error.message}
    }
    return data;
}