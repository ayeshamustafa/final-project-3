import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../utils/supabase';

const ListPage = () => {
  const router = useRouter();
  const { listId } = router.query;
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data, error } = await supabase.from('lists').select('*').eq('id', listId).single();
        if (error) {
            throw new Error(error.message);
          }
          setList(data);
        } catch (error) {
          console.error('Error fetching list:', error.message);
        }
      };
      
      if (listId) {
        fetchList();
      }
    }, [listId]);

    if (!list) {
    return <div>Loading...</div>;
    }
    
    return (
    <div>
    <h1>List: {list.name}</h1>
    <h2>
    {list.items.map((item) => (
    <p key={item.id}>{item.text}</p>
    ))}
    </h2>
    </div>
    );
    };
    
    export default ListPage;