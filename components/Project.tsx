import React from 'react'

type Props = {}

function Project({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Project
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden span-x snap-mandatory z-20'>
      {/**/}
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <img
           src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmSwsHR4SPqReDC0bP2wm1R651bOuoSxf3HDT4VmPCRqDOJbxFeio-kro7G9IaWu29v9cFHXJS4=w1920-h892'
           
           alt=''
        />
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
          <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#af3333]/80'>
                Case Study
              </span>{" : "}
              <span>Sorting Visulizer</span>
          </h4>
          <p className='text-lg text-center md:text-left'>
          A web application showcasing the inner workings of sorting algorithms.Features:Colored representation of step being executed. 1.1) Blue:default 1.2) Yellow: Being compared 1.3) Red: Identified as in incorrect position and to be moved 1.4) Green: In correct position 3 Controls for visualizations 2.1) Speed of visualization (5 speed levels) 2.2) Data size () 2.3) Generation of new data (Randomly generate new data). Time and Space complexity of algorithm being visualized.
          </p>
          <a href='https://github.com/Mgaurav01/Sorting-Visulizer' className='absolute cursor-pointer tracking-[10px] text-white-500 hover:text-[#af3333]/80' >Link</a>
        </div>

      </div>
      {/**/}

      {/**/}
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <img
           src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmRtK-Y60gQRbw5KvFFatXQ4gCWK51mWHzDkC-1Toli4HK_31KREkhlK0mEdEPy1Xnj5xikrZ60=w958-h808'
           
           alt=''
        />
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
          <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#af3333]/80'>
                Case Study
              </span>{" : "}
              <span>Disney+ Hotstar Clone</span>
          </h4>
          <p className='text-lg text-center md:text-left'>
            The Clone is very similar to the original disney plus website. It is only one page(homepage) website & also it has login & signout using google authentication. It has navbar and search box with cool click effect same as disney+ and it also has a slider or carousel with infinity or endless effect.For the database we use Firebase. 
          </p>
          <a href='https://github.com/Mgaurav01/Disney-Clone' className='absolute cursor-pointer tracking-[10px] text-white-500 hover:text-[#af3333]/80'>Link</a>
        </div>

      </div>
      {/**/}

      {/**/}
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <img
           src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmQh6astx0udi1WeAF6HmRBvv1TVXXOw9dtVHBJmb9ilu22_Ck5y9vtWCzk_Yefy3455coLbhZI=w958-h880'
           
           alt=''
        />
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
          <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#af3333]/80'>
                Case Study
              </span>{" : "}
              <span>Portfolio</span>
          </h4>
          <p className='text-lg text-center md:text-left'>
            Build a modern Portfolio to showcase my work and let others know about yourself.
            <br />
            I made this project using Next.js , Tailwind css , Framer-Motion 
          </p>
          <a href='https://github.com/Mgaurav01/Portfolio' className='absolute cursor-pointer tracking-[10px] text-white-500 hover:text-[#af3333]/80'>Link</a>
        </div>

      </div>
      {/**/}


      </div>
    </div>
    
  )
}

export default Project