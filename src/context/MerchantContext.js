'use client';
import React, { createContext, useState } from 'react'
import { BASE_URL } from '../../utils/constanst';
import axios from 'axios';

export const MerchantCtx = createContext();

const MerchantContext = ({children}) => {

    const [pageNumber,setPageNumber] = useState(1);
    const [dataMerchantState,setDataMerchantState] = useState();
    const [merchantList,setMerchantList] = useState([]);

    // console.log(merchantList);

    const setNumberPageFn = () => {
        // console.log('test');
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        // console.log(pageNumber);
    }

    const setMerchantListFn = (data) => {
      setMerchantList(...merchantList,...data);
      merchantList.length
    }

    const setDataMerchantStsteFn = (data) => {
      setDataMerchantState(data);
    }



  return (
    <MerchantCtx.Provider value={{
      setNumberPageFn,
      setMerchantListFn,
      setDataMerchantStsteFn,
      merchantList,
      pageNumber,
      dataMerchantState
      }}>
        {children}
    </MerchantCtx.Provider>
  )
}

export default MerchantContext;