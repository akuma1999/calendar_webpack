import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const loading = useSelector((state) => state.common2.isLoading);

  let display = '';
  console.log(loading);

  if (loading) {
    display = 'flex';
  } else {
    display = 'none';
  }

  // console.log(display);
  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
