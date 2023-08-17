import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';


const Reviews = () => {
    let textt = 'Great food and delivery was quicker than expected (given a wait of 60-90 minutes, and arrived within 35!) . Really tasty!';
    let texttt = 'Always speedy delivery, friendly staff and really fresh, tasty food. ';
    let textttt = 'best';


    return (
    <div className={styles.reviews}>
        <div className={`${styles.title} dFlexPro`}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <g id="Group_214" data-name="Group 214" transform="translate(-2 -2)">
            <path id="Path_174" data-name="Path 174" d="M17.3,2H4.7A2.7,2.7,0,0,0,2,4.7V19.1a.9.9,0,0,0,1.364.771l3.645-2.187A2.706,2.706,0,0,1,8.4,17.3h8.9A2.7,2.7,0,0,0,20,14.6V4.7A2.7,2.7,0,0,0,17.3,2Zm.9,12.6a.9.9,0,0,1-.9.9H8.4a4.5,4.5,0,0,0-2.316.642L3.8,17.51V4.7a.9.9,0,0,1,.9-.9H17.3a.9.9,0,0,1,.9.9Z" fill="#89a5b9"></path>
            </g>
            </svg>
            </span>
            <h5>Reviews</h5>
            <button className={`btnNoneStyle ${styles.btnWrite}`}>+   Write a review</button>
        </div>

        <div className={styles.content}>
            <ReviewDisplay textComment={textt} rateValue={4} name='John' date='4 week ago' />
            <ReviewDisplay textComment={texttt} rateValue={2} name='Sophie' date='1 month ago' />
            <ReviewDisplay textComment={textttt} rateValue={5} name='Alex' date='3 week ago' />
        </div>

    </div>
  )
}

export default Reviews