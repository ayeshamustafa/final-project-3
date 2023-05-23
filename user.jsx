import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../utils/supabase';

const UserPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.user();
      if (error) {
        router.push('/login'); // Redirect to login page if user is not authenticated
      } else {
        setUser(data);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // Redirect to login page after logout
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;