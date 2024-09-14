import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function Contact() {
  const SERVER_URL = "https://ishushreyas.up.railway.app/contact";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeHandler = () => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  };

  const handleOnSubmit = () => {
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
      <div className="flex j-c a-i">
        <div className='bs-1 bg-0 br-2 p-3 cw-1'>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">person</span><p className="poppins">Name: </p></label>
          <input type="text" name='name' placeholder="John Smith" onChange={onChangeHandler} className="bs-2 bd-1 br-2 cw-2 t-5 p-2 poppins"/>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">email</span><p className="poppins">Email: </p></label>
          <input type="email" name='email' placeholder="someone@gmail.com" onChange={onChangeHandler} className="bs-2 bd-1 br-2 cw-2 t-5 p-2 poppins"/>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">message</span><p className="poppins">Message: </p></label>
          <textarea name='message' placeholder="Message..." onChange={onChangeHandler} className="bs-2 bd-1 br-2 cw-2 t-5 p-2 poppins"></textarea> <br />
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
      </div>
    </div>
  );
}
