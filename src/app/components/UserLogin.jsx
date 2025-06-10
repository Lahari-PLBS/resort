

"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import bgImage from '../../../public/background.jpg'
import Image from 'next/image';
import { Circles } from 'react-loader-spinner'


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const loginHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const loginDetails = { email, password }
    console.log(loginDetails)

    try {
      const response = await loginAction(loginDetails)
      if (response.success) {
        router.push("/")
      } else {
        setError(response.message || "login failed, Invalid Credentials");
      }
    } catch (error) {
      setError("Invalid Credentials")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="relative min-h-screen">
  <Image
    src="/background.jpg"
    alt="Background"
    fill
    style={{ objectFit: 'cover' }}
    quality={75}
    priority
    className="z-0"
  />
  <div className="formContainer absolute inset-0 flex items-center justify-center z-10">
    {loading ? (
      <Circles
        height="50"
        width="50"
        color="white"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    ) : (
      <form onSubmit={loginHandler} className='bg-green-500 bg-opacity-90 p-8 rounded shadow-lg'>
        <h1 className='mb-3 text-2xl font-semibold text-white' align="center">Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h3>Email</h3>
        <input className='bg-white p-2 rounded-sm text-black;' type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
        <h3>Password</h3>
        <input className='bg-white p-2 rounded-sm text-black;' type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <div className='text-center mt-4'>
          <button className='bg-white text-black p-2 rounded-md w-20 cursor-pointer' type='submit'>Login</button>
        </div>
        <br />
        <div className='text-center'>
          <Link href="/register" className='underline text-white hover:text-yellow-300'>
          If not registered? Register
        </Link>
        </div>
      </form>
    )}
  </div>
</div>
    
  )
}

export default UserLogin