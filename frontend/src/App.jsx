import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const submit = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const bloodgroup = document.getElementById('bloodgroup').value;

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        age,
        address,
        phone,
        email,
        gender,
        bloodgroup,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('Data submitted successfully');
        navigate('/Dashboard');
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Registration Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone no:</label>
        <input type="text" id="phone" name="phone" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div className="gender-options">
          <input type="radio" id="male" name="gender" value="male" className="form-radio" /> Male
          <input type="radio" id="female" name="gender" value="female" className="form-radio" /> Female
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="bloodgroup">Blood Group:</label>
        <input type="text" id="bloodgroup" name="bloodgroup" className="form-input" />
      </div>
      <button onClick={submit} className="form-button">Submit</button>
    </div>
  );
}

export default App;
