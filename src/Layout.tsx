import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/edit">Edit</Link>
      {/*  component nav.ts로 따로 만들기 (header) */}
      <Outlet />
    </>
  );
};

export default Layout;
