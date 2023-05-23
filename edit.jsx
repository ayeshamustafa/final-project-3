import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../../utils/supabase';

const EditListPage = () => {
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

  const handleAddItem = async () => {
    // Implement your logic to add an item to the list
  };

  const handleRemoveItem = async (itemId) => {
    // Implement your logic to remove an item from the list
  };

  const handleReorderItems = async () => {
    // Implement your logic to reorder the items in the list
  };

  const handleMarkItemDone = async (itemId) => {
    // Implement your logic to mark an item as done in the list
  };

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit List: {list.name}</h1>
      <ul>
        {list.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleMarkItemDone(item.id)}>Mark Done</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleReorderItems}>Reorder Items</button>
    </div>
  );
};

export default EditListPage;
