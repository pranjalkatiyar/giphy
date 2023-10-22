import axios from "axios";

const getData = async ({ searchTerm, page }) => {
  console.log(page, "number");
  const type = searchTerm == "" ? "trending" : "search";
  const query = searchTerm == "" ? "" : "&q=" + searchTerm;
  const url = `https://api.giphy.com/v1/gifs/${type}?api_key=82xwZ7GCAQgfGo8oLM6F0ZD7FQvd9wXV${query}&offset=${
    (page - 1) * 10
  }&limit=10`;
  // console.log(url);
  const response = await axios.get(url);
  const data = response.data.data;
  return { data, loading: false, error: false };
};

export default getData;
