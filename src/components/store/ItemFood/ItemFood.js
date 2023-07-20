import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import Image from 'next/image'

const ItemFood = ({item}) => {
  return (
    <div className={item.photo?`${styles.itemFood} w100` : `${styles.itemFood}`}>
      <div className={`${styles.card} dFlex w100`}>
          <div style={item.photo? {width : '40%'} : {width: '100%'}} className={styles.left}>
          <h4 className={`${styles.titleCard} roboto500`}>{item.item_name}</h4>
          <p dangerouslySetInnerHTML={{ __html: item.item_description }} className='roboto400'></p>
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