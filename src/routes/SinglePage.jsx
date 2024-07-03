import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const navigate = useNavigate();

  const categoryItems = rest[params.category];
  const data = categoryItems.find((el) => el.name === params.name);
  const [wikiInfo, setWikiInfo] = useState({});

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

    fetchWikiInfo();
  }, [data.name]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mt-5 px-5">
        <h2 className="mb-4 fs-5">{wikiInfo.title}</h2>
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
    </>
  );
};

export default SinglePage;
