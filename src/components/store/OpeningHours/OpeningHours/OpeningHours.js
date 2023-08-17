import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';
import RowDashed from '../RowDashed/RowDashed';


const OpeningHours = () => {
  return (
    <div className={styles.openingHours}>
        <div className={styles.title}>
            <span>
                <svg id="Group_212" data-name="Group 212" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Path_3682" data-name="Path 3682" d="M0,0H24V24H0Z" fill="none"></path>
                <path id="Path_3565" data-name="Path 3565" d="M-2043.364,15.365a9,9,0,0,1,0-12.728,9,9,0,0,1,12.728,0,9,9,0,0,1,0,12.728A8.971,8.971,0,0,1-2037,18a8.974,8.974,0,0,1-6.364-2.635Zm1.193-11.532a7.321,7.321,0,0,0,0,10.342,7.32,7.32,0,0,0,10.342,0,7.321,7.321,0,0,0,0-10.342A7.289,7.289,0,0,0-2037,1.688a7.291,7.291,0,0,0-5.17,2.142Zm6.541,7.737-1.989-1.989a.913.913,0,0,1-.267-.645V4.391a.912.912,0,0,1,.912-.912.912.912,0,0,1,.912.912V8.555l1.722,1.722a.912.912,0,0,1,0,1.29.909.909,0,0,1-.645.267.91.91,0,0,1-.645-.267Z" transform="translate(2048.4 3.4)" fill="#89a5b9"></path>
                </svg>
            </span>
            <h5>Opening Hours</h5>
        </div>

        <div className={styles.content}>
            <RowDashed left='Monday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Tuesday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Wednesday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Thursday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Friday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Saturday' active={false} right='16:00 - 21:00' />
            <RowDashed left='Sunday' active={true} right='16:00 - 21:00' />
        </div>

    </div>
  )
}

export default OpeningHours