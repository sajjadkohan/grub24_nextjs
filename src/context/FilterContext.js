'use client'
import axios from "axios";
import { createContext, useContext, useState } from "react"
import { MerchantCtx } from "./MerchantContext";
import { BASE_URL } from "../../utils/constanst";

export const filterCtx = createContext();

export function FilterContext ({children}) {

    // context
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
    
    
    const [SingleFilter,setSingleFilter] = useState([
        {
            title : 'sortBy',
            key : '&sort_filter',
            value : ''
        },
        {
            title : 'byDelivery',
            key : '&filter_delivery_type',
            value : ''
        },
        {
            title : 'minimumOrder',
            key : '&filter_minimum',
            value : ''
        }
    ]);

    const [sortBy,setSortBy] = useState({
        title : 'sortBy',
        key : '&sort_filter',
        value : ''
    });

    const [byDelivery,setByDelivery] = useState(
    {
        title : 'byDelivery',
        key : '&filter_delivery_type',
        value : 2,
    });

    const [minimumOrder,setMinimumOrder] = useState(
    {
        title : 'minimumOrder',
        key : '&filter_minimum',
        value : '='
    });

    // const getData2 = async () => {

    //     try {
    //       const response = await fetch(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}${byDelivery.key}=${byDelivery.value}`,{
    //         cache : 'reload',
    //         method : 'GET'
    //       });
      
    //       const data = await response.json();
    //       console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data);
    //       if(data) {
    //         setMerchantList(data.result[0].list);
    //         setDataMerchantState(data.result[0].cuis);
    //         setTotalMerchant(data.result[0].total);
    //       } else {
    //         console.log('error');
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    
    
    //     // await axios.get()
    //     // .then(res => {
    
    //     // })
    //     // .catch(err => console.log(err))
    //   }

    const applySingleFilter = async (title,valueFilter,activeClass) => {
    switch (title) {
        case 'sortBy':
            setSortBy({...sortBy,value : valueFilter});
            break;

        case 'byDelivery':
            setByDelivery({...byDelivery,value : valueFilter});
            await axios.get(`${BASE_URL}/NextApi/BrowsItems?page=${pageNumber}${byDelivery.key}=${byDelivery.value}`)
            .then(res => {
                setMerchantList(res.data.result[0].list);
                setDataMerchantState(res.data.result[0].cuis);
                setTotalMerchant(res.data.result[0].total);
            })
            break;
    
        default:
            break;
    }
    console.log(byDelivery);
    // console.log();

    }

    const applyFilter = () => {

    }

return (
    <filterCtx.Provider value={{
        SingleFilter,
        byDelivery,
        applySingleFilter,
        applyFilter
    }}>
    {children}
    </filterCtx.Provider>
)

}