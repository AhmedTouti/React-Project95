
import React from 'react'
import Contact from './Contact';
import Navigation from './Navigation';
import Slyder from './Slyder';




const Home = (props) => {
    return (<>
        <Navigation />
        //TODO fill gym info 'about section'
        <Slyder id='about' />
        
        <Contact/>




    </>);
}

export default Home