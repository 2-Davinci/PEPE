import React from 'react'
import Logo from "../../assets/logo.png"
const NavBar = () => {
  return (
    <div className='bg-white py-4 px-15 flex items-center md:justify-evenly  gap-5 justify-between '>
        <div className='flex gap-1 items-center'>
    <img src={Logo} alt="logo" className='w-10 h-10 rounded-full  '  />
    <h2 className=' uppercase font-extrabold text-[20px] md:text-[25px] text-[#089B2E] '> $UPEPE</h2>
        </div>
        {/* Link */}
        <div className='hidden md:flex  md:justify-between items-center gap-4 font-medium '>
            <a href="#about"> About</a>
            <a href="#about"> How To buy</a>
            <a href="#about"> Tokenomics</a>
            <a href="#about"> Roadmap</a>
        </div>
        {/* Button */}
        <div>
        <button className='bg-[#089B2E] text-white font-medium p-3 rounded-[5px] shadow-md opacity-85'>
            Buy NOW
        </button>
        </div>
    </div>
  )
}

export default NavBar