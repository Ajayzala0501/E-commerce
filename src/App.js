import "./App.css";
import logo from "./logo.png";
import axios from 'axios';
import { useState, useEffect } from "react";
import Productlist from "./Componet/Productlist";
function App() {

  useEffect(() => {
    signupHandler()
  },[]);

  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Ajay",
        lastName: "Zala",
        email: "ajayzala@gmail.com",
        password: "ajayzala@123",
      });
      // saving the encodedToken in the localStorage
      console.log(response)
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header>
      <Productlist></Productlist>
    </div>
  );
}

export default App;
