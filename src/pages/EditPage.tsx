import { useSearchParams } from "react-router-dom";
import { useState, useEffect, type FormEvent } from "react";
const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(searchParams.get("mode") || "edit"); // return에 searchParams.get은 string | null 반환
  useEffect(() => {
    setSearchParams({ mode: mode }); // 리턴값 string 유지
  }, []); // 렌더링 중 state 변경 방지 (무한 리렌더링 혹은 변경 무시)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    setTitle("");
    setDescription("");
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <h1>Edit Page</h1>
      {searchParams.get("mode") === "create" ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="title"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="description"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditPage;
