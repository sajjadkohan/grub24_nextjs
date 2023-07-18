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

const GrubSwiper = ({data,showMap}) => {

  const [width , setWidth] = useState(0);

  useEffect(()=> {
      setWidth(window.screen.width);
  },[])

  return (
    <div className={styles.grubSwiper+' ' +styles.cuisineSwiper}>
 
    <div className={styles.container+' '+" poRelative"}>
      <div className={styles.head+' '+'dFlex algCenter jstBtn w100'}>

      <div className={styles.navigation+' '+'dFlex  w100 algCenter jstBtn'}>
          <button className="prevG"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="nextG"><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>

      </div>
      <Swiper
        navigation={{
          prevEl: '.prevG',
          nextEl: '.nextG',
        }}
        modules={[Navigation]}
        spaceBetween={7}
        breakpoints={{
          100 : {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
        // slidesPerView={width > 767? 2.5 : 1}
       
        
        className={styles.mySwiper+' '+styles.grubSwiper+' '+"mySwiper br20"}
      >
        {
            data&&data.map(slide => {
                return(
                <SwiperSlide key={slide.title}>
                    <Link className="dBlock plr5" href={'/'}>
                        <div className={styles.cardItem}>
                            <div className={styles.imageParent}>
                                <div className={styles.imageDiv}>
                                <Image alt="image" className={styles.imageSwiper} src={slide.image} width={1000} height={1000} />
                                </div>

                            </div>

                            <div className={styles.descParent+' '+styles.titleParent+' '+'w100'}>
                                <h1 className={styles.title+' '+'roboto500'}>{slide.title}</h1>
                                <span className={'dBlock robot300'}>{slide.desc}</span>
                                <div className={styles.radMore+' '+'roboto500 dFlexPro'}>Read More 
                                <span className={styles.icon}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20.272" height="20.272" viewBox="0 0 20.272 20.272">
                                  <path id="Path_68" data-name="Path 68" d="M4.174,18.16a.6.6,0,0,0,.845,0L17.14,6.039V10.57a.6.6,0,1,0,1.195,0V4.6a.6.6,0,0,0-.6-.6H11.764a.6.6,0,0,0,0,1.195H16.3L4.174,17.314a.6.6,0,0,0,0,.846Z" transform="translate(10.137 -5.656) rotate(45)" fill="#fff"></path>
                                  </svg>
                                  </span>
                                  </div>  
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

export default GrubSwiper