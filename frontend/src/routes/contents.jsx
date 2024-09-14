import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

export async function loader() {
  const SERVER_URL = "https://ishushreyas.up.railway.app/contents";
  const contents = () => {
    axios.get(SERVER_URL)
    .then((response) => {
      return response.data
    }).catch((error) => {
      console.error("Error fetching blogs");
    })
    return {}
  };
  return { contents }
}

export default function Contents() {

  const { contents } = useLoaderData();

  return (
    <>
    {contents.length ? (
            <ul>
              {contents.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
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
