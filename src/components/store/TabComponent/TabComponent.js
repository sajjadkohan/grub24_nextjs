'use client';
import React from 'react'
import { Tabs } from 'antd';
import styles from '@/components/store/MerchantDetail.module.css';

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <span className={styles.tabTitle}>Menu</span>,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

const TabComponent = () => {
  return (
    <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default TabComponent