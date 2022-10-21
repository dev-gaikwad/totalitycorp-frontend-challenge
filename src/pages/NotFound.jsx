import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className='notfound-hero'>
        <h1>OOPS! Page Not Found!</h1>
        <Link to='/'>Go to Homepage</Link>
      </div>
    </>
  );
}

export default NotFound;
