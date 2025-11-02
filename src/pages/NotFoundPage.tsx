import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>존재하지 않는 페이지입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFoundPage;
