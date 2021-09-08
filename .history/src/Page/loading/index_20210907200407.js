import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const status = useSelector((state) => state.common2.isLoading);
  const [display, setDisplay] = React.useState('none');
  console.log(status);
  const display = status ? 'block' : 'none';
  console.log(display);
  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
