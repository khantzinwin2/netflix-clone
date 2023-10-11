import React from 'react'
import Row from '../Components/Row'
import Banner from '../Components/Banner'
import Nav from '../Components/Nav'
import requests from '../requests'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
         <Nav/>
      <Banner/> 
      <Row title={"Netflix Origin"} id={"a"} isLargeRow fetchUrl={requests.fetchNetflixOrigin}/>
      <Row title={"Top Rated"}  id={"b"} fetchUrl={requests.fetchTopRated}/>
      <Row title={"Action "}  id={"c"} fetchUrl={requests.fetchActionMovies}/>
      <Row title={"Horror"}  id={"d"} fetchUrl={requests.fetchHorrorMovies}/>
      <Row title={"Romance"}  id={"e"} fetchUrl={requests.fetchRomanceMovies}/>
      <Row title={"Comedy"}  id={"f"} fetchUrl={requests.fetchComedyMovies}/>
      <Row title={"Documentaries"}  id={"g"} fetchUrl={requests.fetchDocumentryMovies}/>
    </div>
  )
}

export default HomeScreen