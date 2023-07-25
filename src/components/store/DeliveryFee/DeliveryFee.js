import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const DeliveryFee = () => {
  return (
    <div className={styles.deliveryFee}>
      <div className={`${styles.row} dFlexProMax`}>
        <p className='roboto300'>DeliveryFee</p>
        <p className='roboto400'>£2.00</p>
      </div>
      <div className={`${styles.row} dFlexProMax`}>
        <p className='roboto300'>Delivery Distance Covered</p>
        <p className='roboto400'>5 mi </p>
      </div>
      <div className={styles.horisRow}></div>
    </div>
  )
}

export default DeliveryFee
