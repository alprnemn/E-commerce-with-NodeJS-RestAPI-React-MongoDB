import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url,category,id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        // Fetch Product Detail
        if(id) {
          const response = await axios.get(url+id);
          setData(response.data);
          setLoading(false);
          return
        }

        // Fetch All Products
        if (!category) {
          const response = await axios.get(url);
          setData(response.data);
          setLoading(false);
          return
        }

        // Fetch Category Products
        const response = await axios.get(url);
        setData(response.data.filter((item) => item.category.name == category));
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;