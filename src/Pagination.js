import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePageClick = (pageNum) => {
    if (typeof pageNum === "number") {
      setCurrentPage(pageNum);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPageNumbers().map((number, index) => (
        <button
          key={index}
          className={`pagination__button ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => handlePageClick(number)}
          disabled={number === "..."} 
        >
          {number}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={currentPage === totalPages} 
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;