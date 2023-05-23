import React, { useState } from 'react';
import Layout from '../app/layout';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/supabase';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registrationSuccessful = await registerUser(email, password);
      if (registrationSuccessful) {
        router.push('/'); // Redirect to user page after successful registration
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
