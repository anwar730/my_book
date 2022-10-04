import React from "react"
import './App.css';
import NavBar from "./components/NavBar";
import { Routes ,Route } from "react-router-dom";
import About from "./components/About"
import ReadingList from "./components/ReadingList"
import Home from './components/Home'


// Render nabv bar and home here and inside nav bar render nav links and inside NAv link render its compponent 

function App() {
  return (
     <div>
     <NavBar/>
    <Routes>

        <Route  path="/home" element={<Home />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path ='/ReadingList' element={<ReadingList/>}/>

    </Routes>
    </div>
  );
}

export default App;
