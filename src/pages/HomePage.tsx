import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoList from "../components/home/TodoList";
import { useNavigate } from "react-router-dom";

type Item = {
  [id: string]: {
    title: string;
    description: string;
  };
};

const HomePage = () => {
  const [items, setItems] = useState<Item>({});
  const navigate = useNavigate();
  const loadItems = () => {
    const storedItems: Item = JSON.parse(localStorage.getItem("item") || "{}");
    setItems(storedItems);
  };

  useEffect(() => {
    loadItems();

    window.addEventListener("focus", loadItems);

    return () => {
      window.removeEventListener("focus", loadItems);
    };
  }, []);

  const handleDelete = (id: string) => {
    const newItems = { ...items };
    delete newItems[id];
    setItems(newItems);
    localStorage.setItem("item", JSON.stringify(newItems));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit?mode=update&id=${id}`);
  };

  return (
    <>
      <h1>Home Page</h1>
      <TodoList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      <Link to="/edit?mode=create">CREATE</Link>
    </>
  );
};

export default HomePage;
