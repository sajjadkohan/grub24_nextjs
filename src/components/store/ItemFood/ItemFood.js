import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import Image from 'next/image'

const ItemFood = ({item}) => {
  return (
    <div className={styles.itemFood}>
      <div className={item.photo?`${styles.card} dFlex` : `${styles.card} dFlex w100` }>
          <div className={styles.left}>
          <h4 className={`${styles.titleCard}`}>{item.item_name}</h4>
          <p className='roboto400'>{item.item_description}</p>
          <span className={`${styles.price} roboto500`}> £5.95</span>
          </div>
          
          <div className={styles.right}>
            {
              item.photo&&<Image width={100} height={100} alt='image food' src={`https://grub24s3.s3.eu-west-2.amazonaws.com/upload/${item.photo}`} />
            }
            
          </div>
      </div>
    </div>
  )
}

export default ItemFood