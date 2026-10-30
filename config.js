const SUPABASE_URL = "https://gatafiojtoxuvomealjh.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhdGFmaW9qdG94dXZvbWVhbGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNTQ3NTQsImV4cCI6MjEwODkzMDc1NH0.WgReIJ7-CxXiNNzImYcgT0fJz42fT4KBWFDzYUDDOkI";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
