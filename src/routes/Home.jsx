import React from "react";
import { Link } from "react-router-dom";
// import "../components/css/home.css";

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 d-flex justify-content p-4">
          <Link to="/animals" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/600x350/?animals"
              className="category-img img-fluid - border border-success border-2"
              alt="Animals"
            />
            <h4 className="text-center mt-2">Animals</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 d-flex justify p-4">
          <Link to="/birds" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/600x350/?birds"
              className="category-img img-fluid - border border-success border-2"
              alt="Birds"
            />
            <h4 className="text-center mt-2">Birds</h4>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 d-flex justify-content-center p-4">
          <Link to="/insects" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/600x350/?insects"
              className="category-img img-fluid - border border-success border-2"
              alt="Insects"
            />
            <h4 className="text-center mt-2">Insects</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 d-flex justify-content-center p-4">
          <Link to="/fishes" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/600x350/?fishes"
              className="category-img img-fluid - border border-success border-2"
              alt="Fishes"
            />
            <h4 className="text-center mt-2">Fishes</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
