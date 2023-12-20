import React, { useState } from 'react';
import './Login.css';
import SWLogo from '../../assets/logos/LOGO_SW.png'
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import useAuth from '../../helpers/auth/UseAuth';


export default function Login() {
  const { login } = useAuth();
  const [user, setUser] = useState({
    user: "",
    password: "",
  })
  const [logError, setLogError] = useState("")
  const handleInput = (input) => setUser({...user, [input.target.name]: input.target.value})
  const tryLogin = (form) => {
    form.preventDefault();
    login(user, setLogError )
  }
  return (
    <div className='login__main__ScWi' >
      <img src={SWLogo} alt="Schoolar Wide" height={100} width={100} />
      <div>
        <form onSubmit={tryLogin} >
          <h2>Sign In</h2>
          <div className='login__main__input__cont' >
            <FaRegUserCircle />
            <input type="text" name='user' value={user.user} onChange={handleInput} />
          </div>
          <div>
            <div className='login__main__input__cont' >
              <FaLock />
              <input type="password" name='password' value={user.password} onChange={handleInput}  />
            </div>
            <div className='special__cont' >
              <div>
                <input type="checkbox" id='rememberMe' />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link>Forgot Password</Link>
            </div>
          </div>
          {
            !!logError && <p style={{color: "#FFDE59", textAlign: "center"}} >{logError}</p>
          }
          <input type="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  )
}
