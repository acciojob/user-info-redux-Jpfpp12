import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './actions.js';

export default function App() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User Information</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}
