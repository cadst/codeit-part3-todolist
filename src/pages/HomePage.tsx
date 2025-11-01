import { Link } from "react-router-dom";
import { useEffect } from "react";

type Item = {
  title: string;
  description: string;
};

let items: Item[];

const HomePage = () => {
  useEffect(() => {
    items = JSON.parse(localStorage.getItem("item") || "[]");
  }, [items]);

  return (
    <>
      <h1>Home Page</h1>
      {/* <h2>{title}</h2>
      <p>{description}</p> */}
      <Link to="/edit">EDIT</Link>
      <Link to="/edit?mode=create">CREATE</Link>
    </>
  );
};

export default HomePage;
