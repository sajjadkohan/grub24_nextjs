'use client';
import React, { useEffect } from 'react'
import styles from '@/components/store/MerchantDetail.module.css'

const ItemOrderDetail = ({itemData}) => {

    useEffect(()=> {
        console.log(itemData);
      },[]);

  return (
    <div className={styles.moreDetail}>

        {
            itemData.addon? 
            itemData.addon.map(addon => {
                return(
                    <div className={`${styles.row} dFlexProMax`}>
                        <span className={`${styles.addon} roboto400`}>{addon.nameCategoryAddon}</span>
                        <span className={styles.count}>{addon.count}</span>
                        <div className={styles.parentName}>
                            <span className={`${styles.name} roboto300`}>{addon.nameFoodAddon}</span>
                        </div>
                        <span className={styles.priceF}>{addon.priceFAddon}</span>
                        <span className={`${styles.price} roboto400`}>
                            {
                             addon.priceAddon? 
                             <>£{addon.priceAddon}</>
                             :
                             <>-</>
                            }
                        </span>
                    </div>
                )
            })
            :
            <span></span>
        }



  </div>
  )
}

export default ItemOrderDetail
