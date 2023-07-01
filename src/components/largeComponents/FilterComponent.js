import React from 'react'
import SortBy from '../smallComponents/filter/SortBy'
import styles from '../../styles/largeComponents/Filter.module.css';
import ViewFilter from '../smallComponents/filter/ViewFilter';
import ByDelivery from '../smallComponents/filter/ByDelivery';
import ByCuisinesr from '../smallComponents/filter/ByCuisinesr';
import MinimumDelivery from '../smallComponents/filter/MinimumDelivery';

const FilterComponent = () => {
  return (
    <div className={styles.filter}>
      <SortBy/>
      <ViewFilter/>
      <ByDelivery/>
      <ByCuisinesr/>
      <MinimumDelivery/>
    </div>
  )
}

export default FilterComponent