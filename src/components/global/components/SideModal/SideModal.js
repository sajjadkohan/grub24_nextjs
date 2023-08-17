'use client';
import Booking from '@/components/store/Booking/Booking';
import { ViewContext } from '@/context/ViewContext';
import Image from 'next/image'
import React, { useContext } from 'react';

const SideModal = ({childComponent}) => {
  const { sideModal, setSideModal } = useContext(ViewContext);

  return (
    <>
    {
      sideModal&&<div className={`${styles.itemViewAddToCard}`}>
        <div onClick={() => setSideModal(false)} className={styles.leftBackground}></div>
        <div className={styles.rightContent}>
        <button className={styles.closeBtn} onClick={() => setSideModal(false)}> 
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
          <path id="Path_124" data-name="Path 124" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)"></path>
          </svg>
        </span>
        </button>


        <div className={styles.body}>
          {childComponent}
        </div>

        <div className={`${styles.footer} dFlexPro`}>
          
          <button className={styles.addBtn}>Add to Cart</button>
        </div>

        </div>
        </div>
    }
    
    </>
  )
}

export default SideModal