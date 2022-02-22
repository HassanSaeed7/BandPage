import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Player from '../components/Player'

const Home = () => {
    return (
        <>
            <Navbar />
            <Player />
             <Carousel />
            <Footer />
        </>
    )
}

export default Home
