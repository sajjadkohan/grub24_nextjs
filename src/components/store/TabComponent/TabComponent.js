'use client';
import React from 'react'
import { Tabs } from 'antd';
import styles from '@/components/store/MerchantDetail.module.css';
import MenuComponent from '../MenuComponent/MenuComponent';
import OpeningHours from '../OpeningHours/OpeningHours/OpeningHours';
import Reviews from '../Reviews/Reviews/Reviews';
import LocationView from '../LocationView/LocationView';
import Information from '../Information/Information';

const operations = <button>Extra Action</button>;

const onChange = (key) => {
    // console.log(key);
  };


const TabComponent = ({data}) => {

  const items = [
    {
      key: '1',
      label: <span className={`${styles.tabTitle} roboto400`}>Menu</span>,
      children: <MenuComponent data={data.menu} />,
    },
    {
      key: '2',
      label: <span className={`${styles.tabTitle} roboto400`}>Opening Hourse</span>,
      children: <OpeningHours/> ,
    },
    {
      key: '3',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Reviews <span className={styles.badge}>26</span></span>,
      children: <Reviews/>,
    },
    {
      key: '4',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Map</span>,
      children: <LocationView/>,
    },
    {
      key: '5',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Information</span>,
      children: <Information/>,
    },
    {
      key: '6',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Booking</span>,
      children: <Information/>
    },
  ];

  return (
    <div className={`${styles.tabComponent} tabComponent`}>
        <Tabs tabBarExtraContent={operations} data={data} defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default TabComponent