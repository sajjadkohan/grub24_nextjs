import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';


const TextAreaRequest = () => {
  return (
    <div className={`${styles.formGroup} ${styles.textAreaRequest}`}>

    <div>
    <div className={styles.title}>Special Request</div>
    <div className={styles.content}>
        <textarea placeholder='Your preferences or request..' />
    </div>

    </div>

  </div>
  )
}

export default TextAreaRequest