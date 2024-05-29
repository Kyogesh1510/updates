import React from 'react'
import './LoginRegister.css';

const LoginRegister = () => {
  return (
    <div className='wrapper'>
        <div className="form-box-login">
            <form action=''>
                <h1>Sign In</h1>
                <div className='input-box'>
                    <input type='email' placeholder='Eg: abc@example.com' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='enter your password' required />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot password ?</a>
                </div>
                <button type='submit'>Sign In</button>
                <div className='register-link'>
                    <p>don't have an account?<a href='#'> Register</a></p>
                </div>
                <p>----------------------OR-----------------------</p>
                <div className='gmail'>
                  <center> <img src='images1.png'></img><img src='img3.png'></img></center>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegister