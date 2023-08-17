import React, {useState, useEffect} from 'react';

const Loading = function() {
  const [style, setStyle] = useState({opacity: 1});

  useEffect(()=>{
    setTimeout(function() {
      setStyle({opacity: 0});

      setTimeout(()=>{setStyle({opacity: 0, zIndex: '-10'})}, 1000);
    }, 2000);
  }, []);

  return (
    <div className='loading float v' style={style}>
      <h3>loading...</h3>
    </div>
  )
}

export default Loading;



