import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const loading = useSelector((state) => state.common2.isLoading);

  let display = '';
  console.log(loading);
  React.useEffect(() => {
    if (loading === true) {
      display = 'block';
    } else {
      display = 'none';
    }
  }, [loading]);

  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
