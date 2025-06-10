



"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import CalenderComponent from '@/app/components/CalenderComponent'
import { bookingAction } from '../serverActions/bookingAction'
import { Circles } from 'react-loader-spinner'



const DynamicProduct = () => {
  const [record, setRecord] = useState("")

  const [selecetedDates, setSelectedDates] = useState(null)

  const params = useParams();

  const { id } = params

  console.log("dynamic ClientId:", id)

  const dynamicProductHandler = async () => {

    const response = await fetch(`https://resort-rho.vercel.app/api/admin/product/${id}`)
    const newData = await response.json()

    console.log("dynaic data:", newData)
    setRecord(newData.data)

  }

  useEffect(() => {
    dynamicProductHandler()
  }, [])

  const bookingHandler = async () => {
    if (!selecetedDates) {
      alert("Please select booking dates")
      return
    }

    const bookingDetails = { record, selecetedDates }
    try {
      const response = await bookingAction(bookingDetails)
      if (response.success) {
        alert("Booking Successfull")
      }
    } catch (error) {

    }

  }

  const handleDateSelect = (dates) => {
    setSelectedDates(dates)
    console.log("dates coming from calenderComp:", dates)
  }

  return (
    <div className='bg-gray-100 text-slate-800 mt-24 p-3 rounded-md shadow-xl m-3'>
      {/* <CalenderComponent onDatesSelect={handleDateSelect} /> */}
      {/* <Link href="/">
        <p align="center">Go Back</p>
        </Link> */}
      {record ?
        (<div className="">
          <div className="flex ">
            <div className="">
              <div className="font-semibold text-3xl mb-2">
                <h2>{record.title}</h2>
              </div>
              <img src={record.image} alt={record.title} className="h-[500px] w-[1000px] " />
              <div className="font-semibold text-md mt-2">Rs.{record.price}</div>
            </div>
            <div className="ml-10 mt-7">
              {/* <div className="font-semibold">Rs.{record.price}</div> */}
              <div className='mt-2 mb-2'>
                <h3 className='font-semibold text-xl'>Description:</h3>
                <p className="text-lg">{record.desc}</p>
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Amenities:</h3>
                <div className="">
                  {record.amen.map((item, i) => {
                    return (
                      <div className="flex text-lg" key={i}>
                        <span className='text-sm mt-1 text-orange-400'>*</span>
                        <p className='ml-2'>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="">
                <button><span className='font-bold'>Discount: </span>{record.offer}%</button>
              </div>
              <CalenderComponent onDatesSelect={handleDateSelect} />

              <div className="singleBtn">
                <button className="bg-slate-800 text-white p-2 rounded-md m-2 border border-transparent cursor-pointer transform transition-transform duration-200 hover:scale-120" onClick={bookingHandler}>Book Now</button>
              </div>
              {/* <Link href="/">
                <p className='bg-blue-200 w-20 p-2 ml-3'>Go Back</p>
              </Link> */}
            </div>
          </div>

        </div>)
        : <h1 style={{ position: 'absolute', top: '50%', left: '50%' }}>    <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></h1>}
    </div>
  )


}

export default DynamicProduct
