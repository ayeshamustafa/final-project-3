import { createClient } from '@supabase/supabase-js';
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

export const registerUser = async (email, password) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw new Error(error.message);
      }
      return true;
    } catch (error) {
      throw new Error('An error occurred during registration.');
    }
  };
  
  export const loginUser = async (email, password) => {
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) {
        throw new Error(error.message);
      }
      return true;
    } catch (error) {
      throw new Error('An error occurred during login.');
    }
  };

export default supabase;
