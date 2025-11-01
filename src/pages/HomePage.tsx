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
      <Link to="/edit">EDIT</Link>
      <Link to="/edit?mode=create">CREATE</Link>
    </>
  );
};

export default HomePage;
