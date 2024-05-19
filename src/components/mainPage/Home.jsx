import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import './Home.css'

const Home = ({MobileState}) => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
            <Categories MobileState={MobileState}/>
            <Slider/>
        </div>
      </section>
    </>
  )
}

export default Home