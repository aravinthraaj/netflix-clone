import React from 'react'
import Nav from '../../Components/Nav'
import Banner from '../../Components/Banner'
import Row from '../../Components/Row'
import requests from '../../Requests'


function Movies() {
  return (
    <div className="movies">
      {/* Nav */}
      <Nav/>
      {/* <Featured/> */}
      {/* Banner */}
      <Banner category="movies"/>

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

    </div>
  )
}

export default Movies
