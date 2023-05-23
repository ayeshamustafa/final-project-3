import TodoItem from './TodoItem';

const TodoList = ({ items, onItemComplete, onItemDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={() => onItemComplete(item.id)}
          onDelete={() => onItemDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
