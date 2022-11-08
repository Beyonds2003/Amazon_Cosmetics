import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {SliderProducts} from '../data'
import SwiperCard from './SwiperCard';

type dataType = {
    id: number;
    name: string;
    details: string;
    price: string
    img: string
}

const SwiperComponent = () => {

  return (
    <div className='relative mt-1'>
        <Swiper
        style={{width: '80%'}}
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
            nextEl: '.next1',
            prevEl: '.prev1'
        }}
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
        loop={true}
        spaceBetween={40}
        >
            {SliderProducts.map((data: dataType) => (
            <SwiperSlide key={data.id}>
                <SwiperCard data={data} />
            </SwiperSlide>
            ))}
        </Swiper>
        <div className='next1 swiper-button-next msm:right' style={{color: 'black', right:' 40px', overflow: 'hidden', height: '40px'}}></div>
        <div className='prev1 swiper-button-prev msm:left' style={{color: 'black', left: '40px', overflow: 'hidden', height: '40px'}}></div>
  </div>
  )
}

export default SwiperComponent