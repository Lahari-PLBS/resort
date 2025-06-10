"use client";

import React, { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";




const UserInvoice = ({ userId }) => {
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("extractId:", userId);


  const invoiceHandler = async () => {
    try {
      const response = await fetch(`https://resort-rho.vercel.app/api/users/${userId}`);
      const newData = await response.json();
      console.log("newData:", newData);

      if (response.ok) {
        setInvoice(newData.data);
      } else {
        throw new Error(newData.message || 'Failed to fetch invoice data');
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    invoiceHandler();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!invoice || !invoice.bookings) {
    return <div>No invoice data available</div>;
  }

  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const deleteBooking = async (bookingId) => {
    const isConfirmed = window.confirm("Are you sure to delete this booking?");
    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`https://resort-rho.vercel.app/api/users/${bookingId}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (response.ok) {
        setInvoice((prevInvoice) => ({
          ...prevInvoice,
          bookings: prevInvoice.bookings.filter((item) => item._id !== bookingId),
        }));
        console.log("Booking deleted:", result);
      } else {
        throw new Error(result.message || 'Failed to delete booking');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking');
    }
  };


  return (
    <div className="ml-10 mr-10 mt-24 mb-24 p-3">
      {/* <h1 align="center" className='font-semibold text-xl mb-3'>My Bookings</h1> */}

      {invoice.bookings.length > 0 ? (
        invoice.bookings.map((item, index) => {
          const days = calculateDays(item.startDate, item.endDate);
          const totalAmount = days * item.price;

          return (
            <div key={item._id}>
              <div className="flex justify-between items-center rounded-sm p-3 mb-3">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className='underline font-semibold text-lg'>{item.productName}</h3>
                    <p>Booking dates from {item.startDate} to {item.endDate}</p>
                    <h4 className="font-semibold">Total Amount: {totalAmount}</h4>
                  </div>
                </div>

                <div align="center">
                  <button
                    onClick={() => deleteBooking(item._id)}
                    className="bg-white text-black p-2 rounded-md mb-3 cursor-pointer hover:bg-black hover:text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              {index < invoice.bookings.length - 1 && (
                <hr className="border-white border-t-2 my-3" />
              )}
            </div>
          );
        })
      ) : (
        <div className="no-bookings text-center mt-10 flex flex-col items-center">
          <img className='h-100 w-100 mb-7' src="https://media.istockphoto.com/id/1500807620/vector/suitcase-icon-flat-design-on-white-background.jpg?s=612x612&w=0&k=20&c=UF-OEI3d4s68vI6v0fglFskib0ZFMcdr0r0Cn6oPcT0=" />
          <p className="text-xl mb-10 font-semibold">No bookings available</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-white border border-slate-800 text-slate-800 px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-200"
          >
            Book Now
          </button>
        </div>

      )}
    </div>

  );
};

export default UserInvoice;