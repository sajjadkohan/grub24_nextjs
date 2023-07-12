import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import Link from 'next/link'

const BroadCromp = ({data}) => {
  return (
    <div className={styles.broadCrump +' '+'dFlex'}>
        <Link className='roboto400' href={'/'}>Home</Link>
        <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6.996" viewBox="0 0 4 6.996">
                <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M14.041,9.693,11.393,7.048a.5.5,0,0,1,0-.706.5.5,0,0,1,.708,0l3,3a.5.5,0,0,1,.015.689L12.1,13.046a.5.5,0,0,1-.708-.706Z" transform="translate(-11.246 -6.196)" fill="#aaa"></path>
            </svg>
        </span>
        <Link className='roboto400' href={'/browse'}>Select Store</Link>
        <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6.996" viewBox="0 0 4 6.996">
                <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M14.041,9.693,11.393,7.048a.5.5,0,0,1,0-.706.5.5,0,0,1,.708,0l3,3a.5.5,0,0,1,.015.689L12.1,13.046a.5.5,0,0,1-.708-.706Z" transform="translate(-11.246 -6.196)" fill="#aaa"></path>
            </svg>
        </span>
        <div className={styles.name+' '+'roboto300'}>{data}</div>

    </div>
  )
}

export default BroadCromp