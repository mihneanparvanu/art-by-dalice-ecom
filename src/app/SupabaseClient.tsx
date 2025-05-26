import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://xfrcqrozwhfloizibjve.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcmNxcm96d2hmbG9pemlianZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTI1OTYsImV4cCI6MjA2MzY2ODU5Nn0.dO3GYs1yJLYnPxJY4zlrtNL04lPocM2PM_qBYf7XbNs"

const Supabase = createClient(supabaseURL, supabaseKey)

export default Supabase