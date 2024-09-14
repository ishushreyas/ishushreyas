import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export async function loader() {
  const SERVER_URL = "https://ishushreyas.up.railway.app/contents";
  
  try {
    const response = await axios.get(SERVER_URL);
    return { contents: response.data.data };
  } catch (error) {
    console.error("Error fetching contents", error);
    return { contents: [] }; // Return an empty array in case of error
  }
}

export function Contents() {
  const { contents } = useLoaderData();

  return (
    <>
    <span>{ contents }</span>
      {contents.length ? (
        <ul>
          {contents.map((content) => (
            <li key={content.id}>
              <Link to={`contacts/${content.id}`}>
                {content.first || content.last ? (
                  <>
                    {content.first} {content.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}
                {content.favorite && <span>★</span>}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </>
  );
}
