import React from 'react'
import { Link } from 'react-router-dom';
import five from "../assets/10.webp";
import band from "../assets/6.webp"
import seven from "../assets/7.webp"
import "../styles/About.css"


const About = () => {
    return (
            <div class="container"> 
                        
            <Link to={"/"}> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" class="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg> </Link>
            <h2 className="about-title">About Us</h2>
           
                <div class="area one"> 
                    <img src={band} className="about-img" alt='band member'/>
                    <blockquote><strong>chuckles</strong><br></br> What are you doing dude? <br></br>- Matt Kim, Vocals</blockquote> 
                </div>

                <div class="area two">
                    <blockquote><strong>plays guitar for 30 minutes</strong> <br></br>Oh shit haha that was tight. Yo, where's Zach? <br></br> - Justin Lee, Guitar</blockquote> 
                    <img src={seven} className="about-img" alt='band member'/>
                </div>

                <div class="area three">
                    <img src={five} className="about-img" alt='band member'/>
                    <blockquote>About US? Yeah. We're all about faith and stuff. We play guitars. Yo have you seen my vape? Oh nvm, its in my hands hahaha. So yeah. Our homie Zach is a part of the gang but he never takes pics with us. He's living in Wyoming now, I think. Anyways, check out our jams.<br></br> - Daniel Lee, Bass Guitar</blockquote>
                </div>

                <div class="area four">
                    <p>Bro, you listen to djent? ;) <br></br> -Zach, Drums</p>
                    <img src={band} className="about-img" alt='band member'/>
                </div>
            </div>
 
    )
}

export default About
