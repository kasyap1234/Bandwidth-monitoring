import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import LineChart from './LineChart';
import Home from './Home';
import LoginPage from './LoginPage'; 
const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/chart" element={<LineChart />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
};

export default RoutesPath;
