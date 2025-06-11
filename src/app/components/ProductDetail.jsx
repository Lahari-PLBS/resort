'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import CalenderComponent from '@/app/components/CalenderComponent'
import { bookingAction } from '../serverActions/bookingAction'
import { Circles } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'
import Footer from '../Footer'

const DynamicProduct = () => {
  const [record, setRecord] = useState("")
  const [selecetedDates, setSelectedDates] = useState(null)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const params = useParams();
  const { id } = params
  const router = useRouter()

  useEffect(() => {
    const dynamicProductHandler = async () => {
      const response = await fetch(`https://resort-rho.vercel.app/api/admin/product/${id}`)
      const newData = await response.json()
      setRecord(newData.data)
    }

    dynamicProductHandler()
  }, [])

  const bookingHandler = async () => {
    if (!selecetedDates) {
      alert("Please select booking dates");
      return;
    }

    const bookingDetails = { record, selecetedDates };
    try {
      const response = await bookingAction(bookingDetails);
      if (response.success) {
        router.push("/confirmation");
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  const handleDateSelect = (dates) => {
    setSelectedDates(dates)
  }

  return (
    <div className='bg-gray-100 text-slate-800 mt-24 mb-12 p-4 rounded-md shadow-xl m-3 overflow-x-hidden min-h-screen'>
      {record ? (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <h2 className="font-semibold text-2xl md:text-3xl mb-2">{record.title}</h2>
              <img
                src={record.image}
                alt={record.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-md"
              />
              <div className="font-semibold text-md mt-2 text-lg">Rs.{record.price}</div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 mt-4 md:mt-7">
              <div className="mb-4">
                <h3 className="font-semibold text-lg md:text-xl">Description:</h3>
                <p className="text-base md:text-lg">{record.desc}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg md:text-xl">Amenities:</h3>
                <div>
                  {/* {record.amen.map((item, i) => (
                  <div className="flex items-start text-base md:text-lg" key={i}>
                    <span className="text-sm mt-1 text-orange-400">*</span>
                    <p className="ml-2">{item}</p>
                  </div>
                ))} */}
                  {record.amen.filter(item => item.trim() !== "").map((item, i) => (
                    <div className="flex items-start text-base md:text-lg" key={i}>
                      <span className="text-sm mt-2 text-orange-400">*</span>
                      <p className="ml-2">{item}</p>
                    </div>
                  ))}

                </div>
              </div>

              <div className="mb-4">
                <button className="bg-amber-200 text-black py-1 px-3 rounded-md font-medium">
                  <span className='font-bold'>Discount: </span>{record.offer}%
                </button>
              </div>

              {/* Calendar & Button */}
              {/* <CalenderComponent onDatesSelect={handleDateSelect} /> */}
              {/* Calendar & Button */}
              <div className="mb-4 w-full overflow-x-auto md:overflow-visible">
                <CalenderComponent onDatesSelect={handleDateSelect} />
              </div>

              <div className="mt-4">
                <button
                  className="bg-slate-800 text-white p-2 rounded-md border border-transparent cursor-pointer transform transition-transform duration-200 hover:scale-105"
                  onClick={bookingHandler}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>) : (
        <div className="flex justify-center items-center h-[60vh]">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}
    </div>
  )
}

export default DynamicProduct
