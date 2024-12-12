import React from 'react'
import "./contact.scss"
import {motion} from "framer-motion"
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            staggerChildren: 0.1, 

        }
    }
}

function Contact() {
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className='textcontainer'variants={variants} >
             <motion.h1 variants={variants} >Let's work together</motion.h1>
             <motion.div variants={variants} className='item'>
                <h2>Mail</h2>
                <span>client@react.dev</span>
             </motion.div>
             <motion.div variants={variants}  className='item'>
                <h2>Address</h2>
                <span>kuruppampady P.O,Pralayakad</span>
                </motion.div>
             <motion.div variants={variants} className='item'>
                <h2>Phone</h2>
                <span>+91 8462167287</span>
             </motion.div>
        </motion.div>
        <div className='formcontainer'>
            <motion.div className='phonesvg' initial={{opacity:1}}whileInView={{opacity:0}} transition={{duration:1,delay:3}}>
            <svg height="450" width="450" viewBox="0 0 35.666 35.666">
                < motion.path
                initial={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration:3}}
                 strokeWidth={0.2}
                 fill="none"
                 d="M 28.189 16.504 h -1.666 c 0 -5.437 -4.422 -9.858 -9.856 -9.858 l -0.001 -1.664 C 23.021 4.979 28.189 10.149 28.189 16.504 Z M 16.666 7.856 L 16.665 9.52 c 3.853 0 6.983 3.133 6.981 6.983 l 1.666 -0.001 C 25.312 11.735 21.436 7.856 16.666 7.856 Z M 16.333 0 C 7.326 0 0 7.326 0 16.334 c 0 9.006 7.326 16.332 16.333 16.332 c 0.557 0 1.007 -0.45 1.007 -1.006 c 0 -0.559 -0.45 -1.01 -1.007 -1.01 c -7.896 0 -14.318 -6.424 -14.318 -14.316 c 0 -7.896 6.422 -14.319 14.318 -14.319 c 7.896 0 14.317 6.424 14.317 14.319 c 0 3.299 -1.756 6.568 -4.269 7.954 c -0.913 0.502 -1.903 0.751 -2.959 0.761 c 0.634 -0.377 1.183 -0.887 1.591 -1.529 c 0.08 -0.121 0.186 -0.228 0.238 -0.359 c 0.328 -0.789 0.357 -1.684 0.555 -2.518 c 0.243 -1.064 -4.658 -3.143 -5.084 -1.814 c -0.154 0.492 -0.39 2.048 -0.699 2.458 c -0.275 0.366 -0.953 0.192 -1.377 -0.168 c -1.117 -0.952 -2.364 -2.351 -3.458 -3.457 l 0.002 -0.001 c -0.028 -0.029 -0.062 -0.061 -0.092 -0.092 c -0.031 -0.029 -0.062 -0.062 -0.093 -0.092 v 0.002 c -1.106 -1.096 -2.506 -2.34 -3.457 -3.459 c -0.36 -0.424 -0.534 -1.102 -0.168 -1.377 c 0.41 -0.311 1.966 -0.543 2.458 -0.699 c 1.326 -0.424 -0.75 -5.328 -1.816 -5.084 c -0.832 0.195 -1.727 0.227 -2.516 0.553 c -0.134 0.057 -0.238 0.16 -0.359 0.24 c -2.799 1.774 -3.16 6.082 -0.428 9.292 c 1.041 1.228 2.127 2.416 3.245 3.576 l -0.006 0.004 c 0.031 0.031 0.063 0.06 0.095 0.09 c 0.03 0.031 0.059 0.062 0.088 0.095 l 0.006 -0.006 c 1.16 1.118 2.535 2.765 4.769 4.255 c 4.703 3.141 8.312 2.264 10.438 1.098 c 3.67 -2.021 5.312 -6.338 5.312 -9.719 C 32.666 7.326 25.339 0 16.333 0 Z"
                />
            </svg>
            </motion.div>
            
           <motion.form initial={{opacity:0}}whileInView={{opacity:1}} transition={{duration:1,delay:4}}>
            <input type='text' required placeholder='Name'/>
            <input type='text' required placeholder='Email'/>
            <textarea rows={8} placeholder='Message'/>
            <button>Submit</button>
           </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact;