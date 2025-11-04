import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoList from "../components/home/TodoList";
import { useNavigate } from "react-router-dom";

type Items = {
  [id: string]: {
    title: string;
    description: string;
  };
};

const HomePage = () => {
  const [items, setItems] = useState<Items>({});
  const navigate = useNavigate();
  const loadItems = () => {
    let storedItems: Items = {};
    try {
      storedItems = JSON.parse(localStorage.getItem("item") || "{}");
    } catch (e) {
      // JSON 파싱 오류
      return;
    }
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
    try {
      localStorage.setItem("item", JSON.stringify(newItems));
    } catch (e) {
      // 순환 참조가 있는 객체
      return;
    }
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
