import React from 'react'
import styles from '../../../components/store/MerchantDetail.module.css';
import Head from '@/components/store/Head/Head';

const MerchantDetail= () => {
  return (
    <div className={styles.merchantDetail}>
      <div className='container'>
        <Head />
      </div>
    </div>
  )
}

export default MerchantDetail