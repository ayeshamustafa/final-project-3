const TodoItem = ({ item, onComplete, onDelete }) => {
    return (
      <div>
        <input type="checkbox" checked={item.completed} onChange={onComplete} />
        <span>{item.text}</span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;
  