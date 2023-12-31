import React from 'react'
import TopSectionBrowse from '@/components/browse/TopSectionBrowse/TopSectionBrowse'
import styles from '../../components/browse/BrowsePage.module.css';
import FilterComponent from '@/components/global/components/filter/FilterComponent';
import GrubSwiper from '@/components/browse/GrubSwiper/GrubSwiper';
import banner1 from '../../../public/images/grubSwiper/banner1.jpeg';
import banner2 from '../../../public/images/grubSwiper/banner2.webp';
import banner3 from '../../../public/images/grubSwiper/banner3.webp';
import ListMerchant from '@/components/browse/listMerchant/ListMerchant';
import {dataForSwiper} from '@/../utils/constanst';
import GetMerchants from '@/components/browse/listMerchant/GetMerchants';
import MerchantContext from '@/context/MerchantContext';
import { FilterContext } from '@/context/FilterContext';

const grubSwiperData= [
  {
    title :  `Get up to 20% Discount`,
    desc : ' Exclusive to Grub24',
    image : banner1
  },
  {
    title :  "Get up to 30% Discount",
    desc : ' Exclusive to Grub24',
    image : banner2
  },
  {
    title :  "Get up to 10% Discount",
    desc : ' Exclusive to Grub24',
    image : banner3
  }
];

const browsePage = () => {
  return (
    
    <div className={styles.browsePage}>
      <MerchantContext>
      <TopSectionBrowse/>
      <div className={styles.content+' '+'containerFluid90 dFlex flexWrap'}>
        <div className={styles.filter}>
        <FilterComponent/>
        </div>

        <div className={styles.body}>
        <GrubSwiper data={grubSwiperData}/>

            <GetMerchants/>

        {/* <ListMerchant data={dataForSwiper} /> */}
        </div>

      </div>
      </MerchantContext>

    </div>
  )
}

export default browsePage