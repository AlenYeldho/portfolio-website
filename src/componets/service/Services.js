import React, { useRef } from 'react'
import {motion,useInView} from "framer-motion"
import "./Services.scss"
const variants={
    initial:{
        x:-500,
        y:0,
        opasity:0
    },
    animate:{
        x:0,
        opasity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        }
    }
}

function Services() {
    const ref=useRef()
    const isInView=useInView(ref,{margin:"-300px"})
  return (
    <motion.div className='service' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}//whileInView="animate"
    >
    <motion.div className='textcontainer'>
        <p><i>I focus on helping your brand grow<br/>and move forward</i></p>
        <hr/>
    </motion.div>
    <motion.div className='titlecontainer'variants={variants}>
        <div className='title'>
             <img src='./people.webp' alt=''/>
             <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
        </div>
        <div className='title'>
             <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Bisuness.</h1>
             <button>What We Do ?</button>
        </div>
    </motion.div>
    <motion.div className='listcontainer'variants={variants}>
    <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
            <h2>Striking Web Designs</h2>
            <div className='textbox'>
            <p>Elevate your brand with visually stunning websites that leave a lasting impression. I specialize in creating captivating designs that seamlessly blend aesthetics with functionality.
            </p>
            </div>
            
            <button>Go</button>
            </motion.div>
        <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
            <h2>Responsive Web Development</h2>
            <div className='textbox'>
            <p>Ensure a flawless user experience on every device. As a web developer, I prioritize responsive design, guaranteeing that your website looks and performs seamlessly across desktops, tablets, and smartphones.
            </p>
            </div>
            
            <button>Go</button>
        </motion.div>
        <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
            <h2>Tech-Driven Solutions</h2>
            <div className='textbox'>
            <p> Leverage the power of cutting-edge technologies. From React and Next.js to vanilla JavaScript, I bring a tech-savvy approach to web development, ensuring your site is not just modern but also future-proof.
            </p>
            </div>
            
            <button>Go</button>
            </motion.div>
        <motion.div className='box'whileHover={{background:"lightgray",color:"black"}}>
            <h2>Collaborative Development Process</h2>
            <div className='textbox'>
            <p>Experience a collaborative journey from concept to creation. I work closely with clients, understanding their unique needs and translating them into efficient, tailored solutions.
            </p>
            </div>
            
            <button>Go</button>
            </motion.div>
    </motion.div>

    </motion.div>
  )
}

export default Services