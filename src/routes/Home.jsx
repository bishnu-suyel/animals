import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { animals, birds, fishes, insects } from "../animalsList";
import "../components/css/home.css";

const Home = () => {
  const [categoryImages, setCategoryImages] = useState({
    animals: "",
    birds: "",
    insects: "",
    fishes: "",
  });

  useEffect(() => {
    const fetchCategoryImages = async () => {
      const newCategoryImages = {};
      const categories = { animals, birds, insects, fishes };

      for (const [key] of Object.entries(categories)) {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${key}&per_page=1&client_id=${
              import.meta.env.VITE_UNSPLASH_ACCESS_KEY
            }`
          );
          if (response.data.results.length > 0) {
            newCategoryImages[key] = response.data.results[0].urls.regular;
          }
        } catch (error) {
          console.error(`Error fetching image for ${key}:`, error);
          newCategoryImages[key] = ""; // Fallback in case of an error
        }
      }

      setCategoryImages(newCategoryImages);
    };

    fetchCategoryImages();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 category-container">
          <Link to="/animals" className="text-decoration-none">
            <img
              src={
                categoryImages.animals ||
                "https://source.unsplash.com/600x350/?animals"
              }
              className="category-img img-fluid border border-success border-2"
              alt="Animals"
            />
            <h4 className="text-center mt-2">Animals</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 category-container">
          <Link to="/birds" className="text-decoration-none">
            <img
              src={
                categoryImages.birds ||
                "https://source.unsplash.com/600x350/?birds"
              }
              className="category-img img-fluid border border-success border-2"
              alt="Birds"
            />
            <h4 className="text-center mt-2">Birds</h4>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 category-container">
          <Link to="/insects" className="text-decoration-none">
            <img
              src={
                categoryImages.insects ||
                "https://source.unsplash.com/600x350/?insects"
              }
              className="category-img img-fluid border border-success border-2"
              alt="Insects"
            />
            <h4 className="text-center mt-2">Insects</h4>
          </Link>
        </div>
        <div className="col-md-6 mb-4 category-container">
          <Link to="/fishes" className="text-decoration-none">
            <img
              src={
                categoryImages.fishes ||
                "https://source.unsplash.com/600x350/?fishes"
              }
              className="category-img img-fluid border border-success border-2"
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
