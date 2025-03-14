import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { IoMdClose, IoMdMenu } from "react-icons/io";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = ()=> {
setOpenMenu(!openMenu)
  }
  return (
    <div className='bg-white py-4 px-6 md:px-16 flex items-center md:justify-evenly  gap-5 justify-between '>
      <div className='bg-white py-4 px-6 md:px-16 flex items-center md:justify-evenly  gap-5 justify-between '>
      <div className='flex gap-1 items-center'>
    <img src={Logo} alt="logo" className='w-10 h-10 rounded-full  '  />
    <h2 className=' uppercase font-extrabold text-[20px] md:text-[25px] text-[#089B2E] '> $UPEPE</h2>
        </div>
        {/* Link */}
        <div className='hidden md:flex  md:justify-between items-center gap-4 font-medium '>
            <a href="#about"> About</a>
            <a href="#Howtobuy"> How To buy</a>
            <a href="#tokenomics"> Tokenomics</a>
            <a href="#roadmap"> Roadmap</a>
        </div>
        {/* Button */}
        <div>
        <button className='bg-[#089B2E] text-white font-medium p-3 rounded-[5px] shadow-md opacity-85 hidden md:flex '>
            Buy NOW
        </button>
       
       
        </div>
       
      </div>
      <button onClick={handleMenu} className='flex md:hidden text-white bg-[#089B2E] rounded-[5px] '>
          <IoMdMenu size={"30"}/>
        </button>
      {
          openMenu && 
          <div className={`md:hidden  space-x-6  overflow-hidden  h-screen   absolute md:sticky top-0 left-0 w-full md:w-auto bg-[whitesmoke]  md:bg-transparent transition-transform ${openMenu ? "block" : "hidden"} md:flex`}>
            <div className='flex flex-col items-center gap-4 h-screen  relative '>
            <div className=' absolute cursor-pointer top-0 right-0 text-white bg-[#089B2E] rounded-full p-2 ' onClick={()=> setOpenMenu(false)}>
            <IoMdClose  size={"30"} />
            </div>
            <a className='mt-5' href="#about" onClick={()=> setOpenMenu(false)}>About</a>
           <a href="#Howtobuy" onClick={()=> setOpenMenu(false)}> How to buy</a>
           <a href="#tokenomics" onClick={()=> setOpenMenu(false)}>Tokenomics</a>
           <a href="#roadmap" onClick={()=> setOpenMenu(false)}>RoadMap</a>
            </div>
          
          </div>
        }
    </div>
  )
}

export default NavBar