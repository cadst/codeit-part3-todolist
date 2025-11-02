import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      {/* 시맨틱 태그 */}
      <Link to="/">Home</Link>
      <Link to="/edit">Edit</Link>
    </nav>
  );
};

export default Header;
