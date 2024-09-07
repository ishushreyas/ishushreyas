import { Form } from 'react-router-dom';

function handleOnSubmit() {
  const formData = {
    name: "Ishu",
    email: "some@email",
    message: "long \nmulti line \nmessage"
};

  fetch('https://redesigned-tribble-5746wq649xpf47g7-8080.app.github.dev/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => response.text())
.then(data => alert(data))
.catch(error => console.error('Error:', error));
}

export default function Contact() {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Contact Me</h1>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">person</span><p className="poppins">Name: </p></label>
      <input type="text" placeholder="John Smith" className="bs-1 bd-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">email</span><p className="poppins">Email: </p></label>
      <input type="email" placeholder="someone@gmail.com" className="bs-1 bd-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">message</span><p className="poppins">Message: </p></label>
      <textarea placeholder="Message..." className="bs-1 bd-1 br-2 t-5 p-2 poppins"></textarea> <br />
      <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              event.preventDefault();
              handleOnSubmit();
            }}
          >
            <button className="bs-1 bd-1 bg-1 t-5 m-3 p-3 br-1 poppins">Send</button>
          </Form>
    </div>
  );
}
