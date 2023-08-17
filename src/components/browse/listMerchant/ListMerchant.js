'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ItemMerchant from './ItemMerchant';
import { MerchantCtx } from '@/context/MerchantContext';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/constanst';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '@/components/browse/BrowsePage.module.css';
import ReactLoading from 'react-loading';
import { filterCtx } from '@/context/FilterContext';

const ListMerchant = ({  }) => {

  // state
  const [total, setTotal] = useState('');
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumberState, setPageNumberState] = useState(1);
  // const [loadingComponent,setLoadingComponent] = useState(null);

  // context
  const {byDelivery} = useContext(filterCtx);
  const {
    dataMerchantState,
    merchantList,
    setMerchantList,
    setDataMerchantState,
    pageNumber,
    setPageNumber,
    totalMerchant,
    setTotalMerchant
    } = useContext(MerchantCtx);

  // filter state

  const [sortBy,setSortBy] = useState({
    title : 'sortBy',
    key : '&sort_filter',
    value : '='
  });
  // const [byDelivery,setByDelivery] = useState(
  //   {
  //     title : 'byDelivery',
  //     key : '&filter_delivery_type',
  //     value : '='
  // }
  // );
  const [minimumOrder,setMinimumOrder] = useState(
    {
      title : 'minimumOrder',
      key : '&filter_minimum',
      value : '='
  }
  );

  // context


  // برای لود شدن مرچنت های بیشتر از این متد استفاده میشود
  // fetch data
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`);
      const newItems = response.data.result[0].list;
      if (!newItems) {
        setHasMore(false);
      } else {
        setMerchantList([...merchantList, ...newItems]);
        setItems([...items, ...newItems]);
        setPageNumber(pageNumber + 1);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // برای نمایش مرچنت ها از این متد استفاده میشود
  // fetch data
  const getData = async () => {

    try {
      const response = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`,{
        cache : 'reload',
        method : 'GET'
      });
  
      const data = await response.json();
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data);
      if(data) {
        setMerchantList(data.result[0].list);
        setItems(data.result[0].list);
        setDataMerchantState(data.result[0].cuis);
        setTotalMerchant(data.result[0].total);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }


    // await axios.get()
    // .then(res => {

    // })
    // .catch(err => console.log(err))
  }

  const getData2 = async () => {

    try {
      const response = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}${byDelivery.key}=6`,{
        cache : 'reload',
        method : 'GET'
      });
  
      const data = await response.json();
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data);
      if(data) {
        setMerchantList(data.result[0].list);
        setDataMerchantState(data.result[0].cuis);
        setTotalMerchant(data.result[0].total);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }


    // await axios.get()
    // .then(res => {

    // })
    // .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
    fetchItems();
  }, []);


  return (
    <>
    
      <div className='resultView roboto500 algCenter'>{totalMerchant?totalMerchant : <ReactLoading type={'spin'} className='mr10' color={'#aaa'} height={'5%'} width={'2%'} /> } results found</div>
      <button onClick={() => getData2()}>get new data</button>
      <InfiniteScroll
      dataLength={items.length}
      next={fetchItems}
      hasMore={hasMore}
      loader={<div className={styles.loadingMerchantList}>{hasMore?<ReactLoading type={'bars'} color={'#028dee'} height={'3%'} width={'8%'} /> : <></>} </div>}
    >
      <div className={`dFlexProMax flexWrap ${styles.merchantListParent}`}>
        {
        // merchantList.length > 1 ?
          items.map((item) => (
            <>
            <ItemMerchant cuisine={dataMerchantState} key={item.merchant_id} data={item} />
            </>
          )) 
          // : <h1>wait for data | loading</h1>
          } 
          {/* <div className='loading_c'>loading . . .</div> */}
      </div>
      </InfiniteScroll>

    </>
  );
};

export default ListMerchant;