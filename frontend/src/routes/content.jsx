import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const SERVER_URL = `https://ishushreyas.up.railway.app/content?id=${id}`;
  
  try {
    const response = await axios.get(SERVER_URL);
    setContent(response.data.data);
    return { contents: response.data.data };
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
      <h1 className='m-1 p-1 righteous'>{content.Title}</h1>
      <p className='poppins'>{content.Content}</p>
    </div>
  );
};

export default Content;