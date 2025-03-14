import React, { useState } from 'react'
import HeroImg from "../../assets/Hero.png"
import Icon1 from "../../assets/icon1.svg"
import Icon2 from "../../assets/icon2.svg"
import Icon3 from "../../assets/icon3.svg"
import Icon4 from "../../assets/icon4.png"
const Hero = () => {
    const [text, setText] = useState("This is copied text!");
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };
  return (
    <div className=' flex flex-col md:flex-row justify-evenly items-center  h-[100vh]  py-10 px-20 '>
        {/* Desc */}
        <div className='flex justify-center my-2 items-center w-full '>
            <div className='flex justify-center items-center'>
            <div className='flex gap-4 flex-col '>
            <div className=' uppercase text-[40px] md:text-[55px] text-white font-extrabold md:gap-0 gap-5'>
                <span className=' -space-x-5'>$UNO</span>
                <span> PEPE</span>
            </div>
            <div className='w-[55%] text-white'>
                The most memorable memecoin in existence. The dogs have had their way. It's time for PEPE to take reign 
            </div>
           <div className='bg-white w-[70%] flex  p-1 '>
            <input type="text" className=' border-0 outline-none w-full py-2 px-5 '  value={text} 
        onChange={(e) => setText(e.target.value)} />
            <button onClick={handleCopy} className='bg-[#089B2E]  text-white py-2 px-4 rounded-[5px] '>
            {copied ? "Copied" : " Copy"}
            </button>
            <p className='text-white '>
           
            </p>
           </div>
           {/* Icon */}
            <div className='flex  items-center gap-5 '>
                     <img src={Icon4} alt=""  className='w-8 '  />
            <img src={Icon3} alt=""  className='w-8'  />
        <img src={Icon1} alt="" className='w-8' />
        <img src={Icon2} alt=""  className='w-8'  />
        
            </div>
            </div>
            </div>
           
           
        </div>
        {/* Img */}
        <div>
            <img src={HeroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero