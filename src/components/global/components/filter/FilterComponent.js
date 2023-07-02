import React from 'react'
import SortBy from './SortBy'
import styles from '../../components/filter/Filter.module.css';
import ViewFilter from './ViewFilter';
import ByDelivery from './ByDelivery';
import ByCuisinesr from './ByCuisinesr';
import MinimumDelivery from './MinimumDelivery';

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