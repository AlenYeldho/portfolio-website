import React, { useRef } from 'react'
import "./portfolio.scss"
import{motion,useScroll,useSpring, useTransform}from "framer-motion"
const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Bringing dynamic and interactive web experiences to life using React.js. Elevate your online presence with a powerful and user-friendly e-commerce solution."
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://images.pexels.com/photos/4050405/pexels-photo-4050405.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Optimize your website's performance and SEO with Next.js. A seamless, server-rendered application for faster loading times and enhanced user experiences."
    },
    {
        id:3,
        title:"Vanila.js App Commerce",
        img:"https://images.pexels.com/photos/5430755/pexels-photo-5430755.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Crafting efficient and lightweight web applications with pure JavaScript. Delivering customized solutions tailored to your unique business needs."
    },
    {
        id:4,
        title:"Music app",
        img:"https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Transforming your ideas into harmonious digital experiences. Develop engaging music applications that captivate users and provide a seamless listening experience."
    }
];

const Single =({items})=>{
    const ref=useRef()
    const { scrollYProgress } = useScroll({ target: ref, 
        offset: ["end end", "start start"] });
    const y=useTransform(scrollYProgress,[0,1],["0%","15%"])
    return(
        <section ref={ref}>
           <div className='container'>
            <div className='wrapper'>
               <img src={items.img} alt=''/>
               <motion.div  className='textcontainer' style={{y}}>
                <h2 style={{y}}>{items.title}</h2>
                <p>{items.desc}</p>
                <button>See Demo</button>
               </motion.div>
            </div>
           </div>
        </section>
    )
}

 
function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio'id='Portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured works</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressbar'></motion.div>
            </div>
            {items.map((item) => (
                <Single items={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio