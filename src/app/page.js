
import Image from 'next/image'
import styles from './page.module.css';

// components
import BannerSearch from '@/components/home/BennerSearch/BannerSearch';
import SwiperSlider from '@/components/global/components/SwiperSlider/SwiperSlider';

// image
import slide1 from '../images/swiper/1.webp';
import slide2 from '../images/swiper/2.webp';
import slide3 from '../images/swiper/3.webp';
import slide4 from '../images/swiper/4.webp';
import slide6 from '../images/swiper/6.webp';

import cuisineImage from '../../public/images/cuisine/a1.webp';
import cuisineImage2 from '../../public/images/cuisine/a2.webp';
import cuisineImage3 from '../../public/images/cuisine/a3.webp';
import cuisineImage4 from '../../public/images/cuisine/a4.png';
import cuisineImage5 from '../../public/images/cuisine/a5.webp';
import cuisineImage6 from '../../public/images/cuisine/a6.png';
import cuisineImage7 from '../../public/images/cuisine/a7.png';
import cuisineImage8 from '../../public/images/cuisine/a8.png';
import cuisineImage9 from '../../public/images/cuisine/a9.png';
import cuisineImage10 from '../../public/images/cuisine/a10.png';
import cuisineImage11 from '../../public/images/cuisine/a11.png';

import SwiperSliderLong from '@/components/home/SwiperSliderLong/SwiperSliderLong';
import AbsoluteSection from '@/components/home/AbsoluteSection/AbsoluteSection';
import CuisineSwiper from '../components/home/CuisineSwiper/CuisineSwiper';
import MobileAppSection from '@/components/home/MobileAppSection/MobileAppSection';
import SwiperCities from '@/components/global/components/SwiperCities/SwiperCities';
import MoreInfo from '@/components/home/MoreInfo/MoreInfo';
import SubsCribe from '@/components/global/components/SubsCribe/SubsCribe';
import LoginModal from '@/components/global/components/LoginModal/LoginModal';

