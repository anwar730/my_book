// Take array of books here and pss to book.js
import React,{useState,useEffect} from 'react'
import Book from "./Book"


function BookList() {
  const [books,setBooks]=useState([])
  
  useEffect (()=>{
    fetch ('http://localhost:8002/books')
    .then ((res)=>res.json())
    .then ((data)=>setBooks(data))
  },[])

const bookList = books.map ((book)=>{
  return (
    <>
    
     <Book key={book.id} image={book.image} title={book.title} desription={book.Desription} year={book.Year} author={book.Author} id={book.id} />
    </> 
    )
    })
    
  return (
    <>
    <h3 id ='discover'>DISCOVER YOUR NEXT BOOK</h3>
    <div className='parent'>
      
        {bookList}
      </div>
    
    </>
  )
}

export default BookList

