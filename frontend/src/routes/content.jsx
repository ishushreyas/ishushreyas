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
      } catch (error) {
        console.error("Error fetching contents", error);
      }
    };

    fetchContent();
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className='m-1 p-1 bg-1 bs-2 br-1'>
      <h1 className='sora t-4 fw-1'>{content.Title}</h1>
      {content.Tags && content.Tags.length > 0 && (
        <span>{content.Tags.map((tag, index) => (
          <span key={index} className='p-2 m-1 bs-3 p bd-1 br-1 ls-0 c-1 fw-1'>{tag}</span>
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
      <div className='thumbnail-wrapper br-1'>
        <img className='br-1' src={content.Image} alt="Content Thumbnail" />
      </div>

      {/* Render array of content items */}
      {content.Content && content.Content.length > 0 && content.Content.map((item, index) => (
        <div key={index} className="content-item">
          {item.type === "markdown" ? (
            <ReactMarkdown className='p'>{item.data}</ReactMarkdown>
          ) : item.type === "image" ? (
            <img className='content-image br-1' src={item.data} alt="Content Item" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Content;
