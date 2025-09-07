import { useState, useEffect } from "react";
import "./Home.css";
import Pagination from "./Pagination";
import { buildApiUrl } from "./utility";
import { MdAddShoppingCart  } from "react-icons/md";

const baseUrl = "https://api.searchspring.net/api/search/search.json";

const Home = (props) => {
  const { searchQuery, appliedFilters, setCartCount } = props;
  const [data, setData] = useState([]);
  const [sortOptions, setSortOptions] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
  };

  const fetchApi = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const apiUrl = buildApiUrl(
      baseUrl,
      searchQuery,
      currentPage,
      appliedFilters, 
      sortBy
    );
    fetch(apiUrl , options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setTotalPages(data.pagination.totalPages);
        setSortOptions(data.sorting.options)
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (searchQuery === "") {
      setCurrentPage(1);
      setTotalPages(0);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchApi();
  }, [currentPage, searchQuery, appliedFilters, sortBy]);
  console.log(sortOptions,"sooo", sortBy)

  return (
    <>
      {searchQuery !== "" && (
        <div className="center-align">
          <div className="search-header">
            <span>Search result for "{searchQuery}"</span>
            <div className="sort-by">
              <label htmlFor="sort-select">Sort by: </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                 {sortOptions?.map((option)=>(<option value={option.label}>{option.label}</option>))} 
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="product-grid">
        {data?.map((item) => (
          <div className="product-card">
            <img
              src={item.thumbnailImageUrl}
              alt={item.name}
              className="product-image"
            />
            <div className="product-name">{item.name}</div>

            <div className="product-price-container">
              {item.msrp > item.price && (
                <span className="product-msrp">${item.msrp}</span>
              )}
              <span className="product-price">${item.price}</span>
              <MdAddShoppingCart onClick={()=>setCartCount((prev)=>prev+1)}/>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};
export default Home;
