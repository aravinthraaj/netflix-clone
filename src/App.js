import React,{useEffect} from "react";
import "./App.scss";
import HomeScreen from "./HomeScreen";
import Login from "./HomeScreen/Login";
import ProfileScreen from "./HomeScreen/Login/ProfileScreen";
import Nav from "./Components/Nav";
import { auth } from "./firebaseControl";
import { useDispatch,useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice"
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TvShows from "./pages/TvShows/TvShows";
import Movies from "./pages/Movies/Movies";
import SearchPage from "./pages/SearchPage/SearchPage";




function App() {
  const user = useSelector(selectUser);
  

  // const user = null;

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))

      } else {
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
          :(<>
            <Nav/>
            <Switch>
              <Route exact path="/profile">
                <ProfileScreen/>
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/tvshows">
                <TvShows />
              </Route>
              <Route exact path="/movies">
                <Movies />
              </Route>
              <Route exact path="/search">
                <SearchPage/>
              </Route>
            </Switch> 
          </>)
        }
      </Router>
    </div>
  );
}

export default App;
