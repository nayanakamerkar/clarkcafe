// client/src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    clarkId: '',
    password: '',
  });

  const { name, email, mobileNumber, clarkId, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/users/register', formData);
      toast.success('User registered successfully');
      navigate('/signin');
    } catch (err) {
      toast.error('User registration failed');
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Clark Id"
            name="clarkId"
            value={clarkId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="ID"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
