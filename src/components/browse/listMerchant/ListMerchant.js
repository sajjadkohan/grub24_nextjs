'use client';
import React, { useEffect, useState } from 'react'
import ItemMerchant from './ItemMerchant'

const ListMerchant = ({data}) => {

  const [listStateMt,setListStateMt] = useState([]);
  // const [scrollValue,setScrollValue] = useState(0);



  useEffect(()=> {
    setListStateMt(data.result[0].list)
    console.log(data.result[0]);
  },[])

  return (
    <>
      <div className='resultView roboto500'>{data.result[0].total}  results found</div>
    <div className='dFlexProMax flexWrap'>
        {listStateMt.length&&listStateMt.map(item => <ItemMerchant cuisine={data.result[0].quis} key={item.merchant_id} data={item} />)}
    </div>
    </>
  )
}

export default ListMerchant