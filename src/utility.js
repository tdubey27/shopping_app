export const buildApiUrl = (
  baseUrl,
  searchQuery,
  currentPage,
  appliedFilters = {},
  sortBy
) => {
  let url = `${baseUrl}?siteId=scmq7n&q=${searchQuery}&resultsFormat=native&page=${currentPage}`;
  if (appliedFilters && typeof appliedFilters === "object") {
    Object.entries(appliedFilters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          url += `&${key}=${encodeURIComponent(v)}`;
        });
      } else if (value) {
        url += `&${key}=${encodeURIComponent(value)}`;
      }
    });
  }
  if (sortBy !== "") {
    url += `&${sortBy}=asc`;
  }
  return url;
};
