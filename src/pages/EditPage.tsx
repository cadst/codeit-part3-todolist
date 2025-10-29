import { useSearchParams } from "react-router-dom";
import { useState, useEffect, type FormEvent } from "react";
const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(searchParams.get("mode") || "edit"); // return에 searchParams.get은 string | null 반환
  // ?mode(또는 stock)=0 일때 후행으로 넘어갈 수 있다.
  // useState로 쓸 필요없이 (불필요한 자원 소모) 네비게이션으로 바꾸기!

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // 최상위 참조가 되는 데이터는 위로 올리기!

  useEffect(() => {
    setSearchParams({ mode: mode }); // 리턴값 string 유지
  }, []); // 렌더링 중 state 변경 방지 (무한 리렌더링 혹은 변경 무시)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // confirm 메소드 (이어서 작성하고 싶을 때)

    localStorage.setItem("title", title); // title과 description을 묶어서 하나의 item으로 저장 (객체 형식)
    localStorage.setItem("description", description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h1>Edit Page</h1>
      {mode === "create" ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="title"
              value={title}
              name="title"
              onChange={
                (e) => setTitle(e.target.value) // 글자수 밸리데이션(예: 글자수, 특정 글자수 예외) 처리 필요
                // handleChange(이벤트 리스너)로 따로 함수 관리하기
              }
            />
            <textarea
              placeholder="description"
              value={description}
              name="description"
              onChange={
                (e) => setDescription(e.target.value) // 글자수 밸리데이션 처리 필요
              }
            />
            <button type="submit">SUBMIT</button>
          </form>
          {/* form UI를 따로 컴포넌트로 분리하기 */}
        </>
      ) : (
        <></>
        // 수정 모드일때 따로 처리할 필요가 없다. (create 부분 재사용) - 코드 가독성, 용량 낭비 방지
      )}
    </>
  );
};

export default EditPage;
