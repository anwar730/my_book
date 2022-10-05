
import React, {useEffect, useState } from 'react'


function ReadingList() {
  const [image,setImage]=useState('')
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [year,setYear]=useState('')

  const [readingList,setReadingList]=useState([])
  useEffect (()=>{
    fetch ('http://localhost:8002/ReadingList')
    .then ((res)=>res.json())
    .then ((data)=>setReadingList (data))

  },[])

  const list = readingList.map((readingBook)=>{
        return (
          <div className='card'>
            <img src={readingBook.image} alt="Book Image"/>
            <h2>TITLE :  {readingBook.title}</h2>
            <h3>AUTHOR: {readingBook.Author}</h3>
            <h4>PUBLISHED :{readingBook.Year}</h4>
            <button id='card-btn'>Done Reading</button>
            </div>)})


  return (
    
    <div>
      
      <div id='form' className='car'>
        
        <form>
          
          <input type='text' value={image} placeholder ='Enter Image URL' /><br/>
          
          <input type='text' value={title} placeholder='Enter Title Here'/><br/>
          <input type ='text' value={author} placeholder ='Enter Author Here' /><br/>
          <input type='text ' valuue={year} placeholder='Enter publication date' /><br/>
          <button type='submit' id='form-btn'>Add Book</button>
          </form>
      </div>

      <h2 id ="reading-header">My Reading List</h2>
      <div className='parent'>
      {list}
      </div>
      

      
          

       
    </div>
  )
}

export default ReadingList
