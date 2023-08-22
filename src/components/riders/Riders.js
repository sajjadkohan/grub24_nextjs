'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from "./riders.module.css"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

const Riders =  () => {
  const serchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const x = serchParams.get("x");
  // const x = 44;
  // router.push(`${pathName}?x=${x}`)

  useEffect(() => {

    setTimeout(() => {
      router.push(`${pathName}?x=${x}`)
    }, 3000);

  }, [])
  



  return (
    // <div style={{background:"#fff",paddingTop:"20px"}}>
    //   <div className='container'>
    //   <div className={styles.contTop}>
    //     <div>
    //       <h5>Why become a Grub24 courier <br /> partner? </h5>
    //       <p className={styles.p1}>
    //       Grub24 is a platform connecting customers, local businesses,
    //        and <br /> couriers looking for an opportunity to earn money in a flexible 
    //       </p>

    //       <button className={styles.bt1}>Apply now</button> 

    //       <span className={styles.s1}>100+</span>
    //       <span className={styles.s2}>Cvs received this month</span>
    //       <div className={styles.igg}>
    //         <div className={styles.imgCont}>
    //           <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img4.png"} />
    //         </div>

    //         <div className={styles.imgCont}>
    //           <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img3.png"} />
    //         </div>

    //         <div className={styles.imgCont}>
    //           <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img2.png"} />
    //         </div>

    //         <div className={styles.imgCont}>
    //           <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img1.png"} />
    //         </div>

    //         <div className={styles.imgCont}>
    //           <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/img5.png"} />
    //         </div>
    //       </div>

    //     </div>

    //     <div>
    //       <div className={styles.imgRight}>
    //         <Image alt='' fill src={"https://grub24.co.uk/assets/images/careers/tmpB680FC.png"} />
    //       </div>
    //     </div>
    //   </div>
      
    //   <div className={styles.contBottom}>
    //     <h2>Benefits</h2>
    //     <div className={styles.contBt}>
    //       <div className={styles.conIt}>
    //         <span>
    //         <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    //           <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    //             <rect x="0" y="0" width="24" height="24"></rect>
    //             <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" fill="#000000" opacity="0.3"></path>
    //             <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" fill="#000000"></path>
    //           </g>
    //         </svg>
    //         </span>
    //         <h4>
    //         Your vehicle, your time
    //         </h4>
    //         <p>
    //         Grab your car, bicycle, or motorbike. With Grub24,
    //          you choose: when to be online, where to deliver,
    //           how to deliver, who to deliver with. See below 
    //           to find out the requirements for each way of getting around.
    //         </p>
    //       </div>  

    //       <div className={styles.conIt}>
    //         <span>
    //           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    //             <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    //             <rect x="0" y="0" width="24" height="24"></rect>
    //             <path d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z" fill="#000000" opacity="0.3" transform="translate(11.500000, 12.000000) rotate(-345.000000) translate(-11.500000, -12.000000) "></path>
    //             <path d="M2,6 L21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 L2,18 C1.44771525,18 1,17.5522847 1,17 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M11.5,16 C13.709139,16 15.5,14.209139 15.5,12 C15.5,9.790861 13.709139,8 11.5,8 C9.290861,8 7.5,9.790861 7.5,12 C7.5,14.209139 9.290861,16 11.5,16 Z M11.5,14 C12.6045695,14 13.5,13.1045695 13.5,12 C13.5,10.8954305 12.6045695,10 11.5,10 C10.3954305,10 9.5,10.8954305 9.5,12 C9.5,13.1045695 10.3954305,14 11.5,14 Z" fill="#000000"></path>
    //             </g>
    //           </svg>
    //         </span>
    //         <h4>
    //         Your vehicle, your time
    //         </h4>
    //         <p>
    //         Grab your car, bicycle, or motorbike. With Grub24,
    //          you choose: when to be online, where to deliver,
    //           how to deliver, who to deliver with. See below 
    //           to find out the requirements for each way of getting around.
    //         </p>
    //       </div> 

    //       <div className={styles.conIt}>
    //         <span>
    //           <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    //             <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    //             <rect x="0" y="0" width="24" height="24"></rect>
    //             <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000"></path>
    //             </g>
    //           </svg>
    //         </span>
    //         <h4>
    //         Your vehicle, your time
    //         </h4>
    //         <p>
    //         Grab your car, bicycle, or motorbike. With Grub24,
    //          you choose: when to be online, where to deliver,
    //           how to deliver, who to deliver with. See below 
    //           to find out the requirements for each way of getting around.
    //         </p>
    //       </div> 
    //     </div>
    //   </div>
    //   </div>
    // </div>
    <div>
      rifdefwe
    </div>
  )
}

export default Riders