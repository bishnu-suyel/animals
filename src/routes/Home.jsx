import React from "react";
import { Link } from "react-router-dom";
import "../components/css/home.css";

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <Link to="/animals" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/300x300/?animals"
              className="category-img img-fluid"
              alt="Animals"
            />
            <h4 className="text-center mt-2">Animals</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <Link to="/birds" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/300x300/?birds"
              className="category-img img-fluid"
              alt="Birds"
            />
            <h4 className="text-center mt-2">Birds</h4>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <Link to="/insects" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/300x300/?insects"
              className="category-img img-fluid"
              alt="Insects"
            />
            <h4 className="text-center mt-2">Insects</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <Link to="/fishes" className="text-decoration-none">
            <img
              src="https://source.unsplash.com/300x300/?fishes"
              className="category-img img-fluid"
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
