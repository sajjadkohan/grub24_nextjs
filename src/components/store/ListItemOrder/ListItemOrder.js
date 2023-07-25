import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css'
import ItemOrder from '../ItemOrder/ItemOrder';
import { Collapse } from 'antd';
import ItemOrderAction from '../ItemOrderAction/ItemOrderAction';
import ItemOrderDetail from '../ItemOrderDetail/ItemOrderDetail';

const ListItemOrder = () => {

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

  const items = dataCard.map((item, index) => {
    return {
      key: index + 1,
      label: <ItemOrderAction itemData={item} />,
      children: <ItemOrderDetail itemData={item}  />,
    };
  });

  return (
    <div className={`${styles.listItemOrder}`}>
      <Collapse items={items} onChange={onChange} />
      {
        dataCard?
        dataCard.map(item => {
          return(
            <>
            <div className='itemOrder'>
              <ItemOrder dataItemFood={item} allItem={dataCard} />
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
