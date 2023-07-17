import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';

const NameDisplay = ({nameMerchant , cuisine}) => {
  return (
    <div className={styles.nameDisplay+' '+styles.margin30_0}>
        <div className={styles.name+' '+'quicksand600'}>{nameMerchant}</div>
        <div className={styles.cuisineParent}>
            {/* {
                cuisine.length&& cuisine.map(cuis => <span key={cuis} className={styles.cuis+' '+'roboto300'}>{cuis}</span>)
            } */}
        </div>
    </div>
  )
}

export default NameDisplay