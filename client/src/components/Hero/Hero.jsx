import React from 'react'
import "./Hero.css"
import CountUp from "react-countup"
import { motion } from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar'

function hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="flexColStart hero-left">
                
                <div className="hero-title">
                    <div className="orange-circle"/>

                    <motion.h1
                     initial = {{y: "2rem", opacity: 0}}
                     animate = {{y: 0, opacity: 1}}  
                     transition={{
                        duration: 2,
                        type: "spring"
                     }} >
                        Find Your <br/> Most Suitable <br/> Property
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className="secondaryText">Find a variety of properties that suit you very easily.</span>
                    <span className="secondaryText">Forget all difficulties in finding a residence for you.</span>
                </div>

                <SearchBar/>
                
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1450} end={1500} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Our Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={28}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Award Wining</span>
                    </div>

                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div
                    initial = {{x: "7rem", opacity: 0}}
                    animate = {{x:0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    className="image-container">

                    <img src="./hero-image.jpg" alt=""/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default hero
