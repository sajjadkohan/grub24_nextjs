'use client';
import React, { useEffect } from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import { Popover } from 'antd';

const ItemOrderAction = ({itemData}) => {

  return (
        <div className={`${styles.itemOrder}`}>
              <div className={`${styles.body} dFlexProMax`}>
                  <div className={`${styles.left} dFlexProMax`}>
                      <button className={styles.incDec}>-</button>
                      <span className={styles.counter}>{itemData.count}</span>
                      <button className={styles.incDec}>+</button>
                  </div>
                  <div className={`${styles.center} popoverItem roboto400`}>
                    <Popover title="16pcs Chicken Buckets , test test test test">
                      <span className={`${styles.nameItem} roboto400`}>{itemData.nameFood}</span>
                      <span className={`${styles.nameCategory} roboto400`}>({itemData.categoryName})</span>
                    </Popover>
                  </div>
                  <div className={styles.right}>
                  <span className={`${styles.price} roboto500`}>£{itemData.price}</span>
                  <button className='btnNoneStyle roboto500'>edit</button>
                  </div>
              </div>

              {
                itemData.description? 
              <div className={styles.desc}>
                    {itemData.description}
                </div>
                 : 
                <></>
              }

          </div>
  )
}

export default ItemOrderAction
