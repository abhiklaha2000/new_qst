import React from 'react'
import Hero from '../sections/Hero'
// import Benefits from '../sections/Benefits'
import Roadmap from '../sections/Roadmap'
import Footer from '../components/Footer'
import TestimonialComponent from '../components/TestimonialComponent'
import Services from '../sections/Benefits'
import Team from '../components/Team'
import ServiceOffer from '../components/ServiceOffer'

const Home = () => {
    return (
        <div>

            <Hero />
         <ServiceOffer/>
            <TestimonialComponent/>
            <Team />
            {/*<Services />*/}
            {/* <Collaboration /> */}
            {/* <Services /> */}
            {/* <Pricing /> */}
            {/* <Roadmap /> */}
           
        </div>
    )
}

export default Home