'use client'

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Circles } from 'react-loader-spinner'

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const registerHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userRegisterDetails = { username, email, password }
    console.log(userRegisterDetails)

    try {
      const response = await registerAction(userRegisterDetails);
      if (response.success) {
        alert("Registration success")
        router.push("/login")
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error)
      setError("An unexpected error occurred");
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
        {
          loading ? (
            <Circles
              height="80"
              width="80"
              color="white"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <form onSubmit={registerHandler} className='bg-[#87cefabf] bg-opacity-90 p-8 rounded shadow-lg'>
              <h1 style={{ borderBottom: '1px solid white' }} className="text-[#36454f] text-center font-semibold text-2xl">Register </h1>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              <h3 className='text-[#36454f] font-semibold mt-2'>Username</h3>
              <input className='bg-white p-2 text-black rounded-md' placeholder='Enter Username' type="text" name='username' onChange={(e) => setUsername(e.target.value)} />
              <h3 className='text-[#36454f] font-semibold mt-2'>Email</h3>
              <input className='bg-white p-2 text-black rounded-md' placeholder='Enter email' type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
              <h3 className='text-[#36454f] font-semibold mt-2'>Password</h3>
              <input className='bg-white p-2 text-black rounded-md' placeholder='Enter password' type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
              <br />
              <div className='text-center'><button   className="mt-4 bg-white text-black p-2 rounded-md w-20 cursor-pointer hover:scale-110 hover:font-semibold transition-transform duration-200" type='submit'>Register</button></div>
              <Link href="/login" className='text-white text-center block underline text-xl hover:text-amber-800 hover:font-semibold mt-3'>
                Already Registered? Login
              </Link>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default RegisterForm