import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const SERVER_URL = `https://ishushreyas.up.railway.app/content/${id}`;
  
  try {
    const response = await axios.get(SERVER_URL);
    return { contents: response.data };
  } catch (error) {
    console.error("Error fetching contents", error);
    return { contents: [] }; // Return an empty array in case of error
  }
    };

    fetchContent();
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.body}</p>
    </div>
  );
};

export default Content;