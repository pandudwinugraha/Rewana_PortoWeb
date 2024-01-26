"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from './Button';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10"></span>
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col pt-12">
        <h4 className='bold-20'>Selamat Datang,</h4>
        <h1 className='bold-48 lg:bold-64 relative'>Di Rewana Portofolio</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>{" "}
          <span>
            <Typewriter
              words={['Jago', 'Keren', 'Gagah', 'Berwibawa']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='reguler-16 max-w-[555px] my-4'>Lorem ipsum dolor sit amet consectetur. Ut metus aliquam dictumst ut. Sem nunc volutpat elit ligula pharetra fringilla libero diam sagittis. Maecenas et mauris sed nisl. Faucibus neque nunc semper tincidunt. Ornare enim fermentum eget lorem orci egestas nulla. Sit donec facilisis pellentesque quam. Nec ac id nisl ac fermentum. Id placerat eu morbi lectus tellus mauris sem. Convallis aliquet ac sapien viverra nibh in. Suspendisse.</p>
        <div className="flexStart gap-1 pt-6">
          <Button
            type='button'
            title='Lihat Selengkapnya'
            variant='btn_dark_rounded'
          />
        </div>
      </div>

      {/* RIGHT - YouTube Video Container */}
      <div className="relative z-20 flex flex-1 flex-col pt-1 video-container" style={{ margin: '0 auto', maxWidth: '90%' }}>
        <iframe
          title="Rewana Portofolio"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LKCHNKYcDsY?si=WiHYE_i4gVQ5UHv8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '20px', width: '100%' }}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;