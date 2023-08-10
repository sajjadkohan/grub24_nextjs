'use client';
import React, { useState } from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const ChangeOrderType = () => {

  const [activeType,setActiveType] = useState(false);
  const [orderType,setOrderType] = useState('delivery');

  const activeHandler = () => {
    setActiveType(!activeType);
    if(confirm(`Warning, certain deals and items are only available for delivery / collection.
    Changing your order type maybe reset your order.
    Are you sure you want to change your order type?`)){
      setOrderType(orderType==='delivery'?'collection' : 'delivery')
    }
  }

  return (

    <div className={`${styles.changeOrderType} dFlexProMax`}>

      <div onClick={orderType==='collection'? activeHandler : null} className={orderType==='delivery'? `${styles.delivery} ${styles.parentType} ${styles.active}` : `${styles.delivery} ${styles.parentType}` }>
        <span className='roboto400'>Delivery</span>
        <p className='roboto700'>
          Starts From
          <br/>
          12:00 PM
        </p>
      </div>

      <div style={orderType==='delivery'? {transform : 'translateX(0%)'} : {transform : 'translateX(100%)'}} className={styles.activeTag}>

      </div>

      <div onClick={orderType==='delivery'? activeHandler : null} className={orderType==='delivery'? `${styles.collection} ${styles.parentType}` : `${styles.delivery} ${styles.parentType}  ${styles.active}`}>
        <span className='roboto400'>Collection</span>
        <p className='roboto700'>
          Starts From
          <br/>
          12:00 PM
        </p>
      </div>

    </div>
    
  )
}

export default ChangeOrderType
