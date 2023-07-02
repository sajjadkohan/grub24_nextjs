'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import styles from '../../components/global/GlobalSwiper.module.css';


// import "./styles.css";

// import required modules
import { Grid, Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import Link from "next/link";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SwiperCities({data}) {

    const [width , setWidth] = useState(0);

    useEffect(()=> {
        setWidth(window.screen.width);
    },[])

  return (
    <div className={styles.swiperCities}>
    <div className="containerFliuid80">
        <div className={styles.head+' '+'dFlex algCenter jstBtn'}>
            <div className={styles.left}>
                <h1 className={styles.title+' '+'roboto500'}>Browse by cuisine</h1>
                <p className={styles.desc+' '+'roboto400'}>choose from your favourite cuisine</p>
            </div>
            <div className={styles.right+' '+'dFlex algCenter jstBtn'}>
                <div className={styles.scrollC+' '+'scrollBarC'}>
                    
                    <div className="swiper-scrollbar3"></div>
                </div>
                <div className={styles.navigation+' '+'dFlex algCenter jstBtn'}>
                    <button className="prev3"><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button className="next3"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
        </div>
    </div>
    <div className="containerFliuid80 citiesSwiper">
      <Swiper
        scrollbar={{
          hide: false,
          el: '.swiper-scrollbar3',
        draggable: true,
        }}
        navigation={{
            prevEl: '.prev3',
            nextEl: '.next3',
          }}

        grid={{
            rows : 2,
        }}
           
        modules={[Scrollbar,Navigation,Grid]}
        spaceBetween={30}
        slidesPerView={width > 767? 4 : 1}
       
        
        className={styles.mySwiper+' '+"mySwiper pb60"}
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

                            <div className={styles.desc+' '+'w100'}>
                                <div className={styles.first}>

                                    <div className={styles.cuisine+' '+'w100 dFlex'}>
                                     <span className={styles.cuis+' '+'roboto400'}>{slide.desc}</span>
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
