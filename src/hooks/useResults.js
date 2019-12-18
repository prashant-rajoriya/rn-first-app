import { useState, useEffect } from "react";
import yelp from "../api/index";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getResults = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getResults("pasta");
  }, []);

  return [results, errorMessage, getResults];
};
