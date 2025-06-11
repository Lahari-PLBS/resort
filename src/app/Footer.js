import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-3 mt-10 fixed z-10 bottom-0 left-0 right-0 w-full">
            <div className="max-w-6xl mx-auto px-4 flex flex-col justify-between items-center">
                {/* Logo / Site Name */}
                <div className="mb-0 md:mb-0 text-center md:text-left">
                    <h2 className="text-lg font-bold text-amber-400">
                        <span className="text-2xl">H</span>oliday <span className="text-2xl">R</span>esort
                    </h2>
                    {/* <p className="text-sm">&copy; {new Date().getFullYear()} Holiday Resort. All rights reserved.</p> */}
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Holiday Resort. All rights reserved.</p>


                {/* Social Icons */}
                <div className="flex space-x-6 text-white">
                    <Link href="#" aria-label="Instagram">
                        <svg className="w-6 h-6 hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                    </Link>

                    <Link href="#" aria-label="Twitter">
                        <svg className="w-6 h-6 hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.35 8.52 8.52 0 01-2.7 1.03A4.25 4.25 0 0016.5 4c-2.36 0-4.28 1.92-4.28 4.28 0 .33.04.66.11.97A12.1 12.1 0 013 5.13a4.28 4.28 0 001.32 5.7 4.22 4.22 0 01-1.94-.54v.05c0 2 1.42 3.68 3.3 4.06-.35.1-.72.15-1.1.15-.27 0-.53-.03-.78-.08.53 1.65 2.06 2.85 3.87 2.88A8.55 8.55 0 012 19.54 12.07 12.07 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0022.46 6z" />
                        </svg>
                    </Link>

                    <Link href="#" aria-label="Facebook">
                        <svg className="w-6 h-6 hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </Link>

                    <Link href="#" aria-label="Google">
                        <svg className="w-6 h-6 hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.6 12.227c0-.737-.066-1.444-.19-2.13H12v4.042h5.436c-.234 1.227-.938 2.27-1.997 2.96v2.45h3.23c1.89-1.74 2.983-4.296 2.983-7.322z" />
                            <path d="M12 22c2.7 0 4.964-.9 6.62-2.444l-3.23-2.45c-.894.6-2.04.96-3.39.96-2.606 0-4.814-1.76-5.606-4.13H3.014v2.594C4.662 19.722 8.048 22 12 22z" />
                            <path d="M6.394 13.936A5.996 5.996 0 016 12c0-.672.12-1.316.34-1.936V7.47H3.014A9.997 9.997 0 002 12c0 1.63.392 3.17 1.014 4.53l3.38-2.594z" />
                            <path d="M12 6.364c1.47 0 2.787.51 3.828 1.51l2.87-2.87C16.964 3.67 14.7 2.67 12 2.67c-3.952 0-7.338 2.278-8.986 5.53l3.38 2.594c.792-2.37 3-4.13 5.606-4.13z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
