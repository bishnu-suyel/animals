import React from "react";
// import './css/card.css';
import { Link } from "react-router-dom";
import "./css/main.css";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <>
      <div className="card col-3">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={removeCard}
        ></button>

        <img
          src={`https://source.unsplash.com/400x400/?${name}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>
          <div className="card-text">
            <div className=" row">
              <span
                className="material-symbols-outlined heart-btn col"
                onClick={addLikes}
              >
                heart_plus
              </span>
              <div className="col">
                <span className="material-symbols-outlined">
                  favorite
                  <span className="fs-6">{likes}</span>
                </span>
              </div>

              <span
                className="heart-btn material-symbols-outlined col"
                onClick={removeLikes}
              >
                heart_minus
              </span>
            </div>
          </div>
          <Link
            className="btn btn-prima
        ery"
            to={name}
          >
            See more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
