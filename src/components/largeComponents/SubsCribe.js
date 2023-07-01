import React from 'react'
import styles from '../../styles/largeComponents/SubsCribe.module.css';


const SubsCribe = () => {
  return (
    <div className={styles.subsCribe}>
        <div className={styles.text}>Subscribe to our newsletter</div>
        <form className={styles.form}>
            <input placeholder='Enter email address' className='inputGrub'/>
            <button className=''>Subscribe</button>
        </form>
    </div>
  )
}

export default SubsCribe