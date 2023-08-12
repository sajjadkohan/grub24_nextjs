import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css'

const Counter = () => {
  return (
    <div className={`${styles.counter} dFlexPro`}>
        <button className={styles.btnCounter}>+</button>
        <span className={`${styles.counterView}`}>2</span>
        <button className={styles.btnCounter}>-</button>
    </div>
  )
}

export default Counter;