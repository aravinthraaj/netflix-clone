import React from 'react';
import Nav from '../Components/Nav';
import Banner from '../Components/Banner'
import Row from '../Components/Row';
import { useSelector } from "react-redux";
import { selectCategory } from '../features/user/userSlice';
import './HomeScreen.scss'
import requests from '../Requests';
import Footer from '../Components/Footer/Footer';

function HomeScreen() {
    const category = useSelector(selectCategory);
    

    return (
        <div className="homeScreen">
            {/* Nav */}
            {/* <Nav/> */}
            {/* <Featured/> */}
            {/* Banner */}
            <Banner category={category}/>

            {/* Row */}
            
            <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixoriginals}
            isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

            <Footer/>
        </div>
    )
}

export default HomeScreen
