'use client';
import React from 'react';
import styles from '../BennerSearch/BannerSearch.module.css';
import ReactRotatingText from 'react-rotating-text';
 
const SearchAddress = () => {
  return (
    <div className={styles.searchAddress}>
        <div className={styles.title}>
            <h1 className={styles.h1+' '+'quicksand700'}>A better way to order</h1>
            <div className={styles.rotateText+' '+'quicksand400 rotateText grubColor'}>
            <ReactRotatingText cursor={false} emptyPause='300' pause='1700' items={['Drink', 'Pasta', 'Pizza','Burger']} />
            </div>
        </div>
        <div className={styles.formDiv}>
          <div className={styles.text+' '+'mt40 roboto400'}>Delivery Address</div>
          <form className={styles.form+' '+'dFlex '}>
            <div className={styles.parentInput}>
            <input placeholder='Enter your address or Postal code' className='grubInput'/>
            <span className={styles.iconMap}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21.554" viewBox="0 0 18.221 21.554">
              <g id="location-pin" transform="translate(-5.627 -1.238)">
                <path id="Path_7" data-name="Path 7" d="M16.707,8.971a3.353,3.353,0,1,0,3.353,3.353A3.353,3.353,0,0,0,16.707,8.971Zm0,5.029a1.676,1.676,0,1,1,1.676-1.676A1.676,1.676,0,0,1,16.707,14Z" transform="translate(-1.97 -1.972)" fill="#393636"></path>
                <path id="Path_8" data-name="Path 8" d="M21.178,3.9A9.111,9.111,0,0,0,7.1,15.319l6.315,6.768a1.552,1.552,0,0,0,2.6,0l6.352-6.768A9.111,9.111,0,0,0,21.179,3.9Zm-.213,10.5-6.247,6.608L8.507,14.4a7.434,7.434,0,1,1,12.458,0Z" transform="translate(0 0)" fill="#393636"></path>
              </g>
            </svg>
            </span>
            </div>
          <button className={styles.grubBtn+' '+'roboto500'}>Search</button>
          </form>
          <p className={styles.text}> <button className='btnNoneStyle grubColor roboto400'>Login</button> for your recent addresses. </p>
        </div>
    </div>
  )
}

export default SearchAddress