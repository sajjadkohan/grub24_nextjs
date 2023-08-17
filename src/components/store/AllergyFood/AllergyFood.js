'use client';
import React, { useState } from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import Link from 'next/link';
import { IoIosClose } from "react-icons/io";
import { FaInfo } from "react-icons/fa";

const AllergyFood = ({phone}) => {

    const[showModal,setShowModal] = useState(false);

    const openModal =() => {
        setShowModal(true)
    }

    const closeModal =() => {
        setShowModal(false);
        console.log('teassr');
    }

  return (
    <div className={styles.allergyParent}>
    <div onClick={openModal} className={`${styles.allergy}`}>
        <span className={styles.icon}><FaInfo/></span>
        <p className={styles.text}>If you or someone you're ordering for has a food allergy or intolerance , tap here.</p>
    </div>

    <div className={showModal?  `${styles.modal}`: `${styles.modal} dNone`}>
        <div className={`${styles.contentModal} dFlexPro`}>
           <div className={styles.modalValue}>
            <div className={styles.head}>
                <h4 className='roboto400'>Do you have a food allergy?</h4>
                <button onClick={closeModal}><IoIosClose/></button>
            </div>
            <div className={styles.body}>
                <p>
                if you have a food allergy or intolerance (or someone you're ordering for has), 
                phone the restaurant on {phone?<span>{phone}</span>:<span></span>}.
                Do not order if you cannot get the allergy information you need. 
                </p>
            </div>
            <div className={styles.footer}>
                <button onClick={closeModal} className={styles.close}>Close</button>
            </div>
           </div>
        </div>
        <div onClick={closeModal} className={`${styles.backModal} dFlexPro`}></div>
    </div>

    </div>
  )
}

export default AllergyFood;
