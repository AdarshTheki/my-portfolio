import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen px-4'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-xl text-gray-300 mb-6'>Oops! Page not found.</p>
        <Link
          to='/'
          className='inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition'>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
