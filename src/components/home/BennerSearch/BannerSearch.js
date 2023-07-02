import React from 'react'
import styles from '../BennerSearch/BannerSearch.module.css';
import ParallaxImg from '../../smallComponents/ParallaxImg';
import SearchAddress from '../SearchAddress/SearchAddress';
import Link from 'next/link';

const BannerSearch = () => {
  return (
    <div style={{background : '#d5f59f'}} className={styles.bannerSearch+' '+'dFlex'}>
      <div className={styles.imageBack+' '+'dInlineBlk'}>
        <ParallaxImg/>
      </div>

      <div className={styles.containerFluid+' '+'containerFliuid80'}>
        <div className={styles.searchParent}>
          <SearchAddress/>
        </div>
        <div className={styles.footerText}>
          <Link href={'/'}>view popular restaurants and stores </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerSearch
