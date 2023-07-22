'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import ItemFood from '../ItemFood/ItemFood';
import { BASE_URL } from '../../../../utils/constanst';

const MenuComponent = ({data}) => {
  const menuRef = useRef(null);
  const categoryFoodRef = useRef(null);
  const menuLinkParent = useRef(null);
  const titleCategoryTag =useRef(null)

  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [distance, setDistance] = useState(null);
  const [activeItem, setActiveItem] = useState();
  // const [showCategory,setShowCeategory] = useState(false);

  useEffect(() => {
    console.log(data);
    window.addEventListener('scroll', handleScroll,{ passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  function handleScroll() {
    const spaceTop = menuLinkParent.current.getBoundingClientRect().top;
    const heightWindow = window.innerHeight;
    const menuHeight = menuRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const { top: menuTop } = menuRef.current.getBoundingClientRect();
    const { top: categoryFoodTop } = categoryFoodRef.current.getBoundingClientRect();
    const isFixed = scrollTop > menuRef.current.offsetTop && menuHeight > windowHeight;
    setIsMenuFixed(categoryFoodTop <= 50);
    setDistance(categoryFoodTop - menuTop);

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
        activeClass={styles.active}
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

{/*card sidebar*/} <div className={styles.cardSidebar}>
                    <div className={styles.foodAllergy}>
                      food allergy
                    </div>
                    <div className={styles.card}>card</div>
{/*card sidebar*/} </div>

    </div>
  );
};

export default MenuComponent