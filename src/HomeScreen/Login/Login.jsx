import React,{useState} from 'react'
import './Login.scss'
import SignInScreen from './SignInScreen'

function Login() {
  const [signIn,setSignIn] = useState(false)
  return (
    <div className="login">
      
      <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="logo" />
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
        </>
        )}
        
      </div>
    </div>
  )
}

export default Login
