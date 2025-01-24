import React from 'react'
import { MdDateRange } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { eventData } from "../export"
import EventCard from './EventCard';
import { GrNext, GrPrevious } from "react-icons/gr";



const Event = () => {
  return (
    <section className='py-16 '>
      <div >
        <h1 className='text-[2.5rem] font-semibold text-gray-950 text-center py-5'>Our Latest Events</h1>

        <div>
          {/* Swiper Component */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // breakpoints={{
            //   480: { slidesPerView: 1, spaceBetween: 10 },
            //   640: { slidesPerView: 2, spaceBetween: 15 },
            //   768: { slidesPerView: 2, spaceBetween: 20 },
            //   1024: { slidesPerView: 3, spaceBetween: 25 },
            //   1280: { slidesPerView: 4, spaceBetween: 30 },
            // }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative "
          >
            {eventData.map((event, index) => (
              <SwiperSlide

                key={index}
              >
                <EventCard id={event.id} imageLink={event.imageLink} description={event.description} location={event.location} title={event.title} type={event.type} date={event.date} />
              </SwiperSlide>
            ))}

            {/* Custom arrows */}
            <div className="flex justify-end gap-4 pt-4">
              <div className="custom-prev   px-4 py-4  border  z-10 cursor-pointer bg-gray-300/80 boder border-gray-500/30 rounded-full  ">
                <GrPrevious />

              </div>
              <div className="custom-next px-4 py-4  border  z-10 cursor-pointer bg-gray-300/80 boder border-gray-500/30 rounded-full   ">
                <GrNext />

              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Event