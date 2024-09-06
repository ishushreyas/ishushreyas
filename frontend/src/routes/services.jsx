import React from 'react';

const Services = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Services</h1>
      <p className="poppins">Here's the list of tools I use.</p>
      <h2 className="t-6 poppins">Software</h2>
      <div className="p-1">
        <ul>
          <li className="bs-1 br-1">VS Code</li>
          <li className="bs-1 br-1">Android Studio</li>
        </ul>
      </div>
      <h2 className="t-6 poppins">Languages</h2>
      <div className="p-1">
        <ul>
          <li className="bs-1 br-1">Go/Golang</li>
          <li className="bs-1 br-1">JavaScript</li>
        </ul>
      </div>
      <h2 className="t-6 poppins">Interested In</h2>
      <div className="p-1">
        <ul>
          <li className="bs-1 br-1">React</li>
          <li className="bs-1 br-1">C++</li>
        </ul>
      </div>
      <h2 className="t-6 poppins">Other Interests</h2>
      <div className="p-1">
        <ul>
          <li className="bs-1 br-1">Learning Japanese</li>
          <li className="bs-1 br-1">Sketching</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
