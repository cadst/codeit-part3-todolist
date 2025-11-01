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
      {/* useNavigate: 동적 처리 (예: 특정 조건에서 이동) 할 때 사용
        Link: 정적 처리 (예: 버튼, 링크 클릭 시 이동) 할 때 사용  
        둘 다 내부적으로 CSR 방식으로 작동 (배포 시 설정 추가 하지 않으면 오류 발생)
        */}
      <h1>Home Page</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/edit">EDIT</Link>
      <Link to="/edit?mode=create">CREATE</Link>
    </>
  );
};

export default HomePage;
