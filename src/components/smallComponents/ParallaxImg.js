'use client';
import React from 'react'
import styles from '../../styles/smallComponents/ParallaxImg.module.css';
import image1 from '../../images/backForHome.webp'
import { Parallax, Background } from "react-parallax";
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const ParallaxImg = () => {
  return (
  <div className={styles.container}>
    <Parallax bgImage={image1.src} bgClassName={styles.bgParallax} strength={300}>
      <div style={{ height: '53vw' }}>
        
      </div>
    </Parallax>
  </div>
  )
}

export default ParallaxImg
