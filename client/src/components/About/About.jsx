import React from 'react'
import Image1 from "../../assets/image 1.png"
const About = () => {
  return (
    <div className=' flex justify-evenly items-center h-[100vh] flex-col-reverse md:flex-row'>
      <div>
        <img src={Image1} alt="" />
      </div>
      <div className=' flex flex-col md:w-1/2 w-full  justify-center items-center text-white  gap-7 '>
        <h2 className='text-white text-[35px] font-bold'>About</h2>
        <p className='md:w-[60%] w-full p-4 flex md:items-start md:text-start items-center text-center'>
          Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.<br className='md:hidden flex'/> The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the internet.
Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way.
        </p>
      </div>
    </div>
  )
}

export default About