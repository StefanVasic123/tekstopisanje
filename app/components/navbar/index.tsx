import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex flex justify-between items-center p-4'>
      <div className='flex items-center space-x-4'>
        <div>
          <a className='group relative'>
            <Link href='/'>
              <span className='mr-5'>tekstovi</span>
            </Link>
            <div className='hidden group-hover:block absolute top-full left-0 bg-white border border-gray-300 p-4'>
              <Link href='/'>
                <p>narodne</p>
              </Link>
              <Link href='/'>
                <p>zabavne</p>
              </Link>
              <Link href='/'>
                <p>moderne</p>
              </Link>
            </div>
          </a>
        </div>
      </div>
      <div>
        <Link href='/admin'>
          <p>admin</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
