import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const status = useSelector((status) => status.common2.isLoading);
  console.log(status);
  const display = status ? 'block' : 'none';
  console.log(display);
  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
