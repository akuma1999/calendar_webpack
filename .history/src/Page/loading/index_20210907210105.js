import React from 'react';
import { useSelector } from 'react-redux';
// import style
import './styels.scss';
//

export default function Loading({ loading }) {
  const [display, setDisplay] = React.useState('');
  if (loading) {
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
