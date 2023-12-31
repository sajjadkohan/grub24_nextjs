'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import ItemFood from '../ItemFood/ItemFood';
import { BASE_URL } from '../../../../utils/constanst';
import AllergyFood from '../AllergyFood/AllergyFood';
import { LuSearch } from 'react-icons/lu';
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';
import DeliveryFee from '../DeliveryFee/DeliveryFee';
import ListItemOrder from '../ListItemOrder/ListItemOrder';
import TotalBasket from '../TotalBasket/TotalBasket';
import ChangeOrderType from '../ChangeOrderType/ChangeOrderType';
import ItemViewAddToCard from '../ItemViewAddToCard/ItemViewAddToCard';
import { cartCtx } from '@/context/CartContext';
import { ViewContext } from '@/context/ViewContext';


const MenuComponent = ({data,detailShop}) => {
  const menuRef = useRef(null);
  const categoryFoodRef = useRef(null);
  const menuLinkParent = useRef(null);
  const titleCategoryTag =useRef(null);
  // const cardTag = useRef(null);
  // const cardRef = useRef(null);

  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [distance, setDistance] = useState(null);
  const [activeItem, setActiveItem] = useState();
  
  // const [isMenuFixedd, setIsMenuFixedd] = useState(false);
  // const [distancee, setDistancee] = useState(null);
  // const [activeItemm, setActiveItemm] = useState();

  // const [showCategory,setShowCeategory] = useState(false);

  // context
  const {addItem,cartItemState} = useContext(cartCtx); 
  const { setCartModal , cartModal } = useContext(ViewContext);

  useEffect(() => {
    // console.log(data);
    console.log(detailShop);
    window.addEventListener('scroll', handleScroll,{ passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  function handleScroll() {
    const spaceTop = menuLinkParent.current.getBoundingClientRect().top;
    // const heightWindow = window.innerHeight;
    const menuHeight = menuRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const { top: menuTop } = menuRef.current.getBoundingClientRect();
    const { top: categoryFoodTop } = categoryFoodRef.current.getBoundingClientRect();
    const isFixed = scrollTop > menuRef.current.offsetTop && menuHeight > windowHeight;
    setIsMenuFixed(categoryFoodTop <= 50);
    setDistance(categoryFoodTop - menuTop);

    /*card*/
    // const spaceTopCard = menuLinkParent.current.getBoundingClientRect().top;
    // const cardHeight = menuRef.current.offsetHeight;
    // const windowHeightt = window.innerHeight;
    // const scrollTopp = window.scrollY;

    // // const { top: menuTopp } = cardTag.current.getBoundingClientRect();
    // // console.log();
    // const { top: cardtop } = cardTag.current.getBoundingClientRect();
    // const isFixedd = cardtop > cardTag.current.offsetTop && menuHeight > windowHeight;
    // setIsMenuFixedd(cardtop <= 50);
    // setDistance(categoryFoodTopp - menuTopp);

  }

  return (
    <div ref={categoryFoodRef} className={`${styles.menuComponent} dFlex`}>
{/*category*/}  <div ref={menuRef}
  
  className={styles.categoryFood}
  >

  <div
  ref={menuLinkParent}
  className={styles.categoryFoodContent}
  style={{ position: isMenuFixed ? 'fixed' : 'relative', bottom: isMenuFixed ? 0 : 0 }}
  >
      {
        data.length? 
    
    data.map(item => {
      return (
        <Link 
        activeClass={styles.activeStyle}
        key={item.category_id} 
        className={`${item.category_id} ${styles.categoryLink} roboto400 algCenter` } 
        to={item.category_id} 
        smooth={true}
        spy={true}
        offset={-40}
        duration={500}>

          {item.category_name}
          {item.photo ? <Image className='ml5' src={`https://grub24s3.s3.eu-west-2.amazonaws.com/upload/${item.photo}`} width={20} height={20} alt='logo category' /> : <span></span>}

        </Link>
              )
            })
              : <h1>LOADING</h1>
      }
  </div>

{/*category*/}  </div>

{/*food Item*/} <div className={styles.foodItemParent}>

                <form className={styles.searchBox}>
                  <input placeholder='Search by Menu' className={styles.inputSearch} type='text' />
                  <button type='submit' className={styles.searchBtn} ><LuSearch/></button>
                </form>

              {data.length ? (
                data.map((element, index) => {
                  // console.log(index);
                  // console.log(element);
                  return (
                    <div key={element.category_id} className={`${styles.categoryContent} roboto300 w100`} id={element.category_id}>
                    <div key={index} className={`${styles.content} dFlexProMax flexWrap`}>
                    <div className={`${styles.categoryTitle} algCenter w100 `}>
                      <div ref={titleCategoryTag} key={element.category_name} className={`roboto700`}>{element.category_name}</div>
                      {element.photo ? <Image className='ml5' src={`https://grub24s3.s3.eu-west-2.amazonaws.com/upload/${element.photo}`} width={20} height={20} alt='logo category' /> : <span></span>}
                    </div>
                      {element.item.map((item) => (
                          <ItemFood key={item.id} item={item} />
                      ))}
                    </div>
                    </div>
                    
                  );
                })
                ) : (<h1>LOADING</h1>)
                }
{/*food Item*/} </div>

                     {cartModal&&<ItemViewAddToCard/>} 


    </div>
  );
};

export default MenuComponent