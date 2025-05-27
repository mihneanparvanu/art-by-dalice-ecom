import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://uvdbywkodrepxtoironu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2ZGJ5d2tvZHJlcHh0b2lyb251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjI4NDMsImV4cCI6MjA2MzgzODg0M30.tzwUrgpJmgo9tuVrpyB5wxffoH1VG6UQSptPzQF3Gsg"

const Supabase = createClient(supabaseURL, supabaseKey)

export default Supabase