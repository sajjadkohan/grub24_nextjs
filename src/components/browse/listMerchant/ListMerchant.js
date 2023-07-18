'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ItemMerchant from './ItemMerchant';
import { MerchantCtx } from '@/context/MerchantContext';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/constanst';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '@/components/browse/BrowsePage.module.css';
import ReactLoading from 'react-loading';

const ListMerchant = ({  }) => {

  const [total, setTotal] = useState('');
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`);
      const newItems = response.data.result[0].list;
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems([...items, ...newItems]);
        // setMerchantListFn(res.data.result[0].list);
        setPageNumber(pageNumber + 1);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`)
    .then(res => {
      // console.log(res.data.result[0].list);
      setMerchantListFn(res.data.result[0].list);
      setDataMerchantStsteFn(res.data.result[0].cuis);
      setTotal(res.data.result[0].total)
      console.log(res.data.result[0].total);
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getData();
    fetchItems();
  }, []);


  const {setNumberPageFn,dataMerchantState,setDataMerchantStsteFn,merchantList,setMerchantListFn} = useContext(MerchantCtx);

  return (
    <>
      <div className='resultView roboto500 algCenter'>{total?total : <ReactLoading type={'spin'} className='mr10' color={'#aaa'} height={'5%'} width={'2%'} /> } results found</div>
      <InfiniteScroll
      dataLength={items.length}
      next={fetchItems}
      hasMore={hasMore}
      loader={<div className={styles.loadingMerchantList}><ReactLoading type={'bars'} color={'#028dee'} height={'3%'} width={'8%'} /> </div>}
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