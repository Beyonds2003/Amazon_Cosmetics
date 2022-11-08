import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Review = () => {
  return (
    <div className='px-12 pt-32 msm:px-2'>
        <div className='flex justify-between mmd:inline-block'>
            <div className='flex flex-col justify-end w-[33.3%] mr-8 mmd:w-full mmd:text-center'>
                <div className='font-bold text-2xl'>TOP RATED</div>
                <div className='mt-3 font-sans text-md font-[400]'>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY EXRCISE JOY MAN CHILDREN REJOICED.</div>
            </div>
            <div className='mmd:flex mmd:justify-center'>
                <img src='../image/lady2.png' className='w-80' />
            </div>
            <div className='flex flex-col justify-end w-[33.3%] mmd:w-full mmd:text-center mmd:mb-3'>
                <div className='font-bold text-2xl font-sans text-end mmd:text-center'>100K</div>
                <div className='mt-3 font-sans text-md font-[400] text-end mmd:text-center'>HAPPY CUSTOMERS WITH US</div>
            </div>
        </div>
        <div className='text-center font-bold font-sans text-2xl mt-1'>REVIEWS</div>
            <div className='mt-12 px-9 pb-10 mmd:px-2'>
              <Swiper
               slidesPerView={3}
               slidesPerGroup={1}
               loop={true}
               spaceBetween={20}
               breakpoints={{
                 1200: {
                    slidesPerView: 3
                  }, 
                  820: {
                    slidesPerView: 2
                  },
                  0: {
                    slidesPerView: 1
                  }
               }}
              >
                <SwiperSlide>
                    <div className='bg-white mt-6 min-h-[13rem] rounded-md relative'>
                        <img src='../image/profile1.png' className='w-[3rem] absolute top-[-23px] right-[46%]' />
                        <div className='px-5 text-center pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, non iusto laudantium totam repudiandae ad molestias corrupti explicabo? Fuga, natus.</div>
                        <div className='h-[1px] bg-gray-300 mt-6 mx-12'></div>
                        <div className='font-[500] text-md text-center mt-5'>John Alendon</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white mt-6 min-h-[13rem] rounded-md relative'>
                        <img src='../image/profile2.png' className='w-[3rem] absolute top-[-23px] right-[46%]' />
                        <div className='px-5 text-center pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, non iusto laudantium totam repudiandae ad molestias corrupti explicabo? Fuga, natus.</div>
                        <div className='h-[1px] bg-gray-300 mt-6 mx-12'></div>
                        <div className='font-[500] text-md text-center mt-5'>Natasha</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white mt-6 min-h-[13rem] rounded-md relative'>
                        <img src='../image/profile1.png' className='w-[3rem] absolute top-[-23px] right-[46%]' />
                        <div className='px-5 text-center pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, non iusto laudantium totam repudiandae ad molestias corrupti explicabo? Fuga, natus.</div>
                        <div className='h-[1px] bg-gray-300 mt-6 mx-12'></div>
                        <div className='font-[500] text-md text-center mt-5'>Alex Hormozi</div>
                    </div>
                </SwiperSlide>
              </Swiper>
            </div>
    </div>
  )
}

export default Review
