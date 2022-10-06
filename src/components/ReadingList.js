
import React, {useEffect, useState } from 'react'
import Footer from "./Footer"
import {FaCheck} from "react-icons/fa"


function ReadingList() {
  const [image,setImage]=useState('')
  const [title,setTitle]=useState('')
  const [Author,setAuthor]=useState('')
  const [Year,setYear]=useState('')

  const [readingList,setReadingList]=useState([])

  useEffect (()=>{
    fetch ('http://localhost:8002/ReadingList')
    .then ((res)=>res.json())
    .then ((data)=>setReadingList (data))

  },[])
  
  

  const list = readingList.map((readingBook)=>{ 
            

        return (
          <>
          
          <div className='card'>
            <img src={readingBook.image} alt="Book Image"/>
            <h2>TITLE :  {readingBook.title}</h2>
            <h3>AUTHOR: {readingBook.Author}</h3>
            <h4>PUBLISHED :{readingBook.Year}</h4>
            <button id='card-btn' style={{background:'green'}}>Done Reading 
            <FaCheck style={{paddingLeft:10}}/>
            </button>
            </div>
            </>
            )

            })

  function handleChange(e){
    if (e.target.id==='title'){
      setTitle (e.target.value)
      // console.log (title)
    }
    else if (e.target.id === 'image'){
      setImage(e.target.value)
      // console.log (image)
    }
    else if (e.target.id==='author'){
      setAuthor (e.target.value)
      // console.log (author)
    }
    else if(e.target.id==='date'){
      setYear (e.target.value)
      // console.log (year)
    }
   
    
  }


  function handleSubmit (e){
    e.preventDefault()
    const formData ={
      image,
      title,
      Author,
      Year
    }
      fetch ('http://localhost:8002/ReadingList',{
        method : 'POST',
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
      })
      .then ((res)=>res.json())
      .then ((data)=>console.log (data))
    
  }
  return (
    
    <div>
      
      <div id='form' className='car'>
        
        <form onSubmit={handleSubmit}>
          
          <input type='text'  id ='image' value ={image}placeholder ='Enter Image URL' onChange ={handleChange}/><br/>
          <input type='text' id='title' value={title}  placeholder='Enter Title Here' onChange ={handleChange}/><br/>
          <input type ='text' id='author' value={Author} placeholder ='Enter Author Here' onChange ={handleChange}/><br/>
          <input type='text ' id ='date' value={Year} placeholder='Enter publication date'onChange ={handleChange} /><br/>
          <button type='submit' id='form-btn'>Add Book</button>
          </form>
      </div>

      <h1 id ="reading-header">MY READING LIST</h1>
      <div className='parent'>
      {list}
      </div>

      <Footer/>
      

      
          

       
    </div>
  )
}

export default ReadingList
