import { useRef } from 'react';
import { Form } from 'react-router-dom';

export default function Contact() {
  const SERVER_URL = "https://ishushreyas.up.railway.app/contact";
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleOnSubmit = () => {
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

  fetch( SERVER_URL , {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  }

  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Contact Me</h1>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">person</span><p className="poppins">Name: </p></label>
      <input type="text" placeholder="John Smith" ref={nameRef} className="bs-1 bd-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">email</span><p className="poppins">Email: </p></label>
      <input type="email" placeholder="someone@gmail.com" ref={emailRef} className="bs-1 bd-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">message</span><p className="poppins">Message: </p></label>
      <textarea placeholder="Message..." ref={messageRef} className="bs-1 bd-1 br-2 t-5 p-2 poppins"></textarea> <br />
      <Form
            method="post"
            action="contact"
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
