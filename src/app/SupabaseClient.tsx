import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://jqdglmngkfmgwvpikwre.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZGdsbW5na2ZtZ3d2cGlrd3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NTY3OTcsImV4cCI6MjA2NDAzMjc5N30.sR37PI8LIUusWPB0gMHjLNW35btJdJ2yHEapTZ5xAcg"

const Supabase = createClient(supabaseURL, supabaseKey)

export default Supabase