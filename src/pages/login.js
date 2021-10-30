import React from 'react';
import '../styles/loginStyle.css'

const Login = () => {
    return <>
    <h1>Login</h1>

    <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>


    </>
}

export default Login