import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fzkervlwmorrjvhdqzrv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6a2Vydmx3bW9ycmp2aGRxenJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1Mzc3NjAsImV4cCI6MjAyOTExMzc2MH0.HlMYkXk7_zUZOJTw1akjTAga07DUQb5nuZYqQXgJP68";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
