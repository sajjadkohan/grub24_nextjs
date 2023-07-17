'use client'
import React, { useEffect } from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import BroadCromp from '../BroadCrumb/BroadCromp'
import Image from 'next/image'
import NameDisplay from '../NameDisplay/NameDisplay'
import RateDisplay from '../RateDisplay/RateDisplay'
import TabComponent from '../TabComponent/TabComponent'

const Head = ({data}) => {
  useEffect(() => {
  // console.log(data);
  }, [])
  return (
    <div className={styles.head+' '+'dFlex flexWrap'}>
        <div className={styles.left}>
            <BroadCromp data={data.restaurant_name} />
            <div className={styles.statusParent+' '+styles.margin30_0}>
              <span className={styles.statusTag+' '+styles.close}>CLOSED</span> 
              <span className={styles.time +' '+'roboto400'}>14:00 - 22:30 Open</span> 
              <span className={styles.time +' '+'roboto300 ml10'}> | </span> 
              <span className={styles.time +' '+'roboto400 ml10'}> free Delivery </span> 
            </div>
            <NameDisplay nameMerchant={data.restaurant_name} cuisine={data.cuisine} />
            <RateDisplay data={data.ratings} />
            
        </div>

        <div className={styles.right}>
            <Image className={styles.backImg} width={500} height={300} src={`https://grub24s3.s3.eu-west-2.amazonaws.com/resized/500x0/upload/${data.bg}`} alt='backgrund shop' />
        </div>
    </div>
  )
}

export default Head;


