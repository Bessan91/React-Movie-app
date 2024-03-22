import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import  MovieStyle from '../Movie/MovieStyle.css'
import axios from 'axios'
export default function Movie() {
  let [movies,setMovies]=useState([]);
  async function getTrending ()
  {
let {data}=await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ba1ee804a3ac23307f3d7704641a1c99');
setMovies(data.results);
  }
useEffect(()=>{
  getTrending()
},[])
  return (
    <>
    <div className='movie_header movieTitle'>
     <Header 
   title='Tranding Movie '
   descrption =''
   hieght="75"
   />
   <div className='movie_header container mt-4 mb-2 '>
   <h1 className='text-center text-white '>Movies</h1>
   <div className='row'>
    {movies.map((movie,index)=>{
      return   <div className='col-md-3 'key={index}>
      <div className="card p-2 mb-2 d-flex justify-content-center text-center">
        <img src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt={movie.overview} />
        <h3>{movie.title}</h3>
        <p className='  mt-2 bg-danger position-absolute top-0 end-0 text-white h-20'>Vote {movie.vote_average}</p>
      </div>
    </div> 
    })}
   
   </div>
   </div>
   </div>
    </>
  )
}
