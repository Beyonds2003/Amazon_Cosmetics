import React from 'react'
import ReactCompareImage from 'react-compare-image' 

const Virtual = () => {
  return (
    <div className='px-12 flex flex-row justify-between items-center pt-44  mmd:flex-col mmd:justify-center mmd:px-2'>
        <div className='w-[60%] pl-4  mmd:flex mmd:itmes-center mmd:flex-col mmd:text-center'>
            <div className='font-bold text-2xl font-sans'>VIRTUAL TRY-ON</div>
            <div className='mmd:flex mmd:justify-center'><div className='font-sans text-xl my-6 w-[14rem]'>NEVER BUY THE WORNG SHADE AGAIN!</div></div>
            <div className='font-bold text-xl'>Try Now!</div>
            <div className='mmd:flex mmd:justify-center mmd:ml-12'><img src='../image/shade.png' className='w-[7rem] mmd:' /></div>
        </div>
        <div className='w-[40vw] mlg:w-[60vw] msm:w-[70vw] mssm:w-[90vw] mmd:mt-6'>
          <ReactCompareImage leftImage='../image/before.png' rightImage='../image/after.png' />
        </div>
    </div>
  )
}

export default Virtual