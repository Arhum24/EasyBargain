import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../HomePage/Header';
import Footer from '../../HomePage/Footer';


import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
    <Header />
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading">Negotiation Box</h3>
        <h1>Contact Seller</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Enter Chat room</button>
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
}
