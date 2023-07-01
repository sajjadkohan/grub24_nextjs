'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import styles from '../../styles/largeComponents/SwiperSlider.module.css';


// import "./styles.css";

// import required modules
import { Navigation, Scrollbar } from "swiper";
import Image from "next/image";
import Link from "next/link";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SwiperSliderLong({data}) {

    const [width , setWidth] = useState(0);

    useEffect(()=> {
        setWidth(window.screen.width);
    },[])

  return (
    <div className={styles.swiperSliderLong}>
    <div className="containerFliuid80">
        <div className={styles.head+' '+'dFlex algCenter jstBtn'}>
            <div className={styles.left}>
                <h1 className={styles.title+' '+'roboto500'}>Newest Restaurants</h1>
            </div>

        </div>
    </div>
    <div className="containerFliuid80 poRelative">
        <div className={styles.navParent}>
            <button className="prevEl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16.106" viewBox="0 0 18 16.106">
                    <path id="Path_14" data-name="Path 14" d="M19.59,10.709H3.4l.165-.051a3.168,3.168,0,0,0,1.267-.779l5.7-5.7-.9-.887L1.59,11.343,9.636,19.4l.893-.893-5.7-5.7a3.168,3.168,0,0,0-1.267-.779L3.4,11.976H19.59Z" transform="translate(-1.59 -3.29)" fill="#939393"></path>
                </svg>
            </button>
            <button className="nextEl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16.106" viewBox="0 0 18 16.106">
                    <path id="Path_14" data-name="Path 14" d="M1.59,10.709H17.778l-.165-.051a3.168,3.168,0,0,1-1.267-.779l-5.7-5.7.9-.887,8.046,8.053L11.544,19.4,10.65,18.5l5.7-5.7a3.168,3.168,0,0,1,1.267-.779l.158-.044H1.59Z" transform="translate(-1.59 -3.29)" fill="#393636"></path>
                </svg>
            </button>
        </div>
      <Swiper

        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
            prevEl: '.prevEl',
            nextEl: '.nextEl',
          }}
        slidesPerView={width > 767? 3 : 1}    
        className={styles.mySwiper+' '+"mySwiper pb60"}
      >
        {
            data&&data.map(slide => {
                return(
                <SwiperSlide key={slide.id}>
                    <Link className={styles.linkTag+' '+"dBlock"} href={'/'}>
                        <div className={styles.cardItem}>
                            <div className={styles.imageParent}>
                                <div className={styles.imageDiv}>
                                <Image alt="image" className={styles.imageSwiper} src={slide.image} width={2000} height={2000} />
                                </div>
                            </div>
                            <div className={styles.textBlock}>
                                <div className={styles.locationParent}>
                                    <span className={styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13.333" viewBox="0 0 10 13.333">
                                            <path id="Path_15" data-name="Path 15" d="M11,0A5,5,0,0,0,6,5c0,2.761,5,8.333,5,8.333S16,7.761,16,5A5,5,0,0,0,11,0Zm0,8.333A3.333,3.333,0,1,1,14.333,5,3.333,3.333,0,0,1,11,8.333Zm0-5A1.667,1.667,0,1,0,12.667,5,1.667,1.667,0,0,0,11,3.333Z" transform="translate(-6)" fill="#aaa"></path>
                                        </svg>
                                    </span>
                                    <span className={styles.text+' '+'roboto400'}>Maidestone</span>
                                </div>
                                <div className={styles.titleParent+' '+'w100 roboto500'}>
                                    <h1 className={'dInlineBlk'+' '+styles.title}>{slide.title}</h1>

                                </div>

                                <div className={styles.desc+' '+'w100'}>
                                    <div className={styles.first}>

                                        <div className={styles.cuisine+' '+'w100 dFlex'}>
                                            {
                                                slide.cuisine.map(cuis => {
                                                    return(
                                                        <span key={cuis} className={styles.cuis+' '+'roboto400'}>{cuis}</span>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
            
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
  );
}
