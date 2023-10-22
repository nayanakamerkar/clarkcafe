// client/src/components/SignIn.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });

      console.log('JWT Token:', res.data.token);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userType', res.data.userType);
    } catch (err) {
        toast.error(err.response.data.msg);
      console.error(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
