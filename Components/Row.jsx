import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from 'axios'
import requests from '../requests'

const Row = ({title,fetchUrl,isLargeRow=false,id}) => {


  const [movies,setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  },[fetchUrl])

 

  // const itemA = document.getElementsByClassName("a")[0];
  // if(itemA){
  //   itemA.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemA.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemB = document.getElementsByClassName("b")[0];
  // if(itemB){
  //   itemB.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemB.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemC = document.getElementsByClassName("c")[0];
  // if(itemC){
  //   itemC.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemC.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemD = document.getElementsByClassName("d")[0];
  // if(itemD){
  //   itemD.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemD.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemE = document.getElementsByClassName("e")[0];
  // if(itemE){
  //   itemE.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemE.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemF = document.getElementsByClassName("f")[0];
  // if(itemF){
  //   itemF.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemF.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  // const itemG = document.getElementsByClassName("g")[0];
  // if(itemG){
  //   itemG.addEventListener("wheel",(e)=>{
  //     e.preventDefault();

  //     itemG.scrollLeft += e.deltaY /10;
   
  //   })
  // }
    
  
  

  return (
    <div className=' row container'>
      <h1 className='title'>{title}</h1>
        <div className={`rows_poster ${id} snap_inline`}>
          {movies.map((movie)=>{
            if(movie.backdrop_path!= null && movie.poster_path!= null){
              return <img key={movie.id} className={` row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ?movie.poster_path :movie.backdrop_path}`} alt={movie.name} />
            }
          })}
        </div>
    </div>
  )
}

export default Row