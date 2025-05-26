import { useState } from "react";
import supabase from "./config/supabaseClient";

export default async function FetchProducts () {
  const [fetchError, setError] = useState(null);
  const [paintings, setProducts] = useState(null);

  const { data, error } = await supabase.from("Products").select();

  if (error) {
    setError(error);
    setProducts(null);
  }
  if (data) {
    setProducts(data);
    setError(null);
  }
};
