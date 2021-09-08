import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const status = useSelector(status => status.common.isLoading)
  const display:;
  return (
    <div className='loading-container'>
      <span>Little loading ...</span>
    </div>
  );
}
