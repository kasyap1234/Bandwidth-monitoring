import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      navigate("/Home");
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <div className="Appform" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="loginform" style={{ display: 'flex', flexDirection: 'column' }}>
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
          <Button type="submit" variant="contained" color="primary" style={{ width: '150px',marginLeft: '70px' }}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
