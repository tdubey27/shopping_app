import React, { useState } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Recommended from "./Recommended";
import Home from "./Home";
import FilterComponent from "./SearchFilter";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState(null)

  const handleSearch = (query) => {
    console.log("Searching for:", query, searchQuery);
    setSearchQuery(query);
  };

  return (
    <div>
      <Header
        cartCount={cartCount}
        onSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {(searchQuery === "") ? (
        <>
          <Carousel />
          <Recommended />
          <Home searchQuery={searchQuery} setCartCount={setCartCount}/>
        </>
      )
      : (
        <div style={{ display: "flex" }}>
          <div style={{ width: "35%" }}>
            <FilterComponent setAppliedFilters={setAppliedFilters}/>
          </div>
          <div style={{ width: "100%" }}>
            <Home searchQuery={searchQuery} appliedFilters={appliedFilters} setCartCount={setCartCount}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
