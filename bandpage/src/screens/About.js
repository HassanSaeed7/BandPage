import React from 'react'
import { Link } from 'react-router-dom';
import band from "../assets/6.webp"
import "../styles/About.css"


const About = () => {
    return (
            <>

            <Link to={"/"}> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" class="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg> </Link>


                <div class="container">
                <h2 className="about-title">About Us</h2>
                    <article>
                        Wake is an experimental post-rock group consisting of members:
                        <ul>
                            <li>Justin Lee (Guitar)</li>
                            <li>Daniel Lee (Bass)</li>
                            <li>Zach Edge (Drums)</li>
                        </ul>
                        Meeting in high school, the band members bonded over a passion for music production. During college, they decided to re-connect and decided to record a collaboration. Wake released an EP in 2016, <a href="https://waketheband.bandcamp.com/" target="_blank" rel="noreferrer">{`///`}</a>, a release which embodies a dreamlike saunter of string and percussion.
                    </article>
                    <img src={band} className="about-img" alt='band member'/>
                </div>
            </>

    )
}

export default About
