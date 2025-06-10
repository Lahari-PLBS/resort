

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
    console.log(recordDetails)

    const data = new FormData()
    data.append('title', title);
    data.append('price', price);
    data.append('offer', offer);
    data.append('desc', desc);
    data.append('amen', amen);
    data.append('image', image);

    try {
      const response = await fetch(`http://localhost:3000/api/admin/add-product`, {
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
    <div className={admin.container}>
      <h1 className='text-center font-semibold text-xl'>Add Record</h1>
      <form onSubmit={recordHandler} encType='multipart/form-data'>
        <div className={admin.fields}>
          <div>
            <h3>Title</h3>
            <input className='bg-white text-black p-2 rounded-md mb-3' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <h3>Price</h3>
            <input className='bg-white text-black p-2 rounded-md mb-3' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <div className={admin.fields}>
          <div className="">
            <h3>Offer</h3>
            <input className='bg-white text-black p-2 rounded-md mb-3' type="number" value={offer} onChange={(e) => setOffer(e.target.value)} />
          </div>
          <div className="">
            <h3>Amenities</h3>
            <input className='bg-white text-black p-2 rounded-md mb-3' type="text" value={amen} onChange={(e) => setAmen(e.target.value)} />
          </div>
        </div>
        <div className={admin.textField}>
          <h3>Description</h3>
          <textarea className='bg-white text-black p-2 rounded-md mb-3' type="text" rows="5" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        {/* <div className='flex ml-46 mr-3'>
          <h3>Upload Image</h3>
          <input className="bg-gray-200 border border-gray-600 rounded-sm w-[100px]" type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        </div> */}
        {/* <div className='flex ml-46 mr-3'>
          <h3 className='mr-3'>Upload Image:</h3>
          <input className="bg-white text-black underline rounded-md mb-3" type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        </div> */}
        <div className="mb-3 ml-46">
          <label
            htmlFor="imageUpload"
            className="bg-white text-black rounded-md px-3 py-1 cursor-pointer inline-block"
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
          <span className="ml-2 text-white">{image?.name || 'No file chosen'}</span>
        </div>




        <div className='flex justify-center font-semibold text-lg'>
          <button className='border-2 w-30 border-white p-3 rounded-md hover:bg-white hover:text-slate-800 cursor-pointer' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct