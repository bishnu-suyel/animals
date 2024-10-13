import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import "./css/main.css"; 

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  const [imageUrl, setImageUrl] = useState(""); 

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log(`Fetching image for: ${name}`);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${name.toLowerCase()}&per_page=1&client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`
        );

        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.regular);
        } else {
          console.warn(`No images found for ${name}. Using fallback image.`);
          setImageUrl(`https://source.unsplash.com/600x600/?${name}`);
        }
      } catch (error) {
        console.error(`Error fetching image for ${name}:`, error);
      }
    };

    fetchImage();
  }, [name]);

  return (
    <div className="card-container">
      <div className="card">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={removeCard}
        ></button>
        <div className="image-container">
          <img
            src={imageUrl || `https://source.unsplash.com/600x600/?${name}`} // Fallback to placeholder if no image is fetched
            alt={name}
            className="fixed-size-image" // Apply class for fixed size
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>
          <div className="likes-container">
            <span
              className="material-symbols-outlined text-success cursor-pointer"
              onClick={addLikes}
            >
              heart_plus
            </span>
            <span className="material-symbols-outlined text-danger mx-2">
              favorite
              <span className="fs-6">{likes}</span>
            </span>
            <span
              className="material-symbols-outlined text-gray cursor-pointer"
              onClick={removeLikes}
            >
              heart_minus
            </span>
          </div>
          <Link className="btn-primary" to={name}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
