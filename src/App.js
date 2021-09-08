import React,{useEffect} from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Login from "./HomeScreen/Login";
import ProfileScreen from "./HomeScreen/Login/ProfileScreen";
import { auth } from "./firebaseControl";
import { useDispatch,useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))

      }else{
        dispatch(logout())
      }
    });
    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (<Login/>)
          :(<Switch>
            <Route path="/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch> )
        }
      </Router>
    </div>
  );
}

export default App;
