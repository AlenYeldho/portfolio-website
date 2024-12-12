import React, { useRef } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const ref2 = useRef();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start start", "end start"]
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); 
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const ytext2 = useTransform(scrollYProgress2, [0, 1], ["0%", "500%"]);
  const yBg2 = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);

  return (
    <div className='parallax' style={{ background: type === "service" ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg,#111132,#505064)" }}>
      <motion.h1 style={{ y: type === "service" ? ytext : ytext2 }}>
        {type === "service" ? "What We Do ?" : "What We Did ?"}
      </motion.h1>
      <motion.div className='mountains' ref={ref}></motion.div>
      <motion.div
        className='planets'
        ref={type === "service" ? null : ref2}
        style={{
          y: type === "service" ? yBg : yBg2
          }}></motion.div>
      <motion.div style={{ x: xBg }} className='stars' ref={ref}></motion.div>
    </div>
  );
}
