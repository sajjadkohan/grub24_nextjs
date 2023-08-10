import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';

const Prices = () => {
  return (
    <div className={`${styles.formGroup} ${styles.prices} dFlex`}>

    <div className={`${styles.listAddon} ${styles.radioButtonParent} w100`}>
    <div className={styles.title}>Prices</div>
    <div className={`${styles.content} dFlex`}>

      <label className={`${styles.radioBox} dFlexPro`}>

      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
        <div className={styles.left}>
            <i className={styles.i}></i>
        </div>
        <div className={styles.right}>
            <span className={`${styles.labelText} dBlock`}>Large</span>
            <small className={styles.labelText}>£10.80</small>
        </div>

      </label>

      <label className={`${styles.radioBox} ${styles.active} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <div className={styles.left}>
            <i className={styles.i}></i>
        </div>
        <div className={styles.right}>
            <span className={`${styles.labelText} dBlock`}>Small</span>
            <small className={styles.labelText}>£7.30</small>
        </div>
      </label>

    </div>

    </div>

    </div>
  )
}

export default Prices