'use client';
import React, { useContext } from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import ItemOrder from '../ItemOrder/ItemOrder';
import { Collapse } from 'antd';
import ItemOrderAction from '../ItemOrderAction/ItemOrderAction';
import ItemOrderDetail from '../ItemOrderDetail/ItemOrderDetail';
import { cartCtx } from '@/context/CartContext';

const ListItemOrder = () => {

  const {cartItemState} = useContext(cartCtx); 

  const dataCard = [
    {
      count : '2',
      nameFood : 'Neapolitana Pizza ',
      categoryName : 'pizza',
      price : '15.50',
      description : 'test 123',
      addon : [
        {
          nameCategoryAddon : 'Choose Your Crust',
          count : '1',
          nameFoodAddon : 'Cheese Stuffed Crust',
          priceFAddon : '2.50',
          priceAddon : '2.50',

        },        
        {
          nameCategoryAddon : 'Choose Your Base Sauce',
          count : '',
          nameFoodAddon : '',
          priceFAddon : '',
          priceAddon : '',
          description : '' 
        },
        {
          nameCategoryAddon : 'Choose Your Drink',
          count : '2',
          nameFoodAddon : 'Coke',
          priceFAddon : '1.0',
          priceAddon : '1.0',
          description : '' 
        },
      ]
    },
    {
      count : '1',
      nameFood : 'Garlic Pizza bread  ',
      categoryName : 'SideOrder',
      price : '10.50',
      description : '',
      addon : [
        {
          nameCategoryAddon : 'Choose Your Drink2',
          count : '1',
          nameFoodAddon : 'Cheese Stuffed Crust',
          priceFAddon : '2.50',
          priceAddon : '2.50',
          description : 'test 123' 
        },        
        {
          nameCategoryAddon : 'Choose Your Salad',
          count : '2',
          nameFoodAddon : 'Pepsi',
          priceFAddon : '1.0',
          priceAddon : '1.0',
          description : '' 
        },
      ]
    },
    {
      count : '3',
      nameFood : 'Garlic Pizza ',
      categoryName : 'Pizzas',
      price : '10.50',
      description : '',
      addon : []
    }
  ];

  const onChange = (key) => {
    console.log(key);
  };

  const items = cartItemState? 
  cartItemState.map((item, index) => {
    return {
      key: index + 1,
      label: <ItemOrderAction key={item.item_id} itemData={item} />,
      children: <ItemOrderDetail key={item.item_id} itemData={item}  />,
    };
  }) 
  :
   [];

  return (
    <div className={`${styles.listItemOrder}`}>
      <Collapse items={items} onChange={onChange} />
      {
        cartItemState?
        cartItemState.map(item => {
          return(
            <>
            <div className='itemOrder'>
              <ItemOrder key={item.item_id} dataItemFood={item} allItem={cartItemState} />
            </div>
            </>
          )
        })
        :
        <h1>loading</h1>
      }
    </div>
  )
}


export default ListItemOrder;
