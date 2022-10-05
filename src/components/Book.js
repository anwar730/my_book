// REnder each book here 
import React from 'react'

function Book({image,title,desription,year,author}) {
  
    // console.log (year)
    
  return (
    
    <>
      <div className='card'>
      <img src={image} alt="Book Image"/>
      <h2>TITLE :  {title}</h2>
      <h3>AUTHOR: {author}</h3>
      <h4>PUBLISHED :{year}</h4>
      <button id='card-btn'>Done Reading</button>
      </div>
    </>

    
  )
  
}


export default Book
