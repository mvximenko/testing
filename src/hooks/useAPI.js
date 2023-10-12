import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api');
      setData(res.data);
    })();
  }, []);

  return data;
};

export default useAPI;
