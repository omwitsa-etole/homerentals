import React, { useState } from "react";
import "../styles/Login.scss"
import { setLogin } from "../redux/state";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import properties from "../properties.json"
import formDataToJson from "../toJson.js"
import fetchFunction from "../fetch.js"

const Url = properties.url

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
		
	  fetchFunction(`${Url}/auth/login`,"post",{ email, password },function(loggedIn){
		  console.log(data)
		  if (loggedIn) {
			dispatch (
			  setLogin({
				user: loggedIn.user,
				token: loggedIn.token
			  })
			)
			navigate("/")
		  } 
	  })

    } catch (err) {
      console.log("Login failed", err.message)
    }
    return false;
  }

  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
  );
};

export default LoginPage;

