import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { animals, birds, fishes, insects } from "../animalsList";
import Card from "./Card"; // Import the Card component

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const allCreatures = [...animals, ...birds, ...fishes, ...insects];
      const filteredResults = allCreatures.filter((creature) =>
        creature.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const addLikes = (name) => {
    setSearchResults((prevResults) =>
      prevResults.map((creature) =>
        creature.name === name
          ? { ...creature, likes: creature.likes + 1 }
          : creature
      )
    );
  };

  const removeLikes = (name) => {
    setSearchResults((prevResults) =>
      prevResults.map((creature) =>
        creature.name === name && creature.likes > 0
          ? { ...creature, likes: creature.likes - 1 }
          : creature
      )
    );
  };

  const removeCard = (name) => {
    setSearchResults((prevResults) =>
      prevResults.filter((creature) => creature.name !== name)
    );
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fw-bold ms-5" to="/">
            Zoo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/animals">
                  Animals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/birds">
                  Birds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insects">
                  Insects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fishes">
                  Fishes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Display the search results */}
      {searchResults.length > 0 && (
        <div className="container mt-3">
          <h3>Search Results</h3>
          <div className="row">
            {searchResults.map((creature, index) => (
              <Card
                key={index}
                name={creature.name}
                likes={creature.likes}
                addLikes={() => addLikes(creature.name)}
                removeLikes={() => removeLikes(creature.name)}
                removeCard={() => removeCard(creature.name)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
