import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import EditForm from "../components/edit/EditForm";

type Item = {
  [id: string]: {
    title: string;
    description: string;
  };
};

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let editId: string | null = null;
  useEffect(() => {
    const mode = searchParams.get("mode") || "create";
    editId = searchParams.get("id");

    setSearchParams({ mode, ...(editId && { id: editId }) }, { replace: true });

    if (mode === "update" && editId) {
      const items = JSON.parse(localStorage.getItem("item") || "{}");
      const item = items[editId];
      if (item) {
        setTitle(item.title);
        setDescription(item.description);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const items = JSON.parse(localStorage.getItem("item") || "[]");

    // update 모드
    if (editId) {
      const updatedItems = Object.keys(items).map((id) =>
        id === editId ? { title, description } : items[id]
      );
      localStorage.setItem("item", JSON.stringify(updatedItems)); // 예외 처리 try ... catch 문 사용 (JSON.stringify, JSON.parse 필수)
      navigate("/");
    }
    // create 모드
    else {
      const newItem = {
        title,
        description,
      };

      localStorage.setItem(
        "item",
        JSON.stringify({ ...items, [Date.now().toString()]: newItem })
      );

      setTitle("");
      setDescription("");

      navigate("/");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, tagName } = e.target; // tagName -> name: 여러 input을 고려했을 때 더 나은 방법
    if (value.trim().length > 30 && tagName === "INPUT") return;
    if (value.trim().length > 200 && tagName === "TEXTAREA") return;

    if (tagName === "INPUT") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

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
