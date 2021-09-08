import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading({ loading }) {
  const [display, setDisplay] = React.useState('');
  const status = useSelector((state) => state.common2.isLoading);
  if (status) {
    setDisplay('block');
  }
  {
    setDisplay('none');
  }

  return (
    <div className='loading-container' style={{ display: display }}>
      <span>Little loading ...</span>
    </div>
  );
}
