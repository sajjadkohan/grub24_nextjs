import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const RowDashed = ({left,active,right}) => {
  return (
    <div className={active? `${styles.dayDisplay} ${styles.active}` : `${styles.dayDisplay}`}>
        {
            active&&
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="7.499" height="12" viewBox="0 0 7.499 12">
            <path id="Path_173" data-name="Path 173" d="M14.506,17.255c.007-.009.01-.021.018-.03L19.76,11.44a.9.9,0,0,0,0-1.179l-.009-.006A.7.7,0,0,0,19.217,10H8.743a.711.711,0,0,0-.541.264l0,0a.9.9,0,0,0,0,1.179l5.248,5.815a.7.7,0,0,0,1.059,0Z" transform="translate(-10 19.979) rotate(-90)" fill="#0a99ff"></path>
            </svg>
        }
        <p>{left}</p>
        <div className={styles.dash}></div>
        <span className={`roboto500 ${styles.time}`}>{right}</span>
    </div>
  )
}

export default RowDashed