import React, { useState } from "react";
import "../styles/signUpStyle.css";

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    email: "",
    password: "",
  });
  
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("https://ecomerce-master.herokuapp.com/api/v1/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h1>Sign Up</h1>

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first"></div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              type="text"
              id="first_name"
              className="fadeIn second"
              name="login"
              placeholder="First Name"
              required
            />
            <input
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              type="text"
              id="last_name"
              className="fadeIn second"
              name="login"
              placeholder="Last Name"
              required
            />
            <input
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              type="date"
              id="birth_date"
              className="fadeIn third"
              name="login"
              placeholder="birthday"
              required
            />
            <input
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              type="email"
              id="email"
              className="fadeIn third"
              name="login"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Password"
              required
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
              id="confirm-password"
              className="fadeIn third"
              name="login"
              placeholder="Confirm Password"
              required
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
