import React from 'react';
import '../loader/loader.css';

const Loader = () => {
    return (
        <div className='loader-overlay'>
          <div className='loader'></div>
        </div>
    );
};

export default Loader;