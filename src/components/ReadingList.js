
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
    fetch ('https://anwar-json-books.herokuapp.com/ReadingList')
    .then ((res) =>res.json())
    .then ((data) => setReadingList(data))

  },[])
  // console.log (readingList)
  
  function handleDelete (id){

    fetch (`https://anwar-json-books.herokuapp.com/ReadingList/${id}`,{
      method :'DELETE'
    })
       const filter= readingList.filter((list) => list.id !== id)

    setReadingList(filter);
  }

  const list = readingList.map((readingBook)=>{  
            

        return (
          <>
         
          <div className='card'>
            <img src={readingBook.image} alt="Book Image"/>
            <h2>TITLE :  {readingBook.title}</h2>
            <h3>AUTHOR: {readingBook.Author}</h3>
            <h4>PUBLISHED :{readingBook.Year}</h4>
            <button id='card-btn' style={{background:'green'}} onClick={() => handleDelete(readingBook.id)}>Done Reading 
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
      fetch ('https://anwar-json-books.herokuapp.com/ReadingList',{
        method : 'POST',
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
      })
      .then ((res)=>res.json())
      .then ((data)=> setReadingList([...readingList, data]))
      setAuthor("")
      setImage("")
      setTitle("")
      setYear("")
  }
  return (
    
    <div>
      
      <div id='form' className='form-card'>
        
        <form onSubmit={handleSubmit}>
          
          <input type='text'  id ='image' value ={image}placeholder ='Enter Image URL' onChange ={handleChange}/><br/>
          <input type='text' id='title' value={title}  placeholder='Enter Title Here' onChange ={handleChange}/><br/>
          <input type ='text' id='author' value={Author} placeholder ='Enter Author Here' onChange ={handleChange}/><br/>
          <input type='text ' id ='date' value={Year} placeholder='Enter publication date'onChange ={handleChange} /><br/>
          <button type='submit' id='form-btn'>Add Book</button>
          </form>
      </div>

      <h1 id ="reading-header">MY READING LIST</h1>
      <hr style={{width:270}}/>
      <div className='parent'>
      {list}
      </div>

      <Footer/>
      

      
          

       
    </div>
  )
}

export default ReadingList
