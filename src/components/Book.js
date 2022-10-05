// REnder each book here 
import React from 'react'

function Book({image,title,desription,year,author}) {
  
    // console.log (year)
    
  return (
    
    <>
      <div className='card'>
      <img src={image} alt="Book Image"/>
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>{year}</p>
      <button>Read Descrition</button>
      </div>
    </>

    
  )
  
}


export default Book
