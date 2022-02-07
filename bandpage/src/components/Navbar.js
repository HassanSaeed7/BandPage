import React from 'react'
import Wake from "../wake.png"
import Wakemusic from "../wakemusic.png"
import About from "../about.png"
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
           
                <img src={Wake} alt="this is the band logo." className="poster"/>
           

            <div className="navbar-links">
             
                   <a href="https://waketheband.bandcamp.com/releases" target="_blank" rel="noreferrer">
                   <img src={Wakemusic} alt="Music" />
                   </a>
                   
                   <Link to={`/about`}> <img src={About} alt="Music" /> </Link>
                
              
            </div>
            
        </div>
    )
}

export default Navbar
