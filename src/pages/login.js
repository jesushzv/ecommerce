import React, { useState } from "react";
import "../styles/loginStyle.css";
import {Alert} from 'react-bootstrap'
import { login } from "../constants";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    active: false,
    message: "",
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch(login, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError({
            active: true,
            message: data.message,
          });
        } else {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
     
  };

  return (
    <>
      <h1>Login</h1>

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first"></div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              required
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />

            {error.active && (
             
             <Alert variant="danger" onClose={() => setError({active:false,message:""})} dismissible>
        <Alert.Heading>{error.message}</Alert.Heading>
        
      </Alert>


            )}

          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
