import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading({ loading }) {
  const status = useSelector((loading) => state.common2.isLoading);
  React.useEffect(() => {
    if (status) {
      setDisplay('block');
    }
    {
      setDisplay('none');
    }
  }, [status]);

  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
