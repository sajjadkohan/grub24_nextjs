'use client';
import React, { useContext, useRef, useState } from 'react';
import styles from '../../components/filter/Filter.module.css';
import { filterCtx } from '@/context/FilterContext';

const ByDelivery = () => {

  // const{byDelivery} = useContext(filterCtx)

  const {byDelivery,applySingleFilter} = useContext(filterCtx);

  const activeHandler = (e) => {
    console.log(e.target);
  }

  const [activeClass, setActiveClass] = useState(null);

  const parentRadio = useRef(null);

  const handleClick = (index) => {
    setActiveClass(null);
    setActiveClass(index);
    // parentRadio.current.classList.remove(styles.active);
  };


  const changeHandler = (value) => {
    console.log(value);
    // console.log(parentRadio.current.children);
    // parentRadio.current.children[value].classList.remove(styles.active);
    // parentRadio.current.children.map(item => {
    //   console.log(item);
    // });
    // parentRadio.current.children[value].children[0].classList.add(styles.active);
  }

  return (
    <>
    <div className={styles.sortBy+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>By Delivery</div>
        
        <div onClick={() => {applySingleFilter('byDelivery',1);handleClick(1)}} className={`${styles.row} ${byDelivery.value === 1 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        
        <span className={styles.text+' '+'roboto400'}>Delivery and Collection</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',2);handleClick(2)}} className={`${styles.row} ${byDelivery.value === 2 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        
        <span className={styles.text+' '+'roboto400'}>Delivery Only</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',3);handleClick(3)}} className={`${styles.row} ${byDelivery.value === 3 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        
        <span className={styles.text+' '+'roboto400'}>Collection only</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',4);handleClick(4)}} className={`${styles.row} ${byDelivery.value === 4 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        
        <span className={styles.text+' '+'roboto400'}>Delivery / Collection / Dinein</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',5);handleClick(5)}} className={`${styles.row} ${byDelivery.value === 5 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Delivery & Dinein</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',6);handleClick(6)}} className={`${styles.row} ${byDelivery.value === 6 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Collection & Dinein</span>
        </div>

        <div onClick={() => {applySingleFilter('byDelivery',7);handleClick(7)}} className={`${styles.row} ${byDelivery.value === 7 ? `${styles.active}` : ''} dFlexPro`}>
        <div className={styles.radioButton}></div>
        <span className={styles.text+' '+'roboto400'}>Dinein Only</span>
        </div>

    </div>
    </>
  )
}

export default ByDelivery