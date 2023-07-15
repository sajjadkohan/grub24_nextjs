import React from 'react'
import styles from '../../../components/store/MerchantDetail.module.css';
import Head from '@/components/store/Head/Head';
import { BASE_URL } from '../../../../utils/constanst';
import TabComponent from '@/components/store/TabComponent/TabComponent';

const MerchantDetail= async(props) => {
  console.log(props.params.slug);

  const res = await fetch(`${BASE_URL}/NextApi/GetPruduct?slug=${props.params.slugn}`,{
    method : 'GET',
    cache : 'no-store'
   })
const detailsShop = await res.json()

  return (
    <div className={styles.merchantDetail}>
      <div className='container1170'>
        <Head data={detailsShop.result[0]} />
        <TabComponent data={detailsShop.result[0]} />
      </div>
    </div>
  )
}

export default MerchantDetail