const dataSwiper = [
  {
    id: 'skfe34554',
    title : 'italian Wood fire Pizzeria',
    cuisine : ['pizza','pasta','burger1'],
    rate : '3.2',
    status : 'closed',
    freeDelivery : true,
    deliveryTime : '30 - 45 min',
    image : slide1,
    restaurant_slug : 'italian-wood-fire-pizzeria'
  },
  {
    id: 'skfe34554ss',
    title : 'moores walk cafe',
    cuisine : ['sandwich','italian2','burger'],
    rate : '4.2',
    status : 'open',
    freeDelivery : true,
    deliveryTime : '30 - 40 min',
    image : slide2,
    restaurant_slug : 'moores-walk-cafe'
  },
  {
    id: 'skfe345we54',
    title : 'manos grill & pizza',
    cuisine : ['pizza','halal','grill3'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide3,
    restaurant_slug : 'manos-grill-pizza'
  },
  {
    id: 'skfe345xcgg54',
    title : 'Guildford Kebab House',
    cuisine : ['kebab','burger','healthy4'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide4,
    restaurant_slug : 'guildford-kebab-house'
  },
  {
    id: 'skfesfv34554',
    title : 'Walk 2 Wok - Kilburn',
    cuisine : ['pizza','pasta','burger5'],
    rate : '3.2',
    status : 'closed',
    freeDelivery : true,
    deliveryTime : '30 - 45 min',
    image : slide6,
    restaurant_slug : 'walk-2-wok-kilburn'
  },
  {
    id: 'skfe3452sdd54',
    title : 'moores walk cafe',
    cuisine : ['sandwich','italian','burger8'],
    rate : '2.2',
    status : 'open',
    freeDelivery : true,
    deliveryTime : '30 - 40 min',
    image : slide2,
    restaurant_slug : 'moores-walk-cafe'
  },
  {
    id: 'skfe3434554554',
    title : 'manos grill & pizza',
    cuisine : ['pizza','halal','grill7'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide3,
    restaurant_slug : 'manos-grill-pizza'
  },
  {
    id: 'skfe3455wxxfvd4',
    title : 'Guildford Kebab House',
    cuisine : ['kebab','burger','healthy8'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide2,
    restaurant_slug : 'guildford-kebab-house'
  },
  {
    id: 'skfe3465554',
    title : 'italian Wood fire Pizzeria',
    cuisine : ['pizza','pasta','burger1'],
    rate : '3.2',
    status : 'closed',
    freeDelivery : true,
    deliveryTime : '30 - 45 min',
    image : slide1,
    restaurant_slug : ''
  },
  {
    id: 'skfe3454454ss',
    title : 'moores walk cafe',
    cuisine : ['sandwich','italian2','burger'],
    rate : '4.2',
    status : 'open',
    freeDelivery : true,
    deliveryTime : '30 - 40 min',
    image : slide2,
    restaurant_slug : 'moores-walk-cafe'
  },
  {
    id: 'skfe3455we54',
    title : 'manos grill & pizza',
    cuisine : ['pizza','halal','grill3'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide3,
    restaurant_slug : 'manos-grill-pizza'
  },
  {
    id: 'skfe3345xcgg54',
    title : 'Guildford Kebab House',
    cuisine : ['kebab','burger','healthy4'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide4,
    restaurant_slug : 'guildford-kebab-house'
  },
  {
    id: 'skfesf3v34554',
    title : 'Walk 2 Wok - Kilburn',
    cuisine : ['pizza','pasta','burger5'],
    rate : '3.2',
    status : 'closed',
    freeDelivery : true,
    deliveryTime : '30 - 45 min',
    image : slide6,
    restaurant_slug : 'walk-2-wok-kilburn'
  },
  {
    id: 'skfe3452sd3d54',
    title : 'moores walk cafe',
    cuisine : ['sandwich','italian','burger8'],
    rate : '2.2',
    status : 'open',
    freeDelivery : true,
    deliveryTime : '30 - 40 min',
    image : slide2,
    restaurant_slug : 'moores-walk-cafe'
  },
  {
    id: 'skfe34345534554',
    title : 'manos grill & pizza',
    cuisine : ['pizza','halal','grill7'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide3,
    restaurant_slug : 'manos-grill-pizza'
  },
  {
    id: 'skfe3455wxxf2vd4',
    title : 'Guildford Kebab House',
    cuisine : ['kebab','burger','healthy8'],
    rate : '4.2',
    status : 'pre-order',
    freeDelivery : false,
    deliveryTime : '30 - 60 min',
    image : slide2,
    restaurant_slug : 'guildford-kebab-house'
  },
  
];

const dataSwiperCuisine = [
  {
    id: '1skfe34554',
    title : 'barbeque',
    desc : '253 restaurant',
    image : cuisineImage
  },  {
    id: '1skf2e34554',
    title : 'kebab',
    desc : '53 restaurant',
    image : cuisineImage2
  },
  {
    id: '2skfe34554',
    title : 'italian',
    desc : '25 restaurant',
    image : cuisineImage3
  },
  {
    id: '1sk344fe34554',
    title : 'mexican',
    desc : '21 restaurant',
    image : cuisineImage4
  },
  {
    id: '1sk4',
    title : 'persian',
    desc : '12 restaurant',
    image : cuisineImage5
  },
  {
    id: '1skfe3453354',
    title : 'english',
    desc : '45 restaurant',
    image : cuisineImage6
  },
  {
    id: '134554',
    title : 'fish',
    desc : '87 restaurant',
    image : cuisineImage7
  },
  {
    id: '1skfedd34554',
    title : 'breakfast',
    desc : '99 restaurant',
    image : cuisineImage8
  },
  {
    id: '1skfe34552224',
    title : 'dessert',
    desc : '100 restaurant',
    image : cuisineImage9
  },
  {
    id: '1skfe3455dws4',
    title : 'gluten-free',
    desc : '432 restaurant',
    image : cuisineImage10
  },
  {
    id: '1554',
    title : 'vegan',
    desc : '17 restaurant',
    image : cuisineImage11
  },
  
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <BannerSearch/>
      </section>
      
      <section>
        <SwiperSlider data={dataSwiper}/>
      </section>

      <section className='newest'>
        <SwiperSliderLong data={dataSwiper}/>
      </section>

      <section className='absoluteSection'>
        <AbsoluteSection/>
      </section>

      <section className='cuisineSection'>
        <CuisineSwiper data={dataSwiperCuisine} />
      </section>

      <section className='mobileAppSection'>
        <MobileAppSection />
      </section>

      <section className='citiesSection bgfff'>
        <SwiperCities data={dataSwiperCuisine} />
      </section>

      <section className='lastSection'>
        <MoreInfo/>
      </section>

      <div className='subscRibe'>
        <SubsCribe/>
      </div>

    </main>
  )
}
