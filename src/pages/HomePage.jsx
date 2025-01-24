import React from 'react'
import { FaCodeBranch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import HeroSection from './HeroSection';
import Event from './../components/Event';
import OurLeads from '@/components/OurLeads';

const HomePage = () => {
  return (
    <div className='mx-[10%]'>
      <HeroSection />
      <Event />
      <OurLeads />


      <div className='h-[50vh]'></div>
    </div>

  )
}

export default HomePage