import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Register.scss";
import properties from "../properties.json"
import formDataToJson from "../toJson.js"
import fetchFunction from "../fetch.js"

const Url = properties.url

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          [name]: name === "profileImage" ? files[0] : value,
        });
      };

      const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword )
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const register_form = new FormData()

      for (var key in formData) {
        register_form.append(key, formData[key])
      }
      var payload = formDataToJson(register_form)
      console.log(payload)
      
      fetchFunction(`${Url}/auth/register`,"post",payload,function(data){
		  console.log(data.message)
		  if(data.user){
			navigate("/login")  
		  } 
	  })

    } catch (err) {
      console.log("Registration failed", err.message)
    }
    return false;
  }

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
            <input 
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
             <input 
              placeholder="Last Name"
              name="lastName"
              value={formData.lasttName}
              onChange={handleChange}
              required
            />
             <input 
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
             <input 
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
            />
             <input 
              placeholder="confirm Password"
              name="confirmpassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              required
            />

            {!passwordMatch && (
              <p style={{ color: "red" }}>Passwords are not matched!</p>
            )}

            
            
            <button type="submit">REGISTER</button>
        </form>
        <a href='/login'>Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
