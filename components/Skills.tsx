import React from 'react'
import {motion} from 'framer-motion'
import Cplus from './skill/cplus'
import Java from './skill/Java'
import Javascript from './skill/Javascript'
import Html from './skill/Html'
import RIcon from './skill/React'
import CIcon from './skill/CIcon'
import TIcon from './skill/TIcon'
import STIcons from './skill/STIcons'
import NIcon from './skill/NIcon'
import MYSQL from './skill/MYSQL'
import Fire from './skill/Fire'
import Git from  './skill/Git'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    viewport={{once:true}}

    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase  tracking-[3px] text-gray-500'>Hover over skill for current proficiency</h3>
        
        <div className='pt-20  grid grid-cols-4 gap-5 '>
            <Cplus />
            <Java />
            <Javascript />
            <Html />
            <RIcon />
            <CIcon />
            <TIcon />
            <STIcons />
            <NIcon />
            <MYSQL />
            <Fire />
            <Git />
        </div>
    </motion.div>
  )
}