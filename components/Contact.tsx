import React from 'react'
import {PhoneIcon , MapPinIcon , EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name:string;
  email:string;
  subject: string;
  message: string;
}


type Props = {}

export default function Contact({}: Props) {
 
  const{register , handleSubmit} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs>=(formData) => {
    window.location.href = 'mailto:mazumderg537@gmail.com? subject=${formData.subject}& body = Hi, my name is ${formData.name}. ${formData.message} (${fromData.email})';
  };

  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10'> 
           <h4 className='text-4xl font-semibold text-center pt-40'>
           I have got just what you need.{" "}
           <span className='decoration-[#a73333]/50 underline'>Let's Connect.</span>
           </h4> 

        <div className=''>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#a73333] h-7 w-7 animate-pulse'/>
            <p className='text-semibold'>8638977570</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#a73333] h-7 w-7 animate-pulse'/>
            <p className='text-semibold'>Golaghat - Assam</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#a73333] h-7 w-7 animate-pulse'/>
            <p className='text-semibold'>mazumderg537@gmail.com</p>
            </div>
        </div>

        <form
        onSubmit={handleSubmit(onSubmit)}  
        className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'> 
            <input {...register('name')} placeholder='Name' className='contactInput' type='text'/>
            <input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
            </div>

            <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <button type='submit' className='bg-[#a73333] py-5 px-10 rounded-md text-black font-bold tracking-[10px]  '>Submit</button>
        </form>

        </div>
    </div>
  )
}