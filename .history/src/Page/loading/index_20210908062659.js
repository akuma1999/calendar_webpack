import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading({ loading }) {
  const a = loading;
  let display = '';

  if (a) {
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
