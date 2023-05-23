import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../utils/supabase';

const CreateListPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleCreateList = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('lists').insert({ name }).single();
      if (error) {
        throw new Error(error.message);
      }
      router.push(`/list/${data.id}`);
    } catch (error) {
      console.error('Error creating list:', error.message);
      setError('An error occurred during list creation.');
    }
  };

  return (<div>
    <h1>Create List</h1>
    <form onSubmit={handleCreateList}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">Create</button>
      {error && <p>{error}</p>}
    </form>
  </div>
);
};

export default CreateListPage;  
