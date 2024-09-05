import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="m-1 p-1 bs-1 br-1">
      <p className="poppins">{message.User}</p>
      <p>{message.Message}</p>
    </div>
  );
};

export default Message;