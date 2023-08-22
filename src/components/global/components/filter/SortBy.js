'use client'
import React, { useContext } from 'react'
import styles from '../../components/filter/Filter.module.css'
import { filterCtx } from '@/context/FilterContext';

const SortBy = () => {
    // context => use contex for set method and toggle active class
    const {sortBy,byDelivery,applySingleFilter} = useContext(filterCtx);
  return (
    <>
    <div className='brBottom'></div>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>Sort by</div>
        
        <div onClick={() => applySingleFilter('sortBy','restaurant_name')} 
        className={`${styles.row} ${sortBy.value === 'restaurant_name' ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Name</span>
        </div>

        <div onClick={() => applySingleFilter('sortBy','ratings')} 
        className={`${styles.row} ${sortBy.value === 'ratings' ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Rating</span>
        </div>

        <div onClick={() => applySingleFilter('sortBy','minimum_order')} 
        className={`${styles.row} ${sortBy.value === 'minimum_order' ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Minimum</span>
        </div>

    </div>
    </>
  )
}

export default SortBy