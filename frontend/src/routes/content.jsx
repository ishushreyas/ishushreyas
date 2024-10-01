import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
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
  <div className='m-1 p-1 bg-1 bs-2 br-1'>
    <h1 className='righteous'>{content.Title}</h1>
    {content.Tags && content.Tags.length > 0 && (
      <span>{content.Tags.map((tag, index) => (
        <span key={index} className='p-2 m-1 bs-3 bg-2 br-1 ls-0 courier-prime'>{tag}</span>
      ))}</span>
    )}
    <p className='courier-prime'>{content.Author}</p>
    <p className='p'>
      {new Date(content.CreatedAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })}
    </p>
    <img className='br-1 bs-2' src={content.Image} />
    <p className='p'><ReactMarkdown>{content.Content}</ReactMarkdown></p>
  </div>
);
};

export default Content;
