import React from 'react'
import styles from "./about.module.css"
import Sec1 from './Sec1'
import Sec3 from './Sec3'

const ViewAbout = () => {
  return (
    <div>
        <div className={styles.contImgAbout}></div>
        <div className={`container`}>
            <p className={styles.el1}>
            Welcome to Grub24, your ultimate solution to satisfy 
            those hunger pangs with a simple click. With a vast 
            selection of restaurants offering food delivery, 
            a wide range of cuisines, and an extensive menu of 
            delectable dishes, it can be overwhelming to decide what to order. 
            But fear not, as Grub24 is here to guide you through the process effortlessly. 
            We bring you the finest dining experiences, right to your doorstep.
            </p>

            <Sec1 />
            <Sec3 />
        </div>
    </div>
  )
}

export default ViewAbout