import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
import Link from '../link'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <motion.span 
            initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.7}}>Alen Yeldho</motion.span>
            <Link/>
            <div className='socialmedia'>
                
                <a href='#'><img src='/instagram.png' alt=''/></a>
                <a href='#'><img src='/facebook.png' alt=''/></a>
            </div>
        </div>
    </div>
  )
}
