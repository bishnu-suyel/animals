import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const navigate = useNavigate();

  const categoryItems = rest[params.category];
  const data = categoryItems.find((el) => el.name === params.name);
  const [wikiInfo, setWikiInfo] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchWikiInfo = async () => {
      try {
        const response = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${data.name}`
        );
        setWikiInfo(response.data);
      } catch (error) {
        setWikiInfo({ extract: "Information not available." });
      }
    };

    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${
            data.name
          }&per_page=1&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
        );

        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.regular);
        } else {
          console.warn(
            `No images found for ${data.name}. Using fallback image.`
          );
          setImageUrl(`https://source.unsplash.com/600x600/?${data.name}`);
        }
      } catch (error) {
        console.error(`Error fetching image for ${data.name}:`, error);
      }
    };

    fetchWikiInfo();
    fetchImage(); // Fetch the image based on the name
  }, [data.name]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5 px-5">
      <h2 className="mb-4 fs-5">{wikiInfo.title}</h2>
      <div className="text-center">
        <img
          src={imageUrl || `https://source.unsplash.com/600x600/?${data.name}`}
          alt={data.name}
          className="img-fluid mb-4" 
          style={{ width: "400px", height: "300px", objectFit: "cover" }} 
        />
      </div>
      <div>
        <p className="fs-6">{wikiInfo.extract}</p>
        <a
          href={wikiInfo.content_urls?.desktop?.page || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-6"
        >
          Read more on Wikipedia
        </a>
      </div>
      <button onClick={handleBackClick} className="btn btn-primary mt-4">
        Back to Previous Page
      </button>
    </div>
  );
};

export default SinglePage;
