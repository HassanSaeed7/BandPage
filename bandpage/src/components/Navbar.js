import React from 'react'
import Wake from "../wake.png"
import Wakemusic from "../wakemusic.png"
import About from "../about.png"
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
           
                {/* <img src={Wake} alt="this is the band logo." className="poster"/> */}
           <h1>WAKE</h1>

            <div className="navbar-links">
             
                   <a href="https://waketheband.bandcamp.com/releases" target="_blank" rel="noreferrer">
                    BANDCAMP
                   </a>
                   <Link to={`/about`}> ABOUT </Link>
                   {/* <Link to={`/about`}> <img src={About} alt="Music" /> </Link> */}
                 {/* <img src={Wakemusic} alt="Music" /> */}
              
            </div>
            
        </div>
    )
}

export default Navbar
