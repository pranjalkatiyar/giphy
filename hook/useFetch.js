import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = async ({ searchTerm, page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const type = searchTerm == "" ? "trending" : "search";
  const query = searchTerm == "" ? "" : "&q=" + searchTerm;
  const url = `https://api.giphy.com/v1/gifs/${type}?api_key=82xwZ7GCAQgfGo8oLM6F0ZD7FQvd9wXV${query}&limit=10&offset=${
    page - 1
  }*10`;
  console.log(url);
  const response = await axios.get(url);
  setLoading(true);
  setData(response.data.data);
  setLoading(false);

  return { data, loading, error };
};

export default useFetch;
