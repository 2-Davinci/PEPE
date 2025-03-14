import React from 'react'
import Logo from "../../assets/up2 1.png"
const Footer = () => {
  return (
    <div>
      <div className='bg-white  py-5 px-10 flex flex-col md:flex-row gap-5 items-center justify-center'>
      <img src={Logo} alt="" className='' />
      <p className='md:w-1/2 w-full'>
      Uno Pepe - The meme, the myth, the legend. No promises, no roadmap, just pure entertainment. A token made for the culture, by the culture—here for the vibes, not the utility. Ride the wave, embrace the chaos, and enjoy the meme magic. 🌊🐸
      </p>
      </div>
      {/* Footer 2 */}
      <div className='flex text-white justify-center items-center py-4'>
      © 2025 by Uno Pepe. All rights reserved!
      </div>
    </div>
  )
}

export default Footer