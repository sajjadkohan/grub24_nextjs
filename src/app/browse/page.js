import React from 'react'
import TopSectionBrowse from '@/components/browse/TopSectionBrowse/TopSectionBrowse'
import styles from '../../components/browse/BrowsePage.module.css';
import FilterComponent from '@/components/global/components/filter/FilterComponent';
import GrubSwiper from '@/components/browse/GrubSwiper/GrubSwiper';
import banner1 from '../../../public/images/grubSwiper/banner1.jpeg';
import banner2 from '../../../public/images/grubSwiper/banner2.webp';
import banner3 from '../../../public/images/grubSwiper/banner3.webp';

const grubSwiperData= [
  {
    title :  `Get up to 30% Discount`,
    desc : ' Exclusive to Grub24',
    image : banner1
  },
  {
    title :  "Get up to 30% Discount",
    desc : ' Exclusive to Grub24',
    image : banner2
  },
  {
    title :  "Get up to 30% Discount",
    desc : ' Exclusive to Grub24',
    image : banner3
  }
]

const browsePage = () => {
  return (
    <div className={styles.browsePage}>
      <TopSectionBrowse/>
      <div className={styles.content+' '+'containerFluid90 dFlex'}>
        <div className={styles.left}>
        <FilterComponent/>
        </div>
        <div className={styles.right}>
          <GrubSwiper data={grubSwiperData}/>
        </div>sdsfsdf 9a3a88ea3e45f8a05fd406b6231737ab5576b813
      </div>

    </div>
  )
}

export default browsePage