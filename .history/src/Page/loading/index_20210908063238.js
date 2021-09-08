import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading({ loading }) {
  console.log(a);
  const a = loading;
  let display = '';

  if (a === true) {
    display = 'block';
  }
  {
    display = 'none';
  }

  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
