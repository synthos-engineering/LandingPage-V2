import React from 'react';
import Link from 'next/link';
import GlowButton from '../GlowButton';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-32">
       <div className="absolute inset-0 overflow-hidden z-0">
         <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted>
           <source src="/synthos-back.mp4" type="video/mp4" />
         </video>
       </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mt-40 md:mt-0">
          <h1 className="text-[2.3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem] text-center font-bold mb-6 bg-clip-text text-white uppercase" style={{fontFamily: 'Montserrat-LightItalic'}}><span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>AI-powered  </span></h1>
          <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[4.5rem] text-center font-bold mb-6 bg-clip-text text-white uppercase">Personalized crypto yield plans</h2>
          {/* Launch App Button - Visible only on mobile */}
          <div className="mt-8 md:hidden">
            <Link href="https://app.synthos.fun" target="_blank" rel="noopener noreferrer">
              <GlowButton>Launch App</GlowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 