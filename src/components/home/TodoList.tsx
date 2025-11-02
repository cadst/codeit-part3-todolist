type Item = {
  id: string;
  title: string;
  description: string;
};

type TodoListProps = {
  items: Item[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList = ({ items, onEdit, onDelete }: TodoListProps) => {
  if (items.length === 0) {
    return <p>No items</p>;
  }

  return (
    <ul>
      {items.map((el) => (
        <li key={el.id}>
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <button onClick={() => onEdit(el.id)}>Edit</button>
          <button onClick={() => onDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
