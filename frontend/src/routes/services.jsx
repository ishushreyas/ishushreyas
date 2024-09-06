import React from 'react';

const Services = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Services</h1>
      <p className="poppins">Here's the list of tools I use.</p>
      <h2 className="t-6 poppins">Software</h2>
      <div className="m-3">
        <span className="bs-1 br-1 bg-1 m-1 p-1">VS Code</span>
        <span className="bs-1 br-1 bg-1 m-1 p-1">Android Studio</span>
      </div>
      <h2 className="t-6 poppins">Languages</h2>
      <div className="m-3">
        <span className="bs-1 br-1 bg-1 m-1 p-1">Go/GoLang</span>
        <span className="bs-1 br-1 bg-1 m-1 p-1">JavaScript</span>
      </div>
      <h2 className="t-6 poppins">Interested In</h2>
      <div className="m-3">
        <span className="bs-1 br-1 bg-1 m-1 p-1">React</span>
        <span className="bs-1 br-1 bg-1 m-1 p-1">C++</span>
      </div>
      <h2 className="t-6 poppins">Other Interests</h2>
      <div className="m-3">
        <span className="bs-1 br-1 bg-1 m-1 p-1">Learning Japanese</span>
        <span className="bs-1 br-1 bg-1 m-1 p-1">Sketching</span>
      </div>
    </div>
  );
};

export default Services;
