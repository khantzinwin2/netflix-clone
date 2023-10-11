import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from '../requests';
import axios from "axios"

const Banner = () => {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(true);



    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchingTrend);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
        }
        fetchData();
        const showBanner = ()=>{
            if(movies?.overview!= undefined || movies?.overview!= null){
                setShow(true)
            }
        }

    },[])


   
    console.log(movies)
    const trucate = (string, n) =>{
        if(movies?.overview!= undefined || movies?.overview!= null){
            return string?.length > n ? string.substring(0, n-1) + "..." : string;
        }
    }
  return (
    
    <div className=' banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
    }}>
        <div className="banner-contents">
            <h1 className=' banner-header'>{movies?.original_title|| movies?.title
 }</h1>
            <button >Play</button>
            <button className=' ms-3'>My List</button>
            <p>
                {trucate(`${show && movies?.overview}`,150)}
            </p>
        </div>
        <div className="banner-footer"/>
    </div>
  )
}

export default Banner