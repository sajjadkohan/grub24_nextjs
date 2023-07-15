import React from 'react'
import { BASE_URL } from '../../../../utils/constanst';
import ListMerchant from './ListMerchant';


const GetMerchants = async () => {

    const res = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=1`,{
        method : 'GET',
        cache : 'no-store'
       })
    const dataMerchants = await res.json()


  return (
    <>
    <ListMerchant data={dataMerchants} />
    </>
  )
}

export default GetMerchants