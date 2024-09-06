import React from 'react';

const Services = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Services</h1>
      <div className='bs-2 br-2 bg-1 m-1 p-1'>
        <h3 className='t-6 righteous'>Static Website</h3>
        <p className='poppins'>I use React framework to create Static website.</p>
      </div>
      <div className='bs-2 br-2 bg-1 m-1 p-1'>
        <h3 className='t-6 righteous'>Full Stack</h3>
        <p className='poppins'>I use React Js for frontend and GoLang for backend. This site itself is a full stack website created using React Js and GoLang.</p>
      </div>
      <div className='bs-2 br-2 bg-1 m-1 p-1'>
        <h3 className='t-6 righteous'>Backend-server</h3>
        <p className='poppins'>I use GoLang to create Backend servers and APIs.</p>
      </div>
    </div>
  );
};

export default Services;
