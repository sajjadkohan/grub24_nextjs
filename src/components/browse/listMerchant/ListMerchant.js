'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ItemMerchant from './ItemMerchant';
import { MerchantCtx } from '@/context/MerchantContext';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/constanst';
import InfiniteScroll from 'react-infinite-scroll-component';

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

  useEffect(() => {
    fetchItems();
  }, []);


  const {setNumberPageFn,dataMerchantState,setDataMerchantStsteFn,merchantList,setMerchantListFn} = useContext(MerchantCtx);


  const getData = async () => {
    await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`)
    .then(res => {
      // console.log(res.data.result[0].list);
      setMerchantListFn(res.data.result[0].list);
      setDataMerchantStsteFn(res.data.result[0].cuis);
      setTotal(res.data.result[0].total)
      // console.log();
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <>
      <div className='resultView roboto500'>{total?total : <span>wait . . .</span>} results found</div>
      <InfiniteScroll
      dataLength={items.length}
      next={fetchItems}
      hasMore={hasMore}
      loader={<h4>Loading ... </h4>}
    >
      <div className='dFlexProMax flexWrap'>
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