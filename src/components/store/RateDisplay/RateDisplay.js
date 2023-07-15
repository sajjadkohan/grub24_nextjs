'use client';
import React, { useState } from 'react'
import styles from '@/components/store/MerchantDetail.module.css';
import Image from 'next/image';
import rateGif from '@/../../public/images/rate5.gif';

const RateDisplay = () => {
  const[favourite,setFavourite] = useState(true);

  const toggleFavourite = () => {
    setFavourite(!favourite);
    console.log(favourite);
  }

  return (
    <div className={styles.rateDisplay+' '+'mt40 dflex algCenter'}>
        <span className={styles.gifParent}><Image alt='hearh gif' className={styles.gif} width={55} height={45} src={rateGif} /></span>
        <span className={styles.rateValue+' '+'ml20 roboto300'}>3.4</span>
        <span className={styles.text+' '+'ml20 roboto300'}>out of 5</span>
        <button onClick={toggleFavourite} className={favourite? `${styles.favButton} ${styles.active} dFlexProMax ml20` : `${styles.favButton} dFlexProMax ml20`}>
          <span className={favourite? styles.icon+' '+styles.on : styles.icon+' '+styles.off}>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g id="vuesax_linear_star" data-name="vuesax/linear/star" transform="translate(-108 -188)">
                          <g id="star" transform="translate(108 188)">
                            <path id="Vector" d="M9.383,1.144l1.408,2.81a1.738,1.738,0,0,0,1.136.838l2.552.423c1.632.271,2.016,1.453.84,2.619l-1.984,1.98a1.731,1.731,0,0,0-.416,1.445l.568,2.451c.448,1.94-.584,2.691-2.3,1.677L8.791,13.973a1.733,1.733,0,0,0-1.584,0L4.815,15.387c-1.712,1.014-2.752.255-2.3-1.677l.568-2.451a1.731,1.731,0,0,0-.416-1.445L.679,7.834c-1.168-1.166-.792-2.347.84-2.619l2.552-.423A1.742,1.742,0,0,0,5.2,3.954l1.408-2.81C7.375-.381,8.623-.381,9.383,1.144Z" transform="translate(2.001 2.077)" fill="none" stroke="#292d32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                            <path id="Vector-2" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"></path>
                          </g>
                        </g>
                      </svg>
                    
          </span>


          <span className={styles.text+' '+'ml10 roboto300'}>Favourite</span>
          </button>
    </div>
  )
}

export default RateDisplay