'use client';
import React from 'react'
import styles from '../../components/filter/Filter.module.css'
import {Scrollbar} from 'react-scrollbars-custom'


const ByCuisinesr = () => {

    const cuisinesr = [
     'American'
    ,'Indian'
    ,'Mediterranean'
    ,'Sandwiches'
    ,'Barbeque'
    ,'kebab'
    ,'Italian'
    ,'Mexican'
    ,'Sushi'
    ,'Burgers'
    ,'Greek'
    ,'Japanese'
    ,'Middle Eastern'
    ,'Thai'
    ,'Chinese'
    ,'Healthy'
    ,'Korean'
    ,'Pizza'
    ,'Vegetarian'
    ,'alcohol'
    ,'Halal'
    ,'Bulgarian'
    ,'Grill'
    ,'Vegan'
    ,'Gluten-free'
    ,'Fish and Chips'
    ,'Chicken'
    ,'Persian'
    ,'English'
    ,'Fish'
    ,'Breakfast'
    ,'Pasta'
    ,'Seafood'
    ,'Arabic'
    ,'Desserts'
    ,'Frozen food'
    ,'Meal prep'
    ,'Butchers'
    ,'HMC'
    ,'Grocery'
    ,'Fast food'
    ,'sweets'
    ,'supermarket'
    ,'Afghan'
    ,'Caribbean'
    ,'Jamaican'
    ]

  return (
    <>
    <div className={styles.byCuisiners+' '+styles.parent}>
        <div className={styles.titleFilter+' '+'roboto700'}>By Cuisinesr</div>
        <Scrollbar height={'12vw'}>
        <div className={styles.body}>
        {
            cuisinesr&& cuisinesr.map(item => {
                return(
                    <div className={styles.row+' '+'dFlexPro'}>
                    <div className={styles.checkBox}></div>
                    <span className={styles.text+' '+'roboto400'}>{item}</span>
                    </div>
                )
            })
        }
        </div>
        </Scrollbar>





    </div>
    </>
  )
}

export default ByCuisinesr