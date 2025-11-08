import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TodoList from "../components/home/TodoList";
import { useNavigate } from "react-router-dom";

type Items = {
  [id: string]: {
    title: string;
    description: string;
  };
};

const LIMIT = 10;

const HomePage = () => {
  const [items, setItems] = useState<Items>({});
  const [countItems, setCountItems] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const allItems: Items = JSON.parse(
    localStorage.getItem("item")?.trim() || "{}"
  );
  const allEntries = Object.entries(allItems);

  const navigate = useNavigate();

  const loadItems = () => {
    if (!hasMore) return;

    try {
      const newItems: Items = Object.fromEntries(
        allEntries.slice(countItems, LIMIT + countItems)
      );

      // 더 이상 로드할 데이터가 없는지 확인
      if (countItems + LIMIT >= allEntries.length) {
        setHasMore(false);
      }

      setItems((prevItems) => ({ ...prevItems, ...newItems }));
      setCountItems((prevCount) => prevCount + LIMIT);
    } catch (e) {
      // JSON 파싱 오류
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadItems();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [countItems]);

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

      {hasMore && <div ref={observerRef} />}

      <Link to="/edit?mode=create">CREATE</Link>
    </>
  );
};

export default HomePage;
