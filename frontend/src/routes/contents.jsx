import { useLoaderData } from 'react-router-dom';

export async function loader() {
  return {
    contents: [
      {
        title: 'About Me',
        path: '/about-me',
      },
      {
        title: 'Projects',
        path: '/projects',
      },
      {
        title: 'Contact Me',
        path: '/contact-me',
      },
    ],
  }
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
