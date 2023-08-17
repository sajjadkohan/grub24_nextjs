
import React from 'react'
import ListMerchant from './ListMerchant';
import { FilterContext } from '@/context/FilterContext';

const GetMerchants = async () => {

    // const res = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=1`,{
    //     method : 'GET',
    //     cache : 'no-cache'
    //    })
    // const dataMerchants = await res.json()

  return (
    <>

    <ListMerchant  />
  
    </>
  )
}

export default GetMerchants