'use client'
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from '../../global/GlobalSwiper.module.css';

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const CuisineSwiperTop = ({data,showMap}) => {

  const [width , setWidth] = useState(0);

  useEffect(()=> {
      setWidth(window.screen.width);
  },[])

  return (
    <div className={showMap? styles.cuisineSwiper+' '+styles.cuisineSwiperTop+' '+styles.shadowTop : styles.cuisineSwiper+' '+styles.cuisineSwiperTop+' '+styles.shadowBottom}>
 
    <div className="containerFluid90 poRelative">
      <div className={styles.head+' '+'dFlex algCenter jstBtn w100'}>

      <div className={styles.navigation+' '+'dFlex  w100 algCenter jstBtn'}>
          <button className="prevT"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="nextT"><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>

      </div>
      <Swiper    
        navigation={{
          prevEl: '.prevT',
          nextEl: '.nextT',
        }}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={width > 767? 4.7 : 1}
       
        
        className={styles.mySwiper+' '+styles.topSwiper+' '+"mySwiper br20"}
      >
        {
            data&&data.map(slide => {
                return(
                <SwiperSlide key={slide.id}>
                    <Link className="dBlock plr5" href={'/'}>
                        <div className={styles.cardItem}>
                            <div className={styles.imageParent}>
                                <div className={styles.imageDiv}>
                                <Image alt="image" className={styles.imageSwiper} src={slide.image} width={1000} height={1000} />
                                </div>

                            </div>

                            <div className={styles.titleParent+' '+'w100 roboto500'}>
                                <h1 className={'dInlineBlk'}>{slide.title}</h1>
                            </div>

                        </div>
                    </Link>

                </SwiperSlide>
                )
            })
        }

      </Swiper>
    </div>

    </div>
  )
}

export default CuisineSwiperTop