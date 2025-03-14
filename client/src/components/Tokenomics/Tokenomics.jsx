import React from 'react'
import frame22 from "../../assets/Frame 22.png"
const Tokenomics = () => {
  return (
    <div id='tokenomics' className='h-full  flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
      <h2 className='flex items-center text-white text-[30px] font-extrabold  my-5'>Tokenomics</h2>
      <div className='flex justify-evenly items-center flex-col-reverse md:flex-row md:gap-10 gap-3'>
        <div className=' justify-center flex items-center'>
        <img src={frame22} alt="" className='w-1/2 md:w-full' />
        </div>

    <div>
      <div className='flex flex-col text-white font-extrabold text-[30px] '>
        <p>Token Supply:</p>
        <p>
        420,690,000,000,000
        </p>
      </div>
      <div className='bg-white rounded-tl-[5px] rounded-br-[5px] py-4 px-12 font-medium'>
      No Taxes, No Bullshit. It's that simple.
      <br />
      <br />
LP tokens are burnt, and contract ownership is <br /> renounced.
      </div>
    </div>
      </div>
     <hr className='text-white' />
      <div id='roadmap' className='flex flex-col justify-center items-center'>
      <h2 className='text-white text-[30px] font-extrabold mb-5'>RoadMap</h2>
      <div className='flex justify-center items-center py-4 px-32 bg-white flex-col rounded-tl-[5px]  rounded-br-[5px] border-b-[4px] border-[#089B2E] font-bold'>
      <p>Phase 1: Meme</p>
      <p>Phase 2: Vibe and HODL</p>
      <p>Phase 3: Meme Takeover</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Tokenomics