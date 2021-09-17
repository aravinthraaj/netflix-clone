import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router';
import './Nav.scss'
import { useDispatch,useSelector } from "react-redux";
import { selectCategory, setCategory } from '../../../Trash/categorySlice';
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Nav() {
    const [show,hanldeShow] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);

    console.log(category)

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
    const handleClick = (e) => {
        dispatch(setCategory(e.target.id))
        console.log(e.target.id)
    }
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="container">
                <div className="left">
                    <img
                        onClick={()=>{history.push("/")}} 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt=""
                    />
                    <span id="home" onClick = {handleClick}>Homepage</span>
                    <span id="series" onClick = {handleClick}>Series</span>
                    <span id="movies" onClick = {handleClick}>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KID</span>
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

export default Nav
