import React from 'react'
import styles from '../../../styles/largeComponents/Filter.module.css'

const MinimumDelivery = () => {

    const arrow = '<';

  return (
    <>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>Minimum Delivery</div>
        
        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>{arrow} £5</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>{arrow} £10</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>{arrow} £15</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>{arrow} £20</span>
        </div>

    </div>
    </>
  )
}

export default MinimumDelivery