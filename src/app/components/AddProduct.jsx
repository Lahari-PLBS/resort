"use client"

import React, { useState } from 'react'
import admin from './components.module.css'

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [amen, setAmen] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("")

  const recordHandler = async (e) => {
    e.preventDefault()

    const recordDetails = { title, price, offer, amen, desc, image }

    const data = new FormData()
    data.append('title', title);
    data.append('price', price);
    data.append('offer', offer);
    data.append('desc', desc);
    data.append('amen', amen);
    data.append('image', image);

    try {
      const response = await fetch(`https://resort-rho.vercel.app/api/admin/add-product`, {
        method: 'POST',
        body: data
      })
      const result = await response.json()
      if (result.success) {
        alert("Record Added Successfully")
        setTitle("")
        setPrice("")
        setOffer("")
        setDesc("")
        setAmen("")
        setImage("")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${admin.container} px-4`}>
      <h1 className='text-center font-semibold text-xl'>Add Product</h1>
      <form onSubmit={recordHandler} encType='multipart/form-data' className='flex flex-col gap-4'>

        {/* Input Fields: All full-width on mobile, two-column on desktop */}
        <div className='flex flex-wrap md:flex-nowrap gap-4'>
          <div className='md:w-1/2'>
            <h3>Product Name</h3>
            <input className=' bg-white text-black p-3 rounded-md' placeholder='Enter product name' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='w-full md:w-1/2'>
            <h3>Price</h3>
            <input className=' bg-white text-black p-3 rounded-md' placeholder='Enter price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap gap-4'>
          <div className='w-full md:w-1/2'>
            <h3>Discount</h3>
            <input className=' bg-white text-black p-3 rounded-md' placeholder='Enter discount' type="number" value={offer} onChange={(e) => setOffer(e.target.value)} />
          </div>
          <div className='w-full md:w-1/2'>
            <h3>Amenities</h3>
            <input className=' bg-white text-black p-3 rounded-md' placeholder='Enter extra amenities' type="text" value={amen} onChange={(e) => setAmen(e.target.value)} />
          </div>
        </div>

        {/* Description Field */}
        <div>
          <h3>Description</h3>
          <textarea className='w-full bg-white text-black p-3 rounded-md' placeholder='Enter the description' rows="5" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="imageUpload"
            className="bg-white text-black rounded-md px-3 py-2 cursor-pointer inline-block w-fit"
          >
            Choose File
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <span className="text-white text-sm">{image?.name || 'No file chosen'}</span>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center font-semibold text-lg mt-4'>
          <button className='border-2 w-32 border-white p-3 rounded-md hover:bg-white hover:text-slate-800 cursor-pointer' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
