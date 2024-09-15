import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

// The loader function is used for data fetching before rendering
export async function loader() {
  const SERVER_URL = "https://ishushreyas.up.railway.app/contents";
  
  try {
    const response = await axios.get(SERVER_URL);
    // Assuming the structure of response.data is { code: number, data: array }
    return { contents: response.data.data || [] };
  } catch (error) {
    console.error("Error fetching contents", error);
    return { contents: [] }; // Return an empty array in case of error
  }
}

// The Contents component renders the data fetched by the loader
export function Contents() {
  const { contents } = useLoaderData();

  return (
    <>
      <h1 className='m-1 p-1 righteous'>Contents</h1>
      {contents.length ? (
        <ul className='m-0 p-0'>
          {contents.map((content) => (
            <li className='ls-0' key={content.ID}>
              <div className='m-1 p-1 bg-1 br-1 hv:cd-1 poppins'>
              <Link className='td-0 c-0' to={`/contents/${content.ID}`}>
                <p>{content.Title || <i>No Title</i>}</p>
                {content.Tags && content.Tags.length > 0 && (
                  <span>{content.Tags.map((tag) => (
                    <span className='p-2 m-1 bs-3 bg-3 br-1 ls-0 c-1 courier-prime'>{ tag }</span>
                  ))}</span>
                )}
                <p>{content.Author && <span> - {content.Author}</span>}</p>
              </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contents available</i>
        </p>
      )}
    </>
  );
}
