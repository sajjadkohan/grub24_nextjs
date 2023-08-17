'use client'
import React, { useEffect, useRef, useState } from 'react'
import SortBy from './SortBy'
import styles from '../../components/filter/Filter.module.css';
import ViewFilter from './ViewFilter';
import ByDelivery from './ByDelivery';
import ByCuisinesr from './ByCuisinesr';
import MinimumDelivery from './MinimumDelivery';
import { FilterContext } from '@/context/FilterContext';
// import StickyBox from 'react-sticky-box';


const FilterComponent = () => {


  return (
          <div className={styles.filter}>
            <FilterContext>
            <SortBy />
            <ViewFilter />
            <ByDelivery />
            <ByCuisinesr />
            <MinimumDelivery />
            </FilterContext>
          </div>
  );
};

export default FilterComponent

