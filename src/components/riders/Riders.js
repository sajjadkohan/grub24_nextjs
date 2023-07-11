import Image from 'next/image'
import React from 'react'
import styles from "./riders.module.css"

const Riders = () => {
  return (
    <div style={{background:"#fff",paddingTop:"20px"}}>
      <div className='container'>
      <div className={styles.contTop}>
        <div>
          <h5>Why become a Grub24 courier <br /> partner? </h5>
          <p className={styles.p1}>
          Grub24 is a platform connecting customers, local businesses,
           and <br /> couriers looking for an opportunity to earn money in a flexible 
          </p>

          <button className={styles.bt1}>Apply now</button> 

          <span className={styles.s1}>100+</span>
          <span className={styles.s2}>Cvs received this month</span>
          <div className={styles.igg}>
            <div className={styles.imgCont}>
              <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img4.png"} />
            </div>

            <div className={styles.imgCont}>
              <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img3.png"} />
            </div>

            <div className={styles.imgCont}>
              <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img2.png"} />
            </div>

            <div className={styles.imgCont}>
              <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img1.png"} />
            </div>

            <div className={styles.imgCont}>
              <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img5.png"} />
            </div>
          </div>

        </div>

        <div>
          <div className={styles.imgRight}>
            <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/tmpB680FC.png"} />
          </div>
        </div>
      </div>
      
      <div className={styles.contBottom}>
        <h2>Benefits</h2>
        <div className={styles.contBt}>
          <div className={styles.conIt}>
            <span></span>
            <h4>
            Your vehicle, your time
            </h4>
            <p>
            Grab your car, bicycle, or motorbike. With Grub24,
             you choose: when to be online, where to deliver,
              how to deliver, who to deliver with. See below 
              to find out the requirements for each way of getting around.
            </p>
          </div>  

          <div className={styles.conIt}>
            <span></span>
            <h4>
            Your vehicle, your time
            </h4>
            <p>
            Grab your car, bicycle, or motorbike. With Grub24,
             you choose: when to be online, where to deliver,
              how to deliver, who to deliver with. See below 
              to find out the requirements for each way of getting around.
            </p>
          </div> 

          <div className={styles.conIt}>
            <span></span>
            <h4>
            Your vehicle, your time
            </h4>
            <p>
            Grab your car, bicycle, or motorbike. With Grub24,
             you choose: when to be online, where to deliver,
              how to deliver, who to deliver with. See below 
              to find out the requirements for each way of getting around.
            </p>
          </div> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default Riders