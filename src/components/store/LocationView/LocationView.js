import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';


const LocationView = () => {
  return (
    <div className={styles.locationView}>
        <div className={`${styles.title} dFlexPro`}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.364" height="22" viewBox="0 0 18.364 22">
                <g id="Artboard" transform="translate(1 1)">
                <g id="map-pin">
                <path id="Shape" d="M16.364,8.182C16.364,14.545,8.182,20,8.182,20S0,14.545,0,8.182a8.182,8.182,0,1,1,16.364,0Z" fill="none" stroke="#89a5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"></path>
                <circle id="Oval" cx="3" cy="3" r="3" transform="translate(5 5)" fill="none" stroke="#89a5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                </g>
                </g>
                </svg>
            </span>
            <h5>Map</h5>

        </div>

        <div className={styles.content}>content</div>
    </div>
  )
}

export default LocationView