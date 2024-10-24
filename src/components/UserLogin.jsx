import { useState } from 'react'
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"
import { loginUser } from '../Api';
import imagePicture from '../assets/images/Login 2.avif'

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
    <>
      <div className="container my-5 py-5">
        <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className=''>
                <h3 className='text-uppercase fs-2 text-primary fw-bold'>Please login here</h3>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                  <input type="text" name="email" value={email} className="form-control" id="formGroupExampleInput" placeholder="Enter Username or email" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                  <input
                    name="password"
                    value={password}
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter your password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>
          
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <Link to='/register' className="btn btn-outline-primary mx-3" type="submit">
                  Sign-Up
                </Link>
              </form>
            </div>
            <div className="col-md-6 align-items-center">
              <img src={ imagePicture } alt="..." className='w-50 rounded'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLogin
