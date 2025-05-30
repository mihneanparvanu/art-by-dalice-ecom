import Supabase from "../lib/supabase"

export const fetchSingleProduct = async (id: string, locale: string) => {
     // Fetch products from Supabase
 const { data: product, error } = await Supabase.from("products")
 .select()
 .eq("id", id)
 .single()

    if (error) {
        console.error("Supabase fetch error", error)
        return {data: null, error: error.message}
    }

    if (locale == "ro"){
        const {data: translations, error} = await Supabase.from("products_translation")
        .select (`product_id, name, description, material, album`)
        .eq("product_id", id)

        if (translations) {
            product.name = translations[0].name || product.name;
            product.description = translations[0].description || product.description; 
            product.material = translations[0].material || product.material;
            product.album = translations[0].album || product.album;
        }
}

    if (!product) {
        return null;
    }
    return product;
}