import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='loginPage'> 
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
            </Link>
            <div className='loginBox'>
                <p className='login__heading'><h1>Login</h1></p>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>
                </form>
                
                <button>Continue</button>
                <p><small>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.</small></p>
                <small><a href='#'>Need help</a></small>
            </div>
            <button className='login__registerButton'>Create your Amazon account</button>
        </div>
    )
}

export default Login
