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
                    <Popover title={itemData.item_name}>
                      <span className={`${styles.nameItem} roboto400`}>{itemData.item_name}</span>
                      <span className={`${styles.nameCategory} roboto400`}>({itemData.category_name})</span>
                    </Popover>
                  </div>
                  <div className={styles.right}>
                  <span className={`${styles.price} roboto500`}>£{itemData.prices[0].price}</span>
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
