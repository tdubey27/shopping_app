import React, { useState } from "react";
import "./FilterComponent.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const FilterComponent = (props) => {
  const { setAppliedFilters } = props;
  const [openSection, setOpenSection] = useState("");
  const [genderFilter, setGenderFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState(""); 

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const handleCheckboxChange = (filterType, value) => {
    if (filterType === "gender") {
      setGenderFilter((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
    if (filterType === "color") {
      setColorFilter((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
    if (filterType === "size") {
      setSizeFilter((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  const handlePriceChange = (value) => {
    setPriceFilter(value); 
  };

  const handleApplyFilters = () => {
    const appliedFilters = {
      gender: genderFilter,
      color: colorFilter,
      size: sizeFilter,
      price: priceFilter,
    };
    setAppliedFilters(appliedFilters);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div className="filter-section">
        <div className="filter-title" onClick={() => toggleSection("gender")}>
          Gender {openSection === "gender" ? <SlArrowDown /> : <SlArrowUp />}
        </div>
        {openSection === "gender" && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("gender", "Men")}
                checked={genderFilter.includes("Men")}
              />{" "}
              Men
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("gender", "Women")}
                checked={genderFilter.includes("Women")}
              />{" "}
              Women
            </label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div className="filter-title" onClick={() => toggleSection("color")}>
          Color {openSection === "color" ? <SlArrowDown /> : <SlArrowUp />}
        </div>
        {openSection === "color" && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("color", "Black")}
                checked={colorFilter.includes("Black")}
              />{" "}
              Black
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("color", "White")}
                checked={colorFilter.includes("White")}
              />{" "}
              White
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("color", "Blue")}
                checked={colorFilter.includes("Blue")}
              />{" "}
              Blue
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange("color", "Red")}
                checked={colorFilter.includes("Red")}
              />{" "}
              Red
            </label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div className="filter-title" onClick={() => toggleSection("size")}>
          Size {openSection === "size" ? <SlArrowDown /> : <SlArrowUp />}
        </div>
        {openSection === "size" && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("size", "Small")}
                checked={sizeFilter.includes("Small")}
              />{" "}
              Small
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("size", "Medium")}
                checked={sizeFilter.includes("Medium")}
              />{" "}
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange("size", "Large")}
                checked={sizeFilter.includes("Large")}
              />{" "}
              Large
            </label>
          </div>
        )}
      </div>
      <div className="filter-section">
        <div className="filter-title" onClick={() => toggleSection("price")}>
          Price {openSection === "price" ? <SlArrowDown /> : <SlArrowUp />}
        </div>
        {openSection === "price" && (
          <div className="filter-options">
            <label>
              <input
                type="radio"
                name="price"
                value="low"
                onChange={(e) => handlePriceChange(e.target.value)}
                checked={priceFilter === "low"}
              />{" "}
              Low
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="high"
                onChange={(e) => handlePriceChange(e.target.value)}
                checked={priceFilter === "high"}
              />{" "}
              High
            </label>
          </div>
        )}
      </div>
      <button className="apply-button" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
