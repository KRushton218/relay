// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://your-project.supabase.co"; // use your actual URL
const supabaseAnonKey = "your-anon-key"; // found in your Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseAnonKey);