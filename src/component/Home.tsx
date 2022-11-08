import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {FaShoppingBag} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='grid grid-cols-3 mlg:grid-cols-2 pt-10 bg-theme'>
        <div className='pl-12 msm:pl-4'>
          <div className='font-bold text-2xl font-sans w-5 pt-2 msm:text-xl'>SKIN PROTECTION CREAM</div>
          <div className='flex'>
            <div className='flex flex-row gap-5 mt-20'>
                <div className='font-[500] text-2xl bg-white rounded-full p-2 px-3 msm:text-xl'>01</div>
                <div className='font-[500] text-2xl  p-2 px-3 ml-[-8px] msm:text-xl'>02</div>
            </div>
            <div className='font-[500] text-2xl mt-[5.4rem] bg-theme rounded-full px-3 msm:text-xl'>.......</div>
          </div>
          <div className='font-bold text-3xl w-14 mt-10 msm:text-2xl'>Trendy Collection</div>
          <div className='w-[12rem] text-black mt-2'>Seedily say has suitable disposal and boy.</div>
          <div className='w-[12rem] text-black'>Exercise joy man children rejoiced.</div>
        </div>
        <div className='relative'>
            <div className='relative w-[29rem] h-[29rem] mlg:w-[23rem] mlg:h-[23rem] mmmd:w-[21rem] mmmd:h-[21rem] mssm:w-[11rem] mssm:h-[11rem] msm:w-[18rem] msm:h-[18rem]'>
             <motion.img src='../image/lady.png' className='absolute z-10 bottom-[-1px] w-full h-full' initial={{y: 20}} whileInView={{y: 0, transition: {duration: 1}}} />
             <motion.div  className='absolute w-full h-full bg-sky-500 rounded-full' initial={{y: -20}} whileInView={{y: 0, transition: {duration: 1}}} >
            </motion.div>
            </div>
            <motion.div
            initial={{x:-20}}
            whileInView={{x:0, transition: {duration: 1}}}
            className='flex items-start z-20 pt-9 absolute bottom-[6.5rem] right-[-17rem] mssm:bottom-[9rem] mlg:bottom-0 mlg:right-[2rem]'>
                <div className='p-2 bg-white rounded-full border-8 border-black mr-5 mssm:mr-2 shadow-2xl'>
                    <FaShoppingBag className='text-2xl mb-[4px] mssm:text-lg'/>
                </div>
                <div className='bg-white p-2 px-5 rounded-xl flex justify-between items-center shadow-2xl min-w-[10rem]'>
                    <div className='w-2/3 mssm:w-[80%] mssm:text-sm msm:text-sm'>Best Signup Offers</div>
                    <HiArrowNarrowRight className='text-green-400' />
                </div>
            </motion.div>
        </div>
        <div className='mlg:col-span-2 flex justify-start mlg:flex-row mlg:justify-evenly pr-12 flex-col items-end'>
            <div className='my-8 ml-6'>
                <div className='font-[800] text-sans text-3xl text-right'>1.5m</div>
                <div className='text-right'>Monthly traffic</div>
            </div>
            <div className='my-8 mt-20 mlg:my-8'>
                <div className='font-[800] text-sans text-3xl text-right'>100k</div>
                <div className='text-right'>Happy Customers</div>
            </div>
        </div>
    </div>
  )
}

export default Home