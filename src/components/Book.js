// REnder each book here 
import React from 'react'
import { NavLink } from 'react-router-dom'

function Book({image,title,desription,year,author,id}) {
  
    // console.log (year)
    
  return (
    
    <>
      <div className='card'>
      <img src={image} alt="Book Image"/>
      <h2>TITLE :  {title}</h2>
      <h3>AUTHOR: {author}</h3>
      <h4>PUBLISHED :{year}</h4>
      <NavLink to={`/`+ id} ><button id='card-btn'>Read Description</button></NavLink>
      </div>
    </>

    
  )
  
}


export default Book
