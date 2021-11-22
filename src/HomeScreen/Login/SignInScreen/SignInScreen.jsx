import React,{useRef} from 'react'
import { auth } from '../../../firebaseControl';
// import { getAuth, signInAnonymously } from "firebase/auth";
import './SignInScreen.scss'
// import './styles.css'


function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value, 
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      })
  }
  
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value, 
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      })
  }




  const anonymousLogin = (e) =>{

    e.preventDefault();
    auth.signInWithEmailAndPassword(
      "test@gmail.com","123456"
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      })
  }

 


  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">Sign In</button>
        <button onClick={anonymousLogin} type="submit">Guest Login</button>

        <h4>
          <span className="gray">New to Netflix? </span>
          <span className="link" onClick={register}>Sign Up now.</span>
        </h4>

      </form>
    </div>
  )
}

export default SignInScreen
