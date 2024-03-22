import React from 'react'
import MovieNabar from '../Movie/MovieNabar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function MovieLayout() {
  return (
   <>
    <MovieNabar/>
   <Outlet></Outlet>
   <Footer/>
   </>
  )
}
