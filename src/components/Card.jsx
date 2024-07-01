import React from "react";
import { Link } from "react-router-dom";
import "./css/main.css";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <div className="col-3 d-flex justify-content-center mb-4 mx-md-4">
      <div className="card border border-success border-2">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={removeCard}
        ></button>
        <div className="d-flex justify-content-center">
          <img
            src={`https://source.unsplash.com/600x600/?${name}`}
            className="card-img-top"
            alt={name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-capitalize text-center">{name}</h5>
          <div className="card-text">
            <div className="row">
              <span
                className="material-symbols-outlined col text-success cursor-pointer"
                onClick={addLikes}
              >
                heart_plus
              </span>
              <div className="col text-center">
                <span className="material-symbols-outlined text-danger">
                  favorite
                  <span className="fs-6">{likes}</span>
                </span>
              </div>

              <span
                className="material-symbols-outlined col text-gray cursor-pointer"
                onClick={removeLikes}
              >
                heart_minus
              </span>
            </div>
          </div>
          <Link className="btn btn-primary w-100 cursor-pointer" to={name}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
