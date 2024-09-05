import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`/api/content/${id}`);
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
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