import React, { useContext } from 'react';
import styles from '@/components/store/MerchantDetail.module.css'
import { ViewContext } from '@/context/ViewContext';
import Image from 'next/image';
import Prices from '../Prices/Prices';
import WithSalad from '../WithSalad/WithSalad';
import CheckBox from '../CheckBox/CheckBox';
import TextAreaRequest from '../TextAreaRequest/TextAreaRequest';
import Counter from '../Counter/Counter';
import RadioButton from '../RadioButton/RadioButton';
import ChooseBox from '../ChooseBox/ChooseBox';

const ItemViewAddToCard = () => {
  const { setCartModal , cartModal } = useContext(ViewContext);
  return (
    <>
    {
      cartModal&&<div className={`${styles.itemViewAddToCard}`}>
        <div onClick={() => setCartModal(false)} className={styles.leftBackground}></div>
        <div className={styles.rightContent}>
        <button className={styles.closeBtn} onClick={() => setCartModal(false)}> 
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
          <path id="Path_124" data-name="Path 124" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)"></path>
          </svg>
        </span>
        </button>

        <div className={styles.head}>
          <Image alt='image food' width={300} height={250} src={'https://grub24s3.s3.eu-west-2.amazonaws.com/upload/1586159606-Special-offer.jpg'}  />
        </div>

        <div className={styles.body}>
          <div className={styles.text}>
            <h4 className='quicksand700'>Chicken Nuggets Meal</h4>
            <p className='roboto400'>8pcs Chicken Nuggets, Large Chips & Can Drink</p>
          </div>


          <RadioButton/>
          <Prices/>
          <ChooseBox title='Would You Like Salad?' boxes={['With Salad','no Salad']}/>
          <CheckBox/>
          <TextAreaRequest/>
        </div>

        <div className={`${styles.footer} dFlexPro`}>
          <Counter/>
          <button className={styles.addBtn}>Add to Cart</button>
        </div>

        </div>
        </div>
    }
    
    </>
  )
}

export default ItemViewAddToCard;