import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const EventCard = ({ type, title, description, location, id, imageLink, date }) => {
    return (
        <div className='bg-[#fafafa] border border-gray-500/20 rounded-md flex gap-6 px-5  py-5' >
            {/* image */}
            <div id="left" className='w-1/2 h-[23rem]'>
                <img src={imageLink} alt="event name" className='rounded-md object-cover w-full h-full ' />
            </div>
            {/* description */}
            <div id="right" className='w-1/2 flex flex-col justify-between'>
                <div className='flex  flex-col gap-2.5'>
                    <h1 className='font-medium bg-green-300/80 text-green-950 w-fit rounded-md px-2 py-1'>{type}</h1>
                    <h1 className='text-3xl font-medium'>{title}</h1>
                    <h1 className='text-gray-900'>{date}</h1>
                    <p className='text-gray-700'>{description}</p>
                    <h1 className='font-medium text-gray-900 text-lg pt-1 flex items-center gap-2'><span className=' bg-gray-400/50 px-1.5 py-1.5 rounded-md'><FaLocationDot /></span>{location}</h1>
                </div>
                <div>
                    <button className='bg-dgreen  text-white font-medium px-5 py-2 rounded-md hover:bg-dgreen/90 dark:hover:bg-dgreen/80 transition-all duration-300 w-full'>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard