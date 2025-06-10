

import Link from 'next/link'
import React from 'react'

const UserNavigation = ({ userName }) => {
  return (
    <div class="bg-slate-800  text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="">
        <Link href="/" className="">
          <h2 className='text-lg underline logo'><span><span className='text-[40px]'>H</span>oliday</span> <span className='text-[40px]'>R</span>esort</h2>
        </Link>
      </div>

      <div className="">
        Call now : 123 456 789
      </div>
      <Link href="/invoice" className=''>
        <div className="bookings transition duration-200 hover:scale-105 hover:underline">
          My Bookings
        </div>
      </Link>
      {/* <p>Welcome:
        <span style={{ color: 'purple', marginLeft: '10px', fontSize: '1.2rem', border: 'none' }}>
          {userName}
        </span>
      </p> */}
      <p className="flex items-center">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span style={{ color: 'lightgreen', marginLeft: '5px', fontSize: '1.2rem', border: 'none' }}>
          {userName}
        </span>
      </p>
      {/* <Link href="/api/auth/signout" className=''>
        <div className="">
          Logout
        </div>
      </Link> */}
      <Link href="/api/auth/signout" className=''>
        <div className="flex items-center">
          <svg className="w-7 h-7 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default UserNavigation