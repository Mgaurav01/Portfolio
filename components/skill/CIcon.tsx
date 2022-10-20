import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    d?: boolean;
};

function Skill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
          x:-200,  
          opacity:0
        }}

        transition={{duration:1}}
        whileInView={{opacity:1 , x:0}}
            
        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
        className='rounded-full border border-gray-500 object-cover w-10 h-10 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z=0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>55%</p>
        </div>
    </div>
    </div>
  )
}

export default Skill