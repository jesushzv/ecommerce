import React from 'react';
import "../styles/signUpStyle.css"

const SignUp = () =>{

    return <>

        <h1>Sign Up</h1>

        <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
    </div>

    <form>
      <input type="text" id="name" className="fadeIn second" name="login" placeholder="name"/>
      <input type="date" id="password" className="fadeIn third" name="login" placeholder="birthday"/>
      <input type="email" id="password" className="fadeIn third" name="login" placeholder="email"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Sign Up"/>
    </form>

    

  </div>
</div>

    </>

}

export default SignUp