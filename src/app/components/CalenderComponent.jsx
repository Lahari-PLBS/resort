

import { useState } from 'react';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalenderComponent = ({onDatesSelect}) => {
    const [showCalender, setShowCalender] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
        }
    ])

    const [selectedDates, setSelectedDates] = useState(null)

    const handleSelectDates = async()=>{
        const startDate = date[0].startDate.toLocaleDateString();
        const endDate = date[0].endDate.toLocaleDateString();
        
        setSelectedDates(`Selected Dates: ${startDate} - ${endDate}`)
        setShowCalender(false)

        const bookingDates = {startDate, endDate}

        console.log("selectedDates form calender:",bookingDates)

        if(onDatesSelect){
            onDatesSelect(bookingDates)
        }
    }

    const currentDate = new Date().toDateString();
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate()+1)

    const formattedDate = nextDate.toDateString()

  return (
    <div className='flex'>
            <div className="text-amber-600 mt-2 cursor-pointer" onClick={()=>setShowCalender(!showCalender)}>
                {!selectedDates && (
                    <>
                    {`${currentDate} - ${formattedDate}`}
                    </>
                )}
                {selectedDates && (
                    <div className="mt-3 underline cursor-pointer text-slate-600">
                        {selectedDates}
                    </div>
                )}
            </div>

    
        {showCalender && 
         <DateRange
         editableDateInputs={true}
         onChange={item => setDate([item.selection])}
         moveRangeOnFirstSelection={false}
         ranges={date}
          className='dateRange'
       />
        }
            <button onClick={handleSelectDates}
            className='ml-3 bg-transparent border border-black h-[50px] w-[150px] p-1 rounded-md text-[15px] hover:bg-slate-800 hover:text-white cursor-pointer'
            >Select Dates</button>

    </div>
  )
}

export default CalenderComponent
