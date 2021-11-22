import React,{useState} from 'react'
import './Login.scss'
import logo from '../../Mockflix.png'

import SignInScreen from './SignInScreen'

function Login() {
  const [signIn,setSignIn] = useState(false)
  return (
    <div className="login">
      
      
      <img src={logo} alt="" className="logo" />
      <button onClick={() => setSignIn(true)} className="button">
        Sign In
      </button>

      <div className="gradient"/>
      
      <div className="body">

        {signIn ? (<SignInScreen/>) : (
          <>
          <h1>
            Unlimited films, TV programmes and more.
          </h1>
          <h2>Watch anywhere. Cancel at anytime </h2>
          <h3>Ready to start enter your email to create or restart your membership.</h3>
          <div className="input">
            <form action="">
              <input type="email" placeholder="Email Address" />
              <button onClick={() => setSignIn(true)} className="getstarted">
                GET STARTED
              </button>
            </form>
          </div>
          <button onClick={() => setSignIn(true)} className="getstarted anonymosly">
              To check the website Anonymosly
          </button>
        </>
        )}
        
      </div>
    </div>
  )
}

export default Login
