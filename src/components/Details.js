import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'

function Details() {
  let {id}=useParams();
  const [filtered,setFiltered]=useState([])
  useEffect (()=>{
    fetch(`http://localhost:8002/books/${id}`)
    .then ((res)=>res.json())
    .then ((book)=>setFiltered(book))
    console.log (filtered.Author)
  },[])
  return (
    <>

    <div className='card-des'>
      <img src={filtered.image} alt="Book Image"/>
      <h2 style={{color:'red'}}>TITLE :  {filtered.title}</h2>
      <h3>AUTHOR :   {filtered.Author}</h3>
      <h4>PUBLISHED :  {filtered.Year}</h4>
      <h4>Description :</h4>
      <p>{filtered.Description}</p>
    </div>

    <Footer/>
    </>
  )
}

export default Details
