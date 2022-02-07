import React from 'react'
import { Link } from 'react-router-dom';
import one from "../1.jpg";
import two from "../2.jpg";
import three from "../3.jpg";

import five from "../5.jpg";
import band from "../6.jpg"
import us from "../us.png"
import "../styles/About.css"


const About = () => {
    return (
        <>
        <Link to={`/`}> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" class="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg> </Link>
        
            <img src={us} className="about-title"/>
            <div className="about-container">

            <div className="about-left">
            <img src={band} className="about-img"/>
          
            

            </div>
            <div className="about-right">
            <blockquote><strong>chuckles</strong> What are you doing dude? <br></br>- Matt Kim, Vocals</blockquote> 
            
           <blockquote><strong>plays guitar for 30 minutes</strong> <br></br>Oh shit haha that was tight. Yo, where's Zach? - Justin Lee, Guitar</blockquote> 

            <blockquote>About US? Yeah. We're all about faith and stuff. We play guitars. Yo have you seen my vape? Oh nvm, its in my hands hahaha. So yeah. Our homie Zach is a part of the gang but he never takes pics with us. He's living in Wyoming now, I think. Anyways, check out our jams. - Daniel Lee, Bass Guitar</blockquote>
            
            <p>Zach could not be reached for comment. Drums</p></div>
        </div>
        </>
    )
}

export default About
