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
  const [editId, setEditId] = useState<string | null>(null); // 상태로 관리해 submit 시에도 유지

  useEffect(() => {
    const mode = searchParams.get("mode") || "create";
    const id = searchParams.get("id");
    setEditId(id);

    setSearchParams({ mode, ...(id && { id }) }, { replace: true });

    if (mode === "update" && id) {
      let items: Item = {};
      try {
        items = JSON.parse(localStorage.getItem("item") || "{}");
      } catch (e) {
        return;
      }
      const item = items[id];
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

    let items: Item = {};
    try {
      items = JSON.parse(localStorage.getItem("item") || "{}");
    } catch (e) {
      items = {};
    }

    if (editId) {
      const updatedItems: Item = { ...items, [editId]: { title, description } };
      try {
        localStorage.setItem("item", JSON.stringify(updatedItems));
      } catch (e) {
        return;
      }
      navigate("/");
    } else {
      const newItem = { title, description };
      try {
        const newId = Date.now().toString();
        localStorage.setItem(
          "item",
          JSON.stringify({ ...items, [newId]: newItem })
        );
      } catch (e) {
        return;
      }
      setTitle("");
      setDescription("");
      navigate("/");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    if (value.trim().length > 30 && name === "title") return;
    if (value.trim().length > 200 && name === "description") return;

    if (name === "title") {
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
