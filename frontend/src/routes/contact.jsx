export default function Contact() {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Contact Me</h1>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">person</span><p className="poppins">Name: </p></label>
      <input type="text" placeholder="John Smith" className="bs-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">email</span><p className="poppins">Email: </p></label>
      <input type="email" placeholder="someone@gmail.com" className="bs-1 br-2 t-5 p-2 poppins"/>
      <label className="flex j-l a-i"><span className="material-symbols-rounded">message</span><p className="poppins">Message: </p></label>
      <textarea placeholder="Message..." className="bs-1 br-2 t-5 p-2 poppins"></textarea> <br />
      <button className="bs-1 t-5 m-3 p-3 br-2 poppins">Send</button>
    </div>
  );
}