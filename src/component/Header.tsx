import React from 'react'
import {CgShoppingBag} from 'react-icons/cg'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {
 
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useLayoutEffect(() => {
    const updateMenuOpen = () => {
      if(window.innerWidth > 870) {
        setMenuOpen(true)
      } else {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', updateMenuOpen)
    updateMenuOpen();
    return () => window.removeEventListener('resize', updateMenuOpen);
  }, [])
   
  return (
    <div className='flex flex-row items-center bg-theme justify-between h-[56px] mmd:items-baseline'>
        <div className='flex flex-row items-center pl-10 py-2 msm:pl-4 msm:pt-4'> 
            <img src='../image/logo.png' className='w-10 h-10' />
            <div className='font-bold text-xl ml-[2px]'>amazon</div>
        </div>
        <div className='flex flex-row items-center pr-10 py-2 mmd:bg-white mmd:mr-10 mmd:px-4 mmd:pt-1 mmd:flex-col z-[100] msm:mr-3'>
            <GoThreeBars size={23} className="hidden mmd:inline-block mmd:mt-3" onClick={() => setMenuOpen(pres => !pres)} />
            {menuOpen && <div className='font-bold text-lg mx-7 mmd:my-4'>Collections</div>}
            {menuOpen && <div className='font-bold text-lg mx-7 mmd:my-4'>Brands</div>}
            {menuOpen && <div className='font-bold text-lg mx-7 mmd:my-4'>Sales</div>}
            {menuOpen && <div className='font-bold text-lg mx-7 mmd:my-4 flex flex-row items-center'>Eng <AiOutlineCaretDown className='mt-[7px] text-[1rem] ml-1' /></div>}
            <input type='search' placeholder='Search' 
            className='p-[4px] w-28 pl-[10px] bg-white rounded-md focus:outline-none mmd:hidden' />
            <CgShoppingBag className='ml-6 text-xl mmd:ml-0 mmd:my-4' />
        </div>
    </div>
  )
}

export default Header