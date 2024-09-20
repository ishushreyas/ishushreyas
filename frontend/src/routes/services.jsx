import React from 'react';

const Services = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className='br-2 bg-1 m-1 p-1 hv:cd-1'>
        <h3 className='t-6 m-0 p'>Static Website</h3>
        <p className='p'>I use React framework to create Static website.</p>
      </div>
      <div className='br-2 bg-1 m-1 p-1'>
        <h3 className='t-6 p'>Full Stack</h3>
        <p className='p'>I use React Js for frontend and GoLang for backend. This site itself is a full stack website created using React Js and GoLang.</p>
      </div>
      <div className='br-2 bg-1 m-1 p-1'>
        <h3 className='t-6 p'>Backend-server</h3>
        <p className='p'>I use GoLang to create Backend servers and APIs.</p>
      </div>
      </div>
    </div>
  );
};

export default Services;
