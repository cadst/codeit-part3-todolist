import { useSearchParams } from "react-router-dom";
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react"; // "type" 키워드: 타입 전용 임포트 시 사용
import EditForm from "../components/EditForm";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setSearchParams(
      { mode: searchParams.get("mode") || "update" },
      { replace: true } // 브라우저 히스토리에 기록되지 않도록 설정 (뒤로가기 한 번으로 홈페이지 이동)
    );
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // confirm 메소드 사용(루트 페이지 이동할지 create 계속할지 선택)
    const items = JSON.parse(localStorage.getItem("item") || "[]");
    const newItem = { title, description };
    localStorage.setItem("item", JSON.stringify([...items, newItem]));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, tagName } = e.target;
    if (value.length > 30 && tagName === "INPUT") return;
    if (value.length > 100 && tagName === "TEXTAREA") return;

    if (tagName === "INPUT") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  }; // 최적화 방법

  return (
    <>
      <h1>Edit Page</h1>
      <EditForm
        title={title}
        description={description}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditPage;
