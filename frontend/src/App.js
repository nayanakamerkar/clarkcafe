// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // import Routes instead of Switch
import MainPage from './components/MainPage';
import Register from './components/Register'; // Import your Register component
import SignIn from './components/SignIn'; // Import your SignIn component
import AddProduct from './components/AddProduct';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
