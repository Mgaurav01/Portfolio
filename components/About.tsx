import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
       </h3> 
    <motion.img 
      initial={{
        x:-200,
        opacity:0
      }}
      transition={{
        duration:1.2,
      }}
      whileInView={{
        opacity:1 , x:0
      }}
      viewport={{once:true}}

      src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmREZNnKv4wK1SvqxrL8U0UuODvTspfHTkyvZJu2ZsJheXnKhcyylCFiKIBWD0ap3PIoQLc70Tw=w958-h880" 
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]'
      
    />
    <div className='space-y-10 px-0 md:px-10'>
      <h4 className='text-4xl font-semibold'>
        Here is a {" "}
        <span className='underline decoration-[#a73333]'>little</span> background
      </h4>
      <p className='text-base'>
        Hey!!! I am Gaurav . Final Year student at Chandigarh University , Mohali .My major is Computer Science & Engineering . I love doing Problem Solving🌟(Data Structure & Algorithm) . I currently practicipate in {" "} <span className='underline decoration-[#a73333]'>Leetcode & GFG</span> using CPP . I have solve over 450 problem on leetcode & GFG . I am having knowledge  with Computer Science fundamental like OOPS , Operating System , Database Management Systems. I have built couple of projects on web development using Reactjs  , Next js , Tailwind Css , Firebase. 
        <br />
        I am interested & open to interview as an intern or Full time in Software Engineering domain
      </p>
    </div>
    </motion.div>
  )
}