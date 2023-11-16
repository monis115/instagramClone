import React from 'react'
import "./Login.css"
import LOGO from '../images/Instagram_logo.png'


const Login = () => {
  return (
    <div className="login">
        <img
          src={LOGO} 
          alt=''

          />

          <input type='email' placeholder="Email"/>
          <input type='password' placeholder='Password'/>
          <button>Log in</button>
    </div>
  )
}

export default Login