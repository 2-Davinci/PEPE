import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6  my-20 '>
        <h2 className='text-[#089B2E] text-[35px]  space-x-5 font-extrabold'>How to Buy</h2>
        <div className='flex justify-center items-center flex-col md:w-1/2 w-full mx-2 gap-5 '>
            <div className='flex flex-col  items-center justify-center bg-[#033e12] opacity-[1.1]  p-3 text-white rounded-tl-[5px]     rounded-br-[5px] border-b-[4px] border-[#089B2E] ' >
                <h2 className='mb-4 font-extrabold md:text-[35px]  text-[25px] '>Create a wallet</h2>
                <p className='text-center'>
                Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
                </p>
            </div>
            <div className='flex flex-col  items-center justify-center bg-[#033e12] opacity-[1.1]  p-3 text-white rounded-tl-[5px] rounded-br-[5px] border-b-[4px]  border-[#089B2E]' >
                <h2 className='mb-4 font-extrabold md:text-[35px]  text-[25px] '>Get Some ETH</h2>
                <p className='text-center'>
                have ETH in your wallet to switch to $PEPE. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                </p>
            </div>
            <div className='flex flex-col  items-center justify-center bg-[#033e12] opacity-[1.1]  p-3 text-white rounded-tl-[5px] rounded-br-[5px] border-b-[4px]  border-[#089B2E]' >
                <h2 className='mb-4 font-extrabold md:text-[35px]  text-[25px] '>Go to Uniswap</h2>
                <p className='text-center'>
                onnect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.
                </p>
            </div>
            <div className='flex flex-col  items-center justify-center bg-[#033e12] opacity-[1.1]  p-3 text-white rounded-tl-[5px] rounded-br-[5px] border-b-[4px] border-[#089B2E] ' >
                <h2 className='mb-4 font-extrabold md:text-[35px]  text-[25px] '>Switch ETH for $PEPE</h2>
                <p className='text-center'>
                Switch ETH for $PEPE. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
                </p>
            </div>
           
            
        </div>
    </div>
  )
}

export default Body