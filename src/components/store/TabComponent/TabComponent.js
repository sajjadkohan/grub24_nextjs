'use client';
import React from 'react'
import { Tabs } from 'antd';
import styles from '@/components/store/MerchantDetail.module.css';
import MenuComponent from '../MenuComponent/MenuComponent';

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
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Reviews <span className={styles.badge}>26</span></span>,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Map</span>,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '5',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Information</span>,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '6',
      label: <span className={`${styles.tabTitle} roboto400 dFlex`}>Booking</span>,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div className={`${styles.tabComponent} tabComponent`}>
        <Tabs data={data} defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default TabComponent