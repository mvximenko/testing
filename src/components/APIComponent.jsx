import { useState, useEffect } from 'react';
import axios from 'axios';

const APIComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api');
      setData(res.data);
    })();
  }, []);

  return <div>{data && <h1>Name is {data.title}</h1>}</div>;
};

export default APIComponent;
