import './App.scss';
import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (<Router>
    <Routes>
    <Route exact path="/" element = { <Home />}/>


      <Route exact path="/wordDoc" element = { <Home type = "wordDoc"/>}/>
    <Route exact path="/whiteboard" element = { <Home type = "whiteBoard"/>}/>
    <Route exact path="/watch" element = { <Watch/>}/>

    
    

    </Routes>
    
     

  </Router>)
}

export default App;
