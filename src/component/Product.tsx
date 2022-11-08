import React from 'react'
import { ProductsData } from '../data'
import SwiperCard from './SwiperCard'
import {motion, AnimatePresence} from 'framer-motion'

type productDataType = {
  id: number;
  name: string;
  details: string;
  price: string;
  img: string;
  type: string
}

const Product = () => {

  const [productType, setProductType] = React.useState<string>('all')
  const [productData, setProductData] = React.useState(ProductsData)

  React.useEffect(() => {
    if(productType === 'all') {
        setProductData(ProductsData)
    } else {
        setProductData(ProductsData.filter(data => data.type === productType))
    }
  }, [productType])

  return (
    <div className='px-12 pt-20 pb-10 msm:px-2'>
        <div className='flex justify-center mr-[25rem]'>
          <img src='../image/heart.png' className='w-20' />
        </div>
        <div className='font-bold text-2xl text-center'>Our Featured Products</div>
        <div className='flex flex-row justify-between mt-14 mlg:flex-col'>
            <div className='w-[20%] mlg:w-[100%] mlg:flex mlg:gap-8 mlg:justify-center mssm:gap-5'>
                <div onClick={() => setProductType('all')} className='texl-lg select-none mb-5 cursor-pointer font-[500] hover:text-pink-400'>All</div>
                <div onClick={() => setProductType('skin care')} className='texl-lg mb-5 select-none cursor-pointer font-[500] hover:text-pink-400'>Skin Care</div>
                <div onClick={() => setProductType('conditioner')} className='texl-lg mb-5 select-none cursor-pointer font-[500] hover:text-pink-400'>Conditioners</div>
                <div onClick={() => setProductType('foundation')} className='texl-lg mb-5 select-none cursor-pointer font-[500] hover:text-pink-400'>Foundations</div>
            </div>
              <div className='w-[80%] mlg:w-[100%] mmd:grid-cols-2 mssm:grid-cols-1 mlg:mt-10 grid grid-cols-3 gap-5 h-[50vh] scrollbar-hide overflow-scroll'>
               <AnimatePresence>
                  {productData.map((data: productDataType) => (
                    <SwiperCard key={data.id} data={data} />
                  ))}
                </AnimatePresence>
              </div>
        </div>
    </div>
  )
}

export default Product