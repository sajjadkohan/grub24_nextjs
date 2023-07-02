import React from 'react'
import ItemMerchant from './ItemMerchant'

const ListMerchant = ({data}) => {
  return (
    <div>
        {data&&data.map(item => <ItemMerchant/>)}
    </div>
  )
}

export default ListMerchant