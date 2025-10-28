import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/edit">Edit</Link>
      <Outlet />
    </>
  );
};

export default Layout;
