import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Message from '../components/Message';

const Forum = () => {
  const { forumId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/forums/${forumId}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [forumId]);

  return (
    <div className="p-1">
      <h1 className="righteous">Forum</h1>
      <div className="flex j-s a-i">
        <button className="bs-1 t-5 m-3 p-3 br-1 poppins">Send Message</button>
      </div>
      <ul>
        {/*messages.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))*/}
      </ul>
    </div>
  );
};

export default Forum;