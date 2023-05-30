import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully");
        navigate("/Home"); 
      } else {
        console.log("Passwords do not match");
      }
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  return (
    <div className="Appform" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="signupform" style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '300px' }}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '300px' }}
          />
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ marginBottom: '10px', width: '300px' }}
          />
          <Button type="submit" variant="contained" color="primary" style={{ width: '150px',marginLeft: '70px' }}>
            Sign Up
          </Button>
          <p style={{ marginTop: '15px' ,marginLeft: '70px'}}>
            Already a user? <Link to="/Login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

