import React, {useState} from 'react';

const Loading = function() {
  const [style, setStyle] = useState({opacity: 1});

  setTimeout(function() {
    setStyle({opacity: 0, zIndex: '-10'});
  }, 2000);

  return (
    <div className='loading float v' style={style}>
      <h3>loading...</h3>
    </div>
  )
}

export default Loading;



