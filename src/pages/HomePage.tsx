import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(localStorage.getItem("title") || "");
    setDescription(localStorage.getItem("description") || "");
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/edit">
        <button>EDIT</button>
      </Link>
      <Link to="/edit?mode=create">
        <button>CREATE</button>
      </Link>
      {/* useNaviate: 동적 처리 (예: 특정 조건에서 이동) 할 때 사용
        Link: 정적 처리 (예: 버튼, 링크 클릭 시 이동) 할 때 사용  */}
    </>
  );
};

export default HomePage;
