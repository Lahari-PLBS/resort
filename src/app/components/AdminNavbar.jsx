

import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
      <div className='bg-slate-800 text-white flex justify-between items-center p-4'>
        <div className="title">
          <h2 className='text-xl underline logo'><span>Holiday</span> Resort</h2>
        </div>
        {/* <p className='mr-30'>Welcome: Admin </p> */}
        <p className="flex items-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span style={{ color: 'lightgreen', marginRight: '55px', fontSize: '1.2rem', border: 'none' }}>
            Admin
          </span>
        </p>
        {/* <Link href="/api/auth/signout" className='link'>
          <div className="logout">
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
    </div>
  )
}

export default AdminNavbar