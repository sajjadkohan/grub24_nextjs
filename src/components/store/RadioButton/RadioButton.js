import React from 'react'
import styles from '@/components/store/MerchantDetail.module.css';

const RadioButton = () => {
  return (
    <div className={`${styles.formGroup} ${styles.radioButton}`}>

    <div className={`${styles.listAddon} ${styles.radioButtonParent}`}>
    <div className={styles.title}>Pizza</div>
    <div className={styles.content}>

      <label className={`${styles.radioBox} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <i className={styles.i}></i>
      <span className={styles.labelText}>Tasty Chicken</span>
      </label>

      <label className={`${styles.radioBox} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <i className={styles.i}></i>
      <span className={styles.labelText}>Tasty Chicken</span>
      </label>

      <label className={`${styles.radioBox} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <i className={styles.i}></i>
      <span className={styles.labelText}>Tasty Chicken</span>
      </label>

      <label className={`${styles.radioBox} dFlexPro`}>
      <input type="radio" name="pack_cat[14227][0]" id="cat_pack_14227_0_9" parentname="Pizza" required="required"  value="108944|Tasty Chicken" />
      <i className={styles.i}></i>
      <span className={styles.labelText}>Tasty Chicken</span>
      </label>

    </div>

    </div>

  </div>
  )
}

export default RadioButton