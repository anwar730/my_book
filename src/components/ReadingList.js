
import React, {useEffect, useState } from 'react'


function ReadingList() {
  const [image,setImage]=useState('')
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [year,setYear]=useState('')

  const [readingList,setReadingList]=useState([])



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
    </div>
  )
}

export default ReadingList
