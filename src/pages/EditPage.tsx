import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect, type FormEvent, type ChangeEvent } from "react"; // "type" 키워드: 타입 전용 임포트 시 사용
import EditForm from "../components/edit/EditForm";

type Item = {
  id: string;
  title: string;
  description: string;
};

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const mode = searchParams.get("mode") || "create";
    const id = searchParams.get("id");

    setSearchParams(
      { mode, ...(id && { id }) },
      { replace: true } // 브라우저 히스토리에 기록되지 않도록 설정 (뒤로가기 한 번으로 홈페이지 이동)
    );

    // update 모드이고 id가 있으면 해당 item 데이터 로드
    if (mode === "update" && id) {
      const items = JSON.parse(localStorage.getItem("item") || "[]");
      const item = items.find((item: Item) => item.id === id);
      if (item) {
        setTitle(item.title);
        setDescription(item.description);
        setEditId(id);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const items = JSON.parse(localStorage.getItem("item") || "[]");

    // update 모드: 기존 item 업데이트
    if (editId) {
      const updatedItems = items.map((item: any) =>
        item.id === editId ? { id: editId, title, description } : item
      );
      localStorage.setItem("item", JSON.stringify(updatedItems));
      navigate("/");
    }
    // create 모드: 새 item 생성
    else {
      const newItem = {
        id: Date.now().toString(),
        title,
        description,
      };
      localStorage.setItem("item", JSON.stringify([...items, newItem]));

      setTitle("");
      setDescription("");

      const shouldContinue = window.confirm(
        "항목이 저장되었습니다. 계속 작성하시겠습니까?"
      );
      if (!shouldContinue) {
        navigate("/");
      }
    }
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
