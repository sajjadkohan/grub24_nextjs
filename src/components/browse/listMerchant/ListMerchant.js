'use client'
import React, { useEffect } from 'react'
import ItemMerchant from './ItemMerchant'

const ListMerchant = ({data}) => {

  useEffect(()=> {
    console.log(data.result[0].list);
  },[])

  return (
    <>
      <div className='resultView roboto500'>{data.result[0].total}  results found</div>
    <div className='dFlexProMax flexWrap'>
        {data&&data.result[0].list.map(item => <ItemMerchant key={item.merchant_id} data={item} />)}
    </div>
    </>
  )
}

export default ListMerchant