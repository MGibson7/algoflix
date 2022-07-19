import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return() => window.onscroll = null
  };
  return (
    <div className = {isScrolled ? "navbar scrolled" : "navbar" }>
        <div className="container">
            <div className="left">
                
                <Link to ="/" className="link">
                <h3>ALGOFLIX</h3>
                </Link>
                

            </div>
            
            

        </div>


    </div>
  )
}

export default Navbar