import React from 'react'
import {GrLocation} from 'react-icons/gr'
import {BiPhone} from 'react-icons/bi'
import {CiMail} from 'react-icons/ci'
import {HiOutlineArrowLeftOnRectangle} from 'react-icons/hi2'
import {IoPeopleOutline} from 'react-icons/io5'
import { BiLink } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='px-12 pt-10 mt-32 pb-10 mxl:pb-0 grid grid-cols-5 gap-10 border-t-[1px] mmd:grid-cols-2 border-white msm:px-4 mxl:grid-cols-3 mxl:grid-rows-2'>
       <div className='flex items-start mmd:hidden'>
          <img src='../image/logo.png' className='w-8 h-8' />
          <div className='font-[500] text-lg ml-2'>amazon</div>
       </div>
       <div>
          <div className='text-xl font-[500]'>Contact Us</div>
          <div className='flex items-center mt-4'>
            <GrLocation size={20} className='min-w-[16px]' />
            <div className='ml-3 w-[13rem] text-sm'>111 north avenue Orando, FL 32801</div>
          </div>
          <div className='flex items-center mt-4'>
            <BiPhone size={20} className='min-w-[16px]' />
            <div className='ml-3 w-[13rem] text-sm'>352-306-4415</div>
          </div>
          <div className='flex items-center mt-4'>
            <CiMail size={20} className='min-w-[16px]' />
            <div className='ml-3 w-[13rem] text-sm'>support@amazon.com</div>
          </div>
       </div>
       <div>
         <div className='text-xl font-[500]'>Account</div>
         <div className='flex items-center mt-4 cursor-pointer'>
            <HiOutlineArrowLeftOnRectangle size={23} />
            <div className='ml-3 w-[13rem] text-sm'>Sign In</div>
         </div>
       </div>
       <div className='mxl:grid-spans-1 mxl:inline hidden mmd:hidden'></div>
       <div>
         <div className='text-xl font-[500]'>Company</div>
         <div className='flex items-center mt-4 cursor-pointer'>
            <IoPeopleOutline size={23} className='min-w-[16px]' />
            <div className='ml-3 w-[13rem] text-sm'>About us</div>
         </div>
       </div>
       <div>
         <div className='text-xl font-[500]'>Resources</div>
         <div className='flex items-center mt-4 cursor-pointer'>
            <BiLink size={23} className='min-w-[16px]' />
            <div className='ml-3 w-[13rem] text-sm'>Safety Privacy & Terms</div>
         </div>
       </div>
    </div>
  )
}

export default Footer