import React from 'react'
import styles from '../../components/filter/Filter.module.css'

const ByDelivery = () => {
  return (
    <>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>By Delivery</div>
        
        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Delivery and Collection</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Delivery Only</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Collection only</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Delivery / Collection / Dinein</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Delivery & Dinein</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton+' '+styles.active}></div>
        <span className={styles.text+' '+'roboto400'}>Collection & Dinein</span>
        </div>

        <div className={styles.row+' '+'dFlexPro'}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Dinein Only</span>
        </div>

    </div>
    </>
  )
}

export default ByDelivery