'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import { Link } from 'react-scroll';
import Image from 'next/image';
import ItemFood from '../ItemFood/ItemFood';

const MenuComponent = ({data}) => {
  const menuRef = useRef(null);
  const categoryFoodRef = useRef(null);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [distance, setDistance] = useState(null);
  const [activeItem, setActiveItem] = useState();

  const handleClick = (item) => {
    setActiveItem(item);
  }

  useEffect(() => {

    
    console.log('>>>>>>>>>',data);


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  function handleScroll() {
    const menuHeight = menuRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const { top: menuTop } = menuRef.current.getBoundingClientRect();
    const { top: categoryFoodTop } = categoryFoodRef.current.getBoundingClientRect();
    const isFixed = scrollTop > menuRef.current.offsetTop && menuHeight > windowHeight;
    setIsMenuFixed(categoryFoodTop <= 0);
    setDistance(categoryFoodTop - menuTop);
  }

  return (
    <div ref={categoryFoodRef} className={`${styles.menuComponent} dFlexPro`}>
      <div ref={menuRef}
        style={{ position: isMenuFixed ? 'fixed' : 'static', top: isMenuFixed ? 0 : 'auto' }}
        className={styles.categoryFood}>

          {
            data.length? 
        
        data.map(item => {
          return (
            <Link onClick={() => handleClick(item.category_id)} key={item.category_id} className={activeItem == item.category_id? `${item.category_id} ${styles.categoryLink} ${styles.active} roboto400` : `${item.category_id} ${styles.categoryLink} roboto400` } to={`${item.category_id}`} smooth={true} duration={500}>{item.category_name}</Link>
                 )
                })
                  : <h1>LOADING</h1>
          }
          </div>
          <div style={{ paddingTop: '50px', marginLeft: isMenuFixed? '20%' : '0%' }} className={styles.foodItemParent}>

              {data.length ? (
                data.map((element, index) => {
                  // console.log(index);
                  // console.log(element);
                  return (
                    <div key={element.category_id} className={`${styles.categoryContent} roboto300 w100`} id={element.category_id}>
                    <div key={index} className={`${styles.content} dFlexProMax flexWrap`}>
                    <div key={element.category_name} className={`${styles.categoryTitle} w100 roboto700`}>{element.category_name}</div>
                      {element.item.map((item) => (
                        <ItemFood key={item.id} item={item} />
                      ))}
                    </div>
                    </div>
                    
                  );
                })
                ) : (<h1>LOADING</h1>)
                }
      </div>
    </div>
  );
};

export default MenuComponent