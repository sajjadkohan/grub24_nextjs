'use client';
import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';

const RateDisplayReveiw = ({rate}) => {
  return (
    <div className='rateDisplay dFlexPro jstCnr'>
      <Rater rating={rate} interactive={false}  />
      <h4 className='roboto500 ml10'>{rate}.0</h4>
    </div>
  )
}

export default RateDisplayReveiw