// parent of booklist
import BookList from "./BookList"
import Book from "./Book"
import Footer from "./Footer"

function Home() {


  return (
    <div className="home">
      <img id='landing-image' src="https://media.istockphoto.com/vectors/01open-book-and-creative-paper-airplanes-teamwork-paper-art-style-vector-id1189849703?k=20&m=1189849703&s=612x612&w=0&h=ViTOSts22Be3PJY0HD_2dLSF31VE5BgD0Sm7ZB96DQ8="/>

    <BookList />
    <Footer/>
    </div>
  )
}

export default Home
