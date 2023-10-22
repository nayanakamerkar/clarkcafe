// client/src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
} from '@mui/material';

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
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      />
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <TextField
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <TextField
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            placeholder="Clark Id"
            name="clarkId"
            value={clarkId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            id="outlined-password-input"
            label="Password"

            autoComplete="current-password"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>

          <form noValidate sx={{ width: '100%', mt: 2 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="clarkId"
              label="Clark ID"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Register;



