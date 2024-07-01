import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({
  animals,
  birds,
  fishes,
  insects,
  removeCard,
  removeLikes,
  addLikes,
}) => {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const categoryItems = getCategoryItems(
    category,
    animals,
    birds,
    fishes,
    insects
  );

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-4">
        <div className="input-group" style={{ width: "200px" }}>
          <input
            id="searchbar"
            type="text"
            className="form-control form-control-sm"
            placeholder="Search..."
            onChange={searchHandler}
            value={search}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setSearch("")}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="row">
        {categoryItems
          .filter((el) =>
            el.name.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((item) => (
            <div key={item.name} className="col-md-4 mb-4">
              <Card
                name={item.name}
                likes={item.likes}
                removeCard={() => removeCard(item.name, category)}
                removeLikes={() => removeLikes(item.name, category, "remove")}
                addLikes={() => addLikes(item.name, category, "add")}
                className="card cursor-pointer"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const getCategoryItems = (category, animals, birds, fishes, insects) => {
  switch (category) {
    case "animals":
      return animals || [];
    case "birds":
      return birds || [];
    case "fishes":
      return fishes || [];
    case "insects":
      return insects || [];
    default:
      return [];
  }
};

export default CategoryPage;
