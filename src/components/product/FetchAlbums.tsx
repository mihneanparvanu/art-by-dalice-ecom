"use client";
import { useState, useEffect } from "react";
import Supabase from "../../data/lib/supabase";

const AlbumsDisplay = ({ className }: { className: string }) => {
  const [enumValues, setEnumValues] = useState([]);

  useEffect(() => {
    async function fetchEnumValues() {
      {
        const { data, error } = await Supabase.rpc("get_enum_values");
        if (error) throw error;
        setEnumValues(data || []);
      }
    }

    fetchEnumValues();
  });

  return (
    <div className={className}>
      {enumValues.map((value, index) => (
        <p key={index}> {value}</p>
      ))}
    </div>
  );
};

export default AlbumsDisplay;
