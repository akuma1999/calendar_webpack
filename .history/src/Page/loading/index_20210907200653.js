import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading() {
  const status = useSelector((state) => state.common2.isLoading);
  React.useEffect(() => {
    const display = status ? 'block' : 'none';
  }, [status]);

  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
