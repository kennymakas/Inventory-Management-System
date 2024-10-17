import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Api";
import HeaderSection from "./HeaderSection";


const UserRegistration = () => {
 const navigate = useNavigate()
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {username, email,password}
    try {
      const response = await registerUser(formData);
      console.log("User registered successfully", response);
      //handle post-registration logic(redirect)
      navigate("/login")
    } catch (error) {
      console.error("registration error", error);
    }
    console.log("form data", formData);
  };
  return (
    <div>
      

      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <h3>Please sign up here</h3>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Username"
              onChange={(e)=>setUsername(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Email
            </label>
            <input
              name="email"
              value={email}
              type="email"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Password
            </label>
            <input
              name="password"
              value={password}
              type="password"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
        
            <button class="btn btn-primary" type="submit">
              Register
            </button>
        </form>
      </div>
      
    </div>
  );
};

export default UserRegistration;
