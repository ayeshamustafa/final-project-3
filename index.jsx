import React from 'react';
import Layout from '../app/layout';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();

    const goToHomePage = () => {
        router.push('/');
    };
    const handleLogin = () => {
      // Handle login logic
      router.push('/login'); // Navigate to the login page
    };
  
    const handleRegister = () => {
      // Handle register logic
      router.push('/register'); // Navigate to the register page
    };

    const handleCreateList = () => {
        // Handle login logic
        router.push('/create-list'); // Navigate to the create list page if logged in otherwise login page
      };
  
    return (
        <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to the List App!
          </h1>
          <p className="text-lg text-center">
            Explore and manage your lists.
          </p>
          <div className="button-container">
          <button className="button" onClick={goToHomePage}>Home Page</button>
          <button className="button" onClick={handleCreateList}>Create List</button>
        <button className="button" onClick={handleLogin}>Login</button>
        <button className="button" onClick={handleRegister}>Register</button>
      </div>
      </div>
      </Layout>
    );
  };
  
  export default HomePage;

