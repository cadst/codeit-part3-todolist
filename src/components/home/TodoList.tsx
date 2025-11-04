type Item = {
  [id: string]: {
    title: string;
    description: string;
  };
};

type TodoListProps = {
  items: Item;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList = ({ items, onEdit, onDelete }: TodoListProps) => {
  if (Object.keys(items).length === 0) {
    return <p>No items</p>;
  }

  return (
    <ul>
      {Object.keys(items).map((id) => (
        <li key={id}>
          <h2>{items[id].title}</h2>
          <p>{items[id].description}</p>
          <button onClick={() => onEdit(id)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
