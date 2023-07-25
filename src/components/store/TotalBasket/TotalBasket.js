import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const TotalBasket = () => {
  return (
    <div className={styles.totalBasket}>

      <div className={`${styles.row} dFlexProMax`}>
        <span className='roboto400'>Sub Total</span>
        <span className='roboto400'>£45.66</span>
      </div>

      <div className={`${styles.row} dFlexProMax`}>
        <span className='roboto400'>Processing</span>
        <span className='roboto400'>£0.75</span>
      </div>

      <div className={`${styles.row} dFlexProMax`}>
        <span className='roboto700'>Total</span>
        <span className='roboto700'>£46.50</span>
      </div>

      <div className={`${styles.row} dFlexProMax`}>
        <p className='roboto400'>
        Your order includes <span>45</span> loyalty points
        </p>
      </div>

    </div>
  )
}

export default TotalBasket
