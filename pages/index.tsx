import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Link from 'next/link'
import Footer from '../components/Footer'


const Home: NextPage = () => {
  return (
    <div className=" text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Gaurav Mazumdar</title>
      </Head>

      {/* Header */}
      <Header />
      
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      
      {/* Experience */}
      
      {/* Skills */}
      <section id='skills' className='snap-start'>
      <Skills />
    
      </section>
      
      {/* Projects */}
      <section id='project' className='span-start'>
        <Project />
      </section>
      
      {/* Contact Me */}
      <section id='contact' className='span-start'>
        <Contact />
      </section>
      
      {/*<Footer />*/}
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-9 rounded-full filter grayscale hover:grayscale-0  cursor-pointer'
            src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmREZNnKv4wK1SvqxrL8U0UuODvTspfHTkyvZJu2ZsJheXnKhcyylCFiKIBWD0ap3PIoQLc70Tw=w1920-h892'
            alt=''
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home
