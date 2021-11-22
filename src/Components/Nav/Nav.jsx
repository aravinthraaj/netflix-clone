import React,{useEffect,useState,useRef} from 'react'
import logo from '../../Mockflix.png'
import { useHistory } from 'react-router';
import './Nav.scss'
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import SearchPage from '../../pages/SearchPage/SearchPage';

function Nav() {
    const [show,hanldeShow] = useState(false);
    const [isActive, setisActive] = useState(false)
    const searchRef = useRef(null)
    const history = useHistory();

    const handleSearch = (e) =>{
        if(e.target.value){
            if(e.target.value.length <= 1){
                history.push(`/`)
            }else{
                history.push(`/search?q=${e.target.value}`)
            }
        }
    }

    const ToggleActive = () => {
      setisActive(!isActive);  
      document.getElementById("search").focus();

    };



    const transitionNavbar = () => {
        if(window.scrollY > 100){
            hanldeShow(true);
        }else{
            hanldeShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
    })

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="container">
                <div className="left">
                    <img
                        onClick={()=>{history.push("/")}} 
                        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        src={logo} 

                        alt=""
                    /> 
                    <span id="home" onClick={()=>{history.push("/")}} >Homepage</span>
                    <span id="series" onClick={()=>{history.push("/tvshows")}} >Series</span>
                    <span id="movies" onClick = {()=>{history.push("/movies")}}>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                     <div className="search">
                        <input 
                            className={`input ${isActive ? "toggle" : null}` } 
                            type="text" 
                            placeholder="Titles, people, genres"
                            onChange={handleSearch}
                            // onBlur = {ToggleActive}
                            id="search"
                            ref={searchRef}
                        />
                        <SearchIcon className="search-icon" onClick={ToggleActive} />
                        <CloseIcon className="close-icon" style={isActive ? {visibility:"visible"} : {visibility:"hidden"}} onClick={ToggleActive}/>
                    </div>
                    {/* <SearchIcon className="icon"/> */}
                    {/* <span>KID</span> */}
                    <Notifications className="icon"/>
                    <img
                        onClick={()=>{history.push("/profile")}}
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Nav)
