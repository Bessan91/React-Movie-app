import React from 'react'
import style from'./Header.css'
export default function Header({title ,descrption ,hieght }) {
  return (
   <>
   <div>

  
   {/* its a backtik  to use a spesafic style */}
   <div className="header  d-flex justify-content-center align-items-center text-center text-white" style={{height:hieght+"vh"}}> 
  
    <div className='header_content w-50 m-auto'>
      <h1>{title}</h1>
       {descrption!==""?<p className='mt-5'>{descrption} </p>:<></>} 
    </div>
    </div>
   </div>
   </>
  )
}
