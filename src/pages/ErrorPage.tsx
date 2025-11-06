import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>알 수 없는 오류가 발생했습니다.</p>
      {/* 컴포넌트 내부에서 예외가 발생 (throw new Error("..."))
          API 요청 실패 후 예외가 던져짐
          서버에서 처리 중 에러 발생 (서버사이드 렌더링, DB 에러 등)
          React 컴포넌트 자체가 렌더링을 못할 때 (예: null 참조 등) */}
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default ErrorPage;
