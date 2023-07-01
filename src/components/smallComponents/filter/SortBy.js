import React from 'react'
import styles from '../../../styles/largeComponents/Filter.module.css'

const SortBy = () => {
  return (
    <>
    <div className='brBottom'></div>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>Sort by</div>
        
        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Name</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Rating</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Minimum</span>
        </div>

    </div>
    </>
  )
}

export default SortBy