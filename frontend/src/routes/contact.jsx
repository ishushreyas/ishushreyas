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
  .then(setFormData({
    name: '',
    email: '',
    message: '',
  })) 
  .catch(error => console.error('Error:', error));
  }

  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Contact Me</h1>
      <div className="flex j-c a-i">
        <div className='bs-2 bd-1 bg-1 br-2 p-3 cw-1'>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">person</span><p className="p">Name: </p></label>
          <input type="text" name='name' placeholder="John Smith" onChange={onChangeHandler} className="bd-1 cw-2 p" value={formData.name}/>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">email</span><p className="p">Email: </p></label>
          <input type="email" name='email' placeholder="someone@gmail.com" onChange={onChangeHandler} className="bd-1 cw-2 p" value={formData.email}/>
          <label className="flex j-l a-i"><span className="material-symbols-rounded">message</span><p className="p">Message: </p></label>
          <textarea name='message' placeholder="Message..." onChange={onChangeHandler} className="bd-1 cw-2 p" value={formData.message}></textarea> <br />
          <Form
                method="post"
                action="contact"
                onSubmit={(event) => {
                event.preventDefault();
                  handleOnSubmit();
                }}
          >
              <button className="bd-1 m-3 p-3 br-1 p">Send</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
