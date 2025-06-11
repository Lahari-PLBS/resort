'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react'

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <div className='bg-slate-800 text-white px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center fixed top-0 left-0 right-0 z-50'>

      {/* Logo + Mobile Toggle */}
      <div className="w-full md:w-auto flex justify-between items-center">
        <Link href="/" className="text-amber-400">
          <h2 className='md:text-sm font-extrabold logo'>
            <span className='lah1'>H</span>oliday<span className='lah1'>R</span>esort
          </h2>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-6 mt-2 md:mt-0">
        <Link href="/admin-list">
          <div className="text-xl hover:scale-105 hover:underline hover:font-semibold">Resorts</div>
        </Link>

        <div className="flex flex-col items-center ml-130">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className='text-amber-400 text-lg'>Admin</span>
        </div>

        <div onClick={() => signOut({ callbackUrl: '/login' })} className="cursor-pointer">
          <div className="flex items-center relative group">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 w-full space-y-3 bg-slate-700 p-4 rounded-lg shadow-lg text-sm">
          <Link href="/admin-list">
            <div className="block text-white hover:underline">Resorts</div>
          </Link>

          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-amber-400 font-semibold">Admin</span>
          </div>

          <div
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="text-red-400 hover:underline cursor-pointer"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminNavbar
