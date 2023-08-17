import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';
import Link from 'next/link';
import RowDashed from '../OpeningHours/RowDashed/RowDashed';


const Information = () => {
  return (
    <div className={styles.information}>
        <div className={`${styles.title} dFlexPro`}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.755" height="21.755" viewBox="0 0 21.755 21.755">
                <path id="Path_2683" data-name="Path 2683" d="M11248.187,13556.563a10.877,10.877,0,1,1,7.69,3.189A10.875,10.875,0,0,1,11248.187,13556.563Zm1.444-13.936a8.843,8.843,0,1,0,6.247-2.585,8.841,8.841,0,0,0-6.247,2.585Zm4.717,11.192v-5.437a1.53,1.53,0,0,1,3.057,0l0,5.438a1.533,1.533,0,0,1-3.061,0Zm.019-9.857a1.513,1.513,0,1,1,1.514,1.552,1.531,1.531,0,0,1-1.515-1.555Z" transform="translate(-11245.004 -13537.998)" fill="#89a5b9"></path>
                </svg>
            </span>
            <h5>Information</h5>
        </div>
        <div className={styles.content}>
            <p className={`${styles.text} roboto400`}>
            Here at Atlantic Bay located at 10 Redhill Road, Hitchin , SG5 2 NJ we've got something for everyone, whether it's a spicy hot or mild dish you're looking for. With our wide selection of kebab,Healthy,Fish and Chips,English,Fish,Desserts,Fast food,sweets dishes and flavours there's something to keep everyone satisfied. So whether you're feeling adventurous or have some specific tastes, we have the perfect dish waiting for you. All without leaving home! With the help of Grub24 it couldn't be more simple to order and pay - just add the item to your cart, select your delivery or collection time that suits you and checkout in seconds!
            Then after you have eaten we would love to hear what you think of our food and service by leaving feedback on the Grub24 website or App.
            All dishes may contain traces of the following allergens: Gluten, Crustaceans, Eggs, Fish, Peanuts, Soybeans, Milk, Nuts (e.g. almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachio nuts, macadamia nuts), Celery, Mustard, Sesame, Sulphur dioxide/sulphites, Lupin, Molluscs. For any questions regarding the allergen contents of specific dishes please contact the restaurant directly.
            </p>
        </div>

        <div className={`${styles.title} dFlexPro`}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.852" height="23" viewBox="0 0 23.852 23">
                <g id="icon-delivery-information" transform="translate(-2 -3)">
                <path id="Path_185" data-name="Path 185" d="M5.407,25.148H4.556A2.556,2.556,0,0,1,2,22.593V5.556A2.556,2.556,0,0,1,4.556,3H21.593a2.556,2.556,0,0,1,2.556,2.556V15.02a.852.852,0,1,1-1.7,0V5.556a.852.852,0,0,0-.852-.852H4.556a.852.852,0,0,0-.852.852V22.593a.852.852,0,0,0,.852.852h.852a.852.852,0,0,1,0,1.7Zm10.563,0H10.519a.852.852,0,0,1,0-1.7H15.97a.852.852,0,1,1,0,1.7Z" fill="#89a5b9"></path>
                <path id="Path_186" data-name="Path 186" d="M16.963,11.578a.852.852,0,0,1-.392-.094l-2.164-1.133-2.164,1.167A.852.852,0,0,1,11,10.726V3.852A.852.852,0,0,1,11.852,3h5.111a.852.852,0,0,1,.852.852v6.874a.852.852,0,0,1-.409.733A.912.912,0,0,1,16.963,11.578ZM14.407,8.537a.852.852,0,0,1,.392.094l1.312.69V4.7H12.7V9.321l1.312-.69A.852.852,0,0,1,14.407,8.537ZM20.37,26a6.815,6.815,0,1,1,6.815-6.815A6.815,6.815,0,0,1,20.37,26Zm0-11.926a5.111,5.111,0,1,0,5.111,5.111A5.111,5.111,0,0,0,20.37,14.074Z" transform="translate(-1.333)" fill="#89a5b9"></path>
                <path id="Path_187" data-name="Path 187" d="M21.852,22.111A.858.858,0,0,1,21,21.259V17.852a.852.852,0,0,1,1.7,0v1.814l1.235-.852a.852.852,0,0,1,.937,1.414l-2.556,1.7A.852.852,0,0,1,21.852,22.111Z" transform="translate(-2.815 -2.074)" fill="#89a5b9"></path>
                <circle id="Ellipse_20" data-name="Ellipse 20" cx="1" cy="1" r="1" transform="translate(7 23)" fill="#89a5b9"></circle>
                </g>
                </svg>
            </span>
            <h5>Delivery information </h5>
        </div>
        <div className={styles.content}>
            <div className={`${styles.text} ${styles.informationContent} roboto400`}>
            <RowDashed left='Base delivery fee' active={false} right='0' />
            <RowDashed left='Minimum order value' active={false} right='£12.00' />
            <RowDashed left='Maximum delivery mileage ' active={false} right='6 mi' />
            <RowDashed left='Average delivery time' active={false} right='60-90 min' />

            </div>
        </div>

        <div className={`${styles.title} dFlexPro`}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.099" height="22.058" viewBox="0 0 22.099 22.058">
                <g id="icon-contact" transform="translate(-0.934 -1)">
                <path id="Path_188" data-name="Path 188" d="M17.483,15.649a2.205,2.205,0,0,0-3.124,0l-1.066,1.066a19.213,19.213,0,0,1-3.315-2.661,19.566,19.566,0,0,1-2.661-3.315L8.384,9.673a2.205,2.205,0,0,0,0-3.124L6.3,4.477A2.154,2.154,0,0,0,4.753,3.83h0a2.205,2.205,0,0,0-1.566.647l-1,.992A4.682,4.682,0,0,0,.983,9.328c.235,2.756,2.043,6.071,4.829,8.864s6.137,4.594,8.894,4.858a5.784,5.784,0,0,0,.617,0,4.461,4.461,0,0,0,3.241-1.205l.992-1A2.205,2.205,0,0,0,20.2,19.28a2.154,2.154,0,0,0-.647-1.551Zm1.036,4.16-1,.992a3.359,3.359,0,0,1-2.69.735c-2.389-.206-5.432-1.9-7.945-4.41S2.68,11.591,2.453,9.2a3.33,3.33,0,0,1,.735-2.69l1.036-1A.735.735,0,0,1,4.746,5.3h0a.735.735,0,0,1,.522.213l2.08,2.1a.735.735,0,0,1,0,1.036l-1.47,1.47a.735.735,0,0,0-.118.889,20.2,20.2,0,0,0,3.183,4.1,20.2,20.2,0,0,0,4.1,3.183.735.735,0,0,0,.889-.118l1.47-1.47a.735.735,0,0,1,1.036,0l2.08,2.08h0a.718.718,0,0,1,0,1.022ZM19.8,4.227A10.966,10.966,0,0,0,12.008,1a.735.735,0,0,0,0,1.47,9.555,9.555,0,0,1,9.555,9.636.735.735,0,0,0,.735.735h0a.735.735,0,0,0,.735-.735A10.959,10.959,0,0,0,19.8,4.227Z" transform="translate(0 0)" fill="#89a5b9"></path>
                <path id="Path_189" data-name="Path 189" d="M19.524,10.106a4.41,4.41,0,0,1,1.3,3.168.735.735,0,0,0,.735.735h0a.735.735,0,0,0,.735-.735,5.88,5.88,0,0,0-5.88-5.954.735.735,0,1,0,0,1.47,4.41,4.41,0,0,1,3.109,1.316Z" transform="translate(-3.908 -1.675)" fill="#89a5b9"></path>
                </g>
                </svg>
            </span>
            <h5>Contact </h5>
        </div>
        <div className={styles.content}>
            <p className={`${styles.text} roboto400`}>
            If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request. 
            </p>

            <div className={`${styles.text} ${styles.rowBot} roboto300`}>
            <span>Website :</span>  <Link className={`${styles.blueTag} roboto500`} href='/'>https://atlanticbayhitchin.co.uk/</Link>
            </div>

            <div className={`${styles.text} ${styles.rowBot} roboto300`}>
            <span> Phone number:</span>  <Link className={`${styles.blueTag} roboto500`} href="tel:+123456789">01752 847000</Link>
            </div>

        </div>

    </div>
  )
}

export default Information