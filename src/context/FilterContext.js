'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { MerchantCtx } from "./MerchantContext";
import { BASE_URL } from "../../utils/constanst";

import {useSearchParams,useRouter, usePathname} from 'next/navigation';

export const filterCtx = createContext();

export function FilterContext ({children}) {

    const router = useRouter();
    const getSearchParams = useSearchParams();
    const getPathName = usePathname();

    // context
    const {
        dataMerchantState,
        merchantList,
        setMerchantList,
        setDataMerchantState,
        pageNumber,
        setPageNumber,
        totalMerchant,
        setTotalMerchant,
        hasMore,
        setHasMore
        } = useContext(MerchantCtx);

    const[paramsState,setParamsState] = useState('empty');
    const[newParamsState,setNewParamsState] = useState('');
    let allParams = '';
    let newParams2 = '';

    const [defaultState,setDefaultState] = useState({
        title : 'defaultState',
        key : '',
        value : ''
    });    

    const [sortBy,setSortBy] = useState({
        title : 'sortBy',
        key : '&sort_filter',
        value : 'test'
    });
    const [sortByS,setSortByS] = useState({
        title : 'sortBy',
        key : '&sort_filter',
        value : 'test'
    });


    const [byDelivery,setByDelivery] = useState(
    {
        title : 'byDelivery',
        key : '&filter_delivery_type',
        value : 0,
    });

    const[filterState,setFilterState] = useState({
        sortBy : {
          title : 'sortBy',
          key : '&sort_filter=',
          value : ''
        },
        minimumOrder : {
          title : 'minimumOrder',
          key : '&filter_minimum=',
          value : ''
        },
        freeDelivery : {
          title : 'minimumOrder',
          key : '&filter_promo=',
          value : 'free-delivery,'
        },
        byDelivery :   {
            title : 'byDelivery',
            key : '&filter_delivery_type',
            value : 0,
        }
      });

    // const [minimumOrder,setMinimumOrder] = useState(
    // {
    //     title : 'minimumOrder',
    //     key : '&filter_minimum',
    //     value : '='
    // });

    const [test,setTest] = useState(NaN);

    const selectFilter = (titleFilter,valueFilter) => {
        switch (titleFilter) {
            case value:
                
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {
        let newUrl = window.location.href.split('/browse')[1];
        console.log(newUrl);
        setParamsState(`${newUrl}`)
    },[])

    // functions for get data
    const getDataFn = async () => {
        // setHasMore(true);
        setPageNumber(1);
        console.log('get data function بار اولی که درخواست میزند');
        let newUrl2 = window.location.href.split('/browse')[1];

        await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=1${newUrl2}`)
        .then(res => {
            // console.log(window.location.href);
            // allParams = window.location.href;
            // newParams2 = allParams.split('/browse?')[1];
            // console.log(newUrl2);
            // newUrl2? setParamsState(`${newUrl2}`) : setParamsState('');
            
            // setPageNumber(1);
            res.data.result[0].list? setMerchantList(res.data.result[0].list) : [];
            setDataMerchantState(res.data.result[0].cuis);
            setTotalMerchant(res.data.result[0].total);
        })
    } 

    const applySingleFilter = async (title,valueFilter) => {

        // setHasMore(true);
        setPageNumber(2);
        switch (title) {

        case 'sortBy':

            setHasMore(true);
            // set state for styles (toggle active class)
            setSortBy({...sortBy,value : valueFilter});

            allParams = `${getPathName}?${sortBy.key}=${valueFilter}`;
            router.push(allParams);
            newParams2 = allParams.split('/browse?')[1];
            setParamsState(newParams2);

            await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=1${newParams2}`)
                .then(res => {
                    res.data.result[0].list? setMerchantList(res.data.result[0].list) : [];
                    setDataMerchantState(res.data.result[0].cuis);
                    setTotalMerchant(res.data.result[0].total);
                })
        break;

        case 'byDelivery':

            setHasMore(true);

            // set state for styles (toggle active class)
            setByDelivery({...byDelivery,value : valueFilter});

            allParams = `${getPathName}?${byDelivery.key}=${valueFilter}`;
            router.push(allParams);
            newParams2 = allParams.split('/browse?')[1];
            setParamsState((prevState) =>  prevState+newParams2);

            await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=1${newParams2}`)
                .then(res => {
                    res.data.result[0].list? setMerchantList(res.data.result[0].list) : [];
                    setDataMerchantState(res.data.result[0].cuis);
                    setTotalMerchant(res.data.result[0].total);
                })
        break;

        case 'defaultState': 
        // const getDataDefault = async () => {
        //     setDefaultState((prevState) => ({ ...prevState, value: valueFilter }));
        //     setPageNumber(1);
        //     try {
        //       const response = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}`,{
        //         cache : 'no-store',
        //         method : 'GET'
        //       });
          
        //       const data = await response.json();
        //       console.log('>>>>',data);
              
        //       if(data) {
        //         data.result[0].list? setMerchantList(data.result[0].list) : []
        //         // setItems(data.result[0].list);
        //         setDataMerchantState(data.result[0].cuis);
        //         setTotalMerchant(data.result[0].total);
        //       } else {
        //         console.log('error');
        //       }
        //     } catch (error) {
        //       console.log(error);
        //     }
        // }
        // getDataDefault();
        break;
        default:
            break;
    }

    }


return (
    <filterCtx.Provider value={{
        byDelivery,
        sortBy,
        defaultState,
        paramsState,
        applySingleFilter,
        selectFilter,
        getDataFn,
        test
    }}>
    {children}
    </filterCtx.Provider>
)

}