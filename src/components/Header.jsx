import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
// import './css/header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${searchQuery}`
      );
      const { extract } = response.data; // Extract the 'extract' property from the response data
      setSearchResults([extract]); // Set the 'extract' value in the state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setSearchQuery("");
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
            <form className="d-flex" role="search" onSubmit={handleSearch}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>

{/* Display the 'extract' property from the search results */}
{searchResults.length > 0 && (
  <div className="container mt-3">
    <h3>Search Results</h3>
    <h4>{searchResults.name}</h4>
    <p>{searchResults[0]}</p> {/* Display the 'extract' value */}
  </div>
  )}
  </div>
  </div>
  </nav>
  </header>
  )
}



export default Header;
