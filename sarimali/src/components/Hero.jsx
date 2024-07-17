import React from 'react';
import { styles } from '../styles';;

const Hero = () => {
  return (
      <section className="relative w-full h-[75vh] mx-auto sm:h-[60vh]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className='text-[#915eff]'>Sarim</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/>interfaces and web applications.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Hero