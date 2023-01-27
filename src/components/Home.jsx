import React from 'react'


const Home = () => {
 
  return (
    <form className=' h-screen w-screenf flex flex-col justify-center items-center'>
      <div className=' font-bold text-[42px] mb-1'>
        Github profile
      </div>
      <div className=' text-[#3C3C3C] text-2xl mb-6'>Generate your profile</div>
      <div>
        <input  className=' border p-3 w-80 rounded-md mr-5' type="text" placeholder='Github Username' />
        <button type='submit' className='px-12 py-3 rounded-md text-white bg-[#DE5A21]'>Generate
        </button>
        
      </div>
    </form>
  )
}

export default Home

