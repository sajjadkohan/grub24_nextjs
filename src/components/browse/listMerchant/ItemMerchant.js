'use client'
import React, { useEffect, useState } from 'react'
import pStyles from '../listMerchant/ListMerchantStyle.module.css'
import styles from '../../global/GlobalSwiper.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { fixedNumber } from '../../../../utils/functions'
import TagContainer from './TagContainer'

const ItemMerchant = ({data ,cuisine}) => {

    const[gradeState,setGradeState] = useState([]);
    const[discountState,setDiscountState] = useState('');
    

    useEffect(()=> {
        setGradeState([parseInt(data.grade)]);
        // console.log(cuisine);
        setDiscountState(data.offer)
    },[data])

  return (
    <div className={`${pStyles.itemMerchant} ${styles.itemMerchant}`}>
      
                    <Link className="dBlock" href={`/store/${data.merchant_id}`}>
                        <div className={styles.cardItem}>
                            <div className={styles.imageParent}>
                                <div className={styles.imageDiv}>
                                <Image alt="image" className={styles.imageSwiper} src={data.background} width={2000} height={2000} />
                                </div>
                                <div className={styles.rateParent}>
                                    <span className={styles.rate+' '+'roboto700'}>{fixedNumber(data.ratings)}</span>
                                    <span className={styles.icon}>
                                        <svg id="icon-star" xmlns="http://www.w3.org/2000/svg" width="14" height="13.3" viewBox="0 0 14 13.3">
                                        <path id="Path_9" data-name="Path 9" d="M7.687.439l1.561,3.13a.779.779,0,0,0,.587.423l3.5.509a.783.783,0,0,1,.515.3.757.757,0,0,1,.147.571.775.775,0,0,1-.225.442L11.233,8.269a.741.741,0,0,0-.225.675l.624,3.455a.78.78,0,0,1-.624.89.818.818,0,0,1-.5-.08L7.387,11.583a.818.818,0,0,0-.737,0L3.528,13.209A.8.8,0,0,1,2.454,12.9a.792.792,0,0,1-.081-.491L3,8.95a.741.741,0,0,0-.225-.675L.238,5.82a.758.758,0,0,1,0-1.092.76.76,0,0,1,.45-.221L4.184,4a.779.779,0,0,0,.587-.423L6.276.439a.776.776,0,0,1,.712-.43h.094A.78.78,0,0,1,7.687.439Z" transform="translate(-0.002 -0.003)" fill="#efba61"></path>
                                        <path id="Path_10" data-name="Path 10" d="M7,11.488a.85.85,0,0,0-.387.106L3.505,13.216a.813.813,0,0,1-1.053-.322.768.768,0,0,1-.081-.485L3,8.96a.771.771,0,0,0-.225-.681L.23,5.824a.764.764,0,0,1,0-1.092.8.8,0,0,1,.443-.221L4.182,4a.76.76,0,0,0,.587-.423L6.294.4A.778.778,0,0,1,7.011.006C7,.215,7,11.347,7,11.488Z" transform="translate(0 0)" fill="#efba61"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={data.free_delivery==='2'?styles.freDelivery+' '+'roboto500': 'dNone'}>
                                    free Delivery
                                </div>
                                <div className={data.offer?styles.discount+' '+'roboto500': 'dNone'}>
                                    <div className='roboto500' dangerouslySetInnerHTML={{ __html: data.offer }} />
                                </div>
                            </div>

                            <div className={styles.titleParent+' '+'w100 roboto500'}>
                                <h1 className={'dInlineBlk'}>{data.restaurant_name}
                                <span className={styles.icon}>
                                <svg id="Blue-Check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="8" cy="8" r="8" fill="#0a99ff"/>
                                    <path id="Path_12" data-name="Path 12" d="M16.538,10l-.25-.25a.432.432,0,0,0-.3-.15h0a.356.356,0,0,0-.3.15l-4.35,4.35-2.35-2.3a.524.524,0,0,0-.65,0l-.25.25a.456.456,0,0,0,0,.6l2.75,2.75a.745.745,0,0,0,.45.2.543.543,0,0,0,.45-.2l4.8-4.8a.375.375,0,0,0,0-.6Z" transform="translate(-3.988 -4.8)" fill="#fff"/>
                                </svg>
                                </span>
                                </h1>

                            </div>

                            <div className={styles.desc+' '+'w100'}>
                                <div className={styles.first}>

                                    <div className={styles.cuisine+' '+'w100 dFlex'}>
                                        {
                                           data.cuisine&& JSON.parse(data.cuisine).slice(0, 3).map(cuis => {
                                                return(
                                                    <span key={cuis} className={styles.cuis+' '+'roboto400'}>{cuisine[cuis]}</span>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                
                                <div className={styles.last}>
                                    <div className={styles.statusParent+' '+'dFlexPro'}>
                                    {
                                        data.openStatus==='Open' && <p className={styles.status+' '+styles.openStatus}>OPEN</p>
                                    }
                                    {
                                        data.openStatus==='CLOSED' && <p className={styles.status+' '+styles.closeStatus}>CLOSED</p>
                                    }
                                    {
                                        data.openStatus==='Pre-Order' && <p className={styles.status+' '+styles.preOrderStatus}>PRE-OPRDER</p>
                                    }
                                    <div className={styles.gradeParent+' '+'dFlexPro'}>
                                    <TagContainer num={gradeState} />
                                    </div>
                                    </div>
                                    <span className={styles.time+' '+'roboto400'}>{data.preparetime} mins</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                
    </div>
  )
}

export default ItemMerchant