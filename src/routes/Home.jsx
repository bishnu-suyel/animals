import React from "react";
import { Link } from "react-router-dom";
import "../components/css/home.css";

const Home = () => {
  return (
    <div className="homePage">
      <Link to="/animals">Animal</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/insects">Insects</Link>
      <Link to="/fishes">Fishes</Link>
    </div>
  );
};

export default Home;
