import React from 'react'
import {motion} from 'framer-motion'

export type swiperdata = {
    data: {
        id: number;
        name: string;
        details: string;
        price: string
        img: string
    } | {
      id: number;
      name: string;
      details: string;
      price: string;
      img: string;
      type: string
    }
}

const SwiperCard = ({data}: swiperdata) => {
  return (
    <motion.div 
     key={data.id}
     layout
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     exit={{opacity: 0}}
    className='bg-white rounded-md h-44 w-auto pl-3 pt-2 flex flex-row justify-between items-center relative overflow-hidden'>
        <div className='w-[60%] mr-3'>
        <div className='font-bold text-lg text-sans text-black'>{data.name}</div>
        <div className='text-base'>{data.details}</div>
        <div className='font-bold text-3xl my-2 mt-4'>{data.price}$</div>
        <div className='px-2 py-1  rounded-2xl border-black border-[1px] w-20 text-[0.800rem] mt-6 mb-2'>Shop Now</div>
        </div>
        <div className='h-[100%] w-[40%]'>
        <img src={data.img} className='rotate-[-20deg] h-[170%] m-auto' />
        </div>
    </motion.div>
  )
}

export default SwiperCard