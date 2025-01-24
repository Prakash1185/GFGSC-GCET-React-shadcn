import React from 'react'
import { FaArrowRight, FaCodeBranch } from 'react-icons/fa'
import hero from "../assets/hero.png"
import hero2 from "../assets/hero2.png"

const HeroSection = () => {
    return (
        <section className='relative mt-3 '>
            {/* introduction badge */}
            <div className='pt-16'>
                <h1 className='  w-fit text-sm rounded-full px-4 py-0.5  border border-gray-500/20 bg-white flex items-center justify-center gap-1 mx-auto select-none'><span className=''><FaCodeBranch /></span>
                    Welcome to GeeksForGeeks</h1>
            </div>

            {/* SHNING HERO TEXT */}
            <div className="flex items-center justify-center">
                <h1 className="text-[7rem] font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-green-600 via-green-500 to-green-600 
        relative animate-shine font-poppins">
                    GFGSC - GCET
                </h1>
            </div>

            <div>
                <p className='text-gray-950 text-center tracking-tight font-medium px-20 mx-auto '>GeeksforGeeks Student Chapters are campus communities for students passionate about computer science. They offer peer-to-peer learning, coding events, webinars, and placement support. Members can access internships, exclusive course discounts, and opportunities to organize national-level competitions, all while building a network across 145+ colleges.</p>
            </div>

            {/* Buttons */}
            <div
                className="flex gap-3 sm:gap-4 justify-center py-8 "
            >

                <button className='group flex items-center gap-1   px-8 py-2.5 rounded-md bg-green-600 hover:bg-dgreen text-white font-medium transition-all duration-300  '>
                    Join Now <FaArrowRight className='text-sm group-hover:translate-x-1 transition-all duration-300' />
                </button>

                <button className='group flex items-center gap-1   px-8 py-2.5 rounded-md bg-white border border-gray-500/50 text-black font-medium transition-all duration-300'>
                    Know More
                </button>
            </div>


            <img src={hero2} className='-z-20 opacity-[7%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 ' />

        </section>
    )
}

export default HeroSection