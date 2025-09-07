import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ cartCount, onSearch, searchQuery, setSearchQuery }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [trendingSearches, setTrendingSearches] = useState([]);

  const fetchTrending = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://scmq7n.a.searchspring.io/api/suggest/trending?siteId=scmq7n&limit=6",
      options
    )
      .then((res) => res.json())
      .then((data) => setTrendingSearches(data.trending.queries))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery); 
      setShowSuggestions(false); 
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.trim() === ""); 
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); 
    onSearch(suggestion); 
    setShowSuggestions(false); 
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1>ShopEase</h1>
      </div>
      <nav className="header__nav">
        <ul>
           <li>
            <div  className="clickable-item" onClick={()=>setSearchQuery("")}>Home</div>
          </li>
          <li>
            <div  className="clickable-item" onClick={()=>setSearchQuery("Mens")}>Mens</div>
          </li>
           <li>
            <div  className="clickable-item" onClick={()=>setSearchQuery("Womens")}>Womens</div>
          </li>
           <li>
            <div  className="clickable-item" onClick={()=>setSearchQuery("Accessories")}>Accessories</div>
          </li>
        </ul>
      </nav>

      <form className="header__search" onSubmit={handleSearch}>
        <div className="typeahead-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)} 
          />
          <button type="submit">Search</button>

          {showSuggestions && (
            <ul className="typeahead-dropdown">
              {trendingSearches?.map((suggestion, index) => (
                <li
                  key={index}
                  className="typeahead-item"
                  onClick={() => handleSuggestionClick(suggestion.searchQuery)} 
                >
                  {suggestion.searchQuery}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      <div className="header__cart">
        <FiShoppingCart className="header__cart-icon" />
        {cartCount > 0 && (
          <span className="header__cart-badge">{cartCount}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
