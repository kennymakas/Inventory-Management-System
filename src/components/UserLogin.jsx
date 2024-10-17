import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import { loginUser } from '../Api';

const UserLogin = () => {

   const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {email, password}
        try {
            const response = await loginUser(formData);

            console.log("user logged in successfully", response)
            // localStorage.setItem('token', response.jwt)
            navigate("/dashboard")

            
        } catch (error) {
            console.error('login error', error)
        }
        
    }
  return (
    <div>
     
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <h3>Please login here</h3>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
            Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Username or email"
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
              Login
            </button>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
