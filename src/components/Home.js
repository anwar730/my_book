// parent of booklist
import BookList from "./BookList"
import Book from "./Book"
import Footer from "./Footer"

function Home() {


  return (
    <div className="home">
      <img id='landing-image' src='https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg'/>

    <BookList />
    <Footer/>
    </div>
  )
}

export default Home
