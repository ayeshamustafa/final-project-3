import supabase from './supabase';

export const loginUser = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  } catch (error) {
    throw new Error('An error occurred during login.');
  }
};