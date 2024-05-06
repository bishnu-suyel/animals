import React from 'react';
import './css/card.css';
import { Link } from 'react-router-dom';

const Card = ({name,likes, addLikes, removeCard, removeLikes}) => {
  return (
    <div className='card'>
        <h2>{name}</h2>
        <img src={`https://source.unsplash.com/400x400/?${name}`} />
        <button className='close btn' onClick={removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <p>{likes}</p>
        <button className='btn' onClick={removeCard}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
        <button  className='likes' onClick={addLikes}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
       <Link to={name}>See more</Link>
        </div>
  );
};

export default Card;