import React from 'react'
import {Cursor , useTypewriter} from 'react-simple-typewriter'
import BackgroungCircles from './BackgroungCircles'
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
  
    const [text, count] = useTypewriter({
        words:[
        "Hi, The Name's Gaurav",
        "Final Year Computer Science Student",
        "<LovesProblemSolving 💻/>",
        "<Also interested in Geopolitics />"
        ],
        loop: true,
        delaySpeed:2000,
    });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroungCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src= 'https://lh3.googleusercontent.com/drive-viewer/AJc5JmREZNnKv4wK1SvqxrL8U0UuODvTspfHTkyvZJu2ZsJheXnKhcyylCFiKIBWD0ap3PIoQLc70Tw=w958-h880'
        alt=''/>

        <div className='z-20'>
         <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
         Software Enginneer
         </h2>   
         <h1 className='text-5xl lg:text-6xl font-semibold px-5'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="red" /> 
         </h1> 

        <div className='pt-5'>
            <Link href="#about">
                <button className='hereButton'>About</button>
            </Link>
            {/*
            <Link href="#experience">
                <button className='hereButton'>Experience</button>
            </Link>
            
            */}
            
            <Link  href="#skills">
                <button className='hereButton'>Skills</button>
            </Link>

            <Link href ="#project">
                <button className='hereButton'>Project</button>
            </Link>

            <Link href ="#contact">
                <button className='hereButton'>Contact ME</button>
            </Link>
        </div>
        </div>
    </div>
  )
}