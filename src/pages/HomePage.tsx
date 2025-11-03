import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoList from "../components/home/TodoList";
import { useNavigate } from "react-router-dom";

type Item = {
  id: string;
  title: string;
  description: string;
};

/*
{
  "todo-id1": {
       "title": "Todo Title1",
       "description": "Todo description1",
   },

   .....
}
*/

const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();
  // 컴포넌트가 마운트될 때와 포커스를 받을 때 localStorage 새로고침
  const loadItems = () => {
    const storedItems: Item[] = JSON.parse(
      localStorage.getItem("item") || "[]"
    );
    setItems(storedItems);
  };

  useEffect(() => {
    loadItems(); // 컴포넌트 마운트 시 localStorage에서 데이터 로드

    // 윈도우 포커스 이벤트 리스너 추가 (다른 페이지에서 돌아올 때 업데이트)
    window.addEventListener("focus", loadItems);

    return () => {
      window.removeEventListener("focus", loadItems);
    };
  }, []);

  // ID로 항목 삭제 (filter 사용)
  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id); // O(n)
    // 자료구조 map을 사용하면 O(1)로 성능 향상 가능 -> 메모리 사용량 증가 트레이드오프 (성능 > 메모리)
    setItems(newItems);
    localStorage.setItem("item", JSON.stringify(newItems));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit?mode=update&id=${id}`); // id를 쿼리 파라미터로 전달(필수일까요?)
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
