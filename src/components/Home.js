// parent of booklist
import BookList from "./BookList"

import Footer from "./Footer"

function Home() {


  return (
    <div className="home">
      <div  className="image-container">
        <div className="image-header">
        <h3>Readers are Leaders ...</h3>
       
        </div>
      </div>
      {/* <img id='landing-image' src='https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg'/> */}

    <BookList />
    <Footer/>
    </div>
  )
}

export default Home
