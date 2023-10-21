import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const type = searchTerm == "" ? "trending" : "search";
  const query = searchTerm == "" ? "" : "&q=" + searchTerm;
  const url = `https://api.giphy.com/v1/gifs/${type}?api_key=82xwZ7GCAQgfGo8oLM6F0ZD7FQvd9wXV${query}&limit=10`;
  console.log(url);
  // https://api.giphy.com/v1/gifs/trending?api_key=82xwZ7GCAQgfGo8oLM6F0ZD7FQvd9wXV&limit=25&offset=0&rating=g&bundle=messaging_non_clips
  const fetchData = async () => {
    const response = await axios.get(url);
    setLoading(true);
    setData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return { data, loading, error };
};

export default useFetch;
