import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';
import avatar from '@/../../public/images/profpic.png';
import Image from 'next/image';
import RateDisplayReveiw from '../RateDisplayReveiw/RateDisplayReveiw';

const ReviewDisplay = ({textComment,rateValue,date,name}) => {
  return (
    <div className={`${styles.reviewDisplay} dFlexPro`}>
        <Image src={avatar} width={45} height={45} alt='avatar' />
        <div className={styles.text}>
            <div className={`${styles.row1} dFlexPro`}>
                <p className='roboto500'>{name}</p>
                <span className='roboto400'>{date}</span>
            </div>
            <div className={styles.comment}>
                <p className='roboto300'>{textComment}</p>
            </div>
        </div>
        <div className={styles.rateParent}>
            <RateDisplayReveiw rate={rateValue} />
        </div>
    </div>
  )
}

export default ReviewDisplay;