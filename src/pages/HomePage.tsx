import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(localStorage.getItem("title") || "");
    setDescription(localStorage.getItem("description") || "");
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/edit">
        <button>EDIT</button>
      </Link>
      <Link to="/edit?mode=create">
        <button>CREATE</button>
      </Link>
    </>
  );
};

export default HomePage;
