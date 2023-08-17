import React from 'react';
import styles from '@/components/store/MerchantDetail.module.css';


const ChooseBox = ({title,boxes}) => {
  return (
    <div className={`${styles.formGroup} ${styles.chooseBox} ${styles.prices} dFlex`}>

    <div className={`${styles.listAddon} ${styles.radioButtonParent} w100`}>
    <div className={styles.title}>{title}</div>
    <div className={`${styles.content} dFlex`}>

      <label className={`${styles.radioBox} dFlexPro`}>

      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
        <div className={styles.left}>
            <span className={styles.icon}>+</span>
        </div>
        <div className={styles.right}>
            <span className={`${styles.labelText} dBlock`}>With Salad -</span>
        </div>

      </label>

      <label className={`${styles.radioBox} ${styles.active} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <div className={styles.left}>
        <span className={styles.icon}>+</span>
        </div>
        <div className={styles.right}>
            <span className={`${styles.labelText} dBlock`}>No Salad -</span>
        </div>
      </label>

    </div>

    </div>

  </div>
  )
}

export default ChooseBox