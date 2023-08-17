import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const DeliveryAddress = () => {
  return (
    <div className={`${styles.changeDelivery} roboto400`}>
        <div className={styles.topText}>Delivery to</div>
        <div className={`${styles.botText} dFlexProMax`}>
          <h3 className=' roboto500'>PL11 2AD</h3>
          <button className='btnNoneStyle roboto500'>Change</button>
        </div>
    </div>
  )
}

export default DeliveryAddress