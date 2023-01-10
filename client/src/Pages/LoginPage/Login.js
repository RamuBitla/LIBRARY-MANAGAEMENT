
import React, { useState } from "react";
import { Link } from "react-router-dom";

//COMPONENT:
import {useLogin} from '../../Hooks/useLogin/useLogin';

//STYLE SHEET:
import "./LoginStyle.css";

//IMAGES:
import Character from "../../Assets/Character.png";
import plant from "../../Assets/Plant.png";
import logo from "../../Assets/logo.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, error} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
       <div className="logmain">
      <img src={logo} alt="logo" />
     <h1>LIBRARY MANAGEMENT SOFTWARE</h1>
      </div>
      
      <div className="login-page">
       
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Student Login</h2>

            <div className="filed-control">
              <input
                type="email"
                placeholder="Email_Id"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <input
                type="password"
                placeholder="Passcode"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <p className="to-login">
              If you not registered ?{" "}
              <span className="login-link">
                <Link to="/register">Register</Link>
              </span>{" "}
            </p>

           <div className="login-btn">
           <button className="login-btn">Login</button>
           {error && <p>{error}</p>}
           </div>
          </form>
          <img src={Character} className="char-img" alt="" />
          <img src={plant} className="plant-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login
