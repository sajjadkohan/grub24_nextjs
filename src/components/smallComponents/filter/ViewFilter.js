import React from 'react'
import styles from '../../../styles/largeComponents/Filter.module.css'

const ViewFilter = () => {
  return (
    <>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>View Filter</div>
        
        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.checkBox+' '+styles.active}></div>
        <span className={styles.text+' '+'roboto400'}>Free Delivery</span>
        </div>

    </div>
    </>
  )
}

export default ViewFilter