'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '@/components/store/MerchantDetail.module.css';
import AllergyFood from '../AllergyFood/AllergyFood';
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';
import ListItemOrder from '../ListItemOrder/ListItemOrder';
import TotalBasket from '../TotalBasket/TotalBasket';
import ChangeOrderType from '../ChangeOrderType/ChangeOrderType';
import { cartCtx } from '@/context/CartContext';
import { ViewContext } from '@/context/ViewContext';
import DeliveryFee from '../DeliveryFee/DeliveryFee';


const CartComponent = ({data}) => {


    const menuLinkParent = useRef(null);
    const cardTag = useRef(null);
    const cardRef = useRef(null);
 
    const [isMenuFixedd, setIsMenuFixedd] = useState(false);
  
    // context
    const {addItem,cartItemState} = useContext(cartCtx); 
    const { setCartModal , cartModal } = useContext(ViewContext);
  
    useEffect(() => {
      // console.log(data);
    //   console.log(detailShop);
      window.addEventListener('scroll', handleScroll,{ passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  
    }, []);
  
    function handleScroll() {
      /*card*/
      const { top: cardtop } = cardTag.current.getBoundingClientRect();
      setIsMenuFixedd(cardtop <= -80);
    }
  return (
<div ref={cardTag} className={styles.cardSidebar}>
    <div ref={cardRef} className={styles.foodAllergy}>
    <AllergyFood phone={'07133291243'} />
  </div>
  <div 
  className={styles.card}
  style={isMenuFixedd?{position : 'fixed',top :'10px',width : '327px'} : {position : 'relative',top :'auto' , width : '100%'}}
  >
    <DeliveryAddress/>
    <DeliveryFee/>
    {
      cartItemState.length?
    <div>
    <ListItemOrder />
    <TotalBasket/>
    </div>
      :
      <p className='roboto400'>No Item added yet!</p>
    }
    <ChangeOrderType/>
    <button className='btnBlue'>Go to Checkout</button>
  </div>
 </div>
  )
}

export default CartComponent