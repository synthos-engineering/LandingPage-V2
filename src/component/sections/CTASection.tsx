import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import GlowButton from '../GlowButton';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 relative">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#6751b4] via-[#150b39] via-[#030213] to-[#030213]"></div>
        {/* Center circular glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-purple-600/10 blur-[70px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[70%] rounded-full bg-blue-500/10 blur-[70px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-center text-white">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/white-logo.png"
              alt="SynthOS Logo"
              width={500}
              height={500}
              className="object-contain w-[220px] md:w-[280px]"
            />
          </div>
          <h2 className="text-2xl md:text-[4rem] lg:text-[5.5rem] font-light mb-4 uppercase leading-tight tracking-tight">
            <span className="text-white" style={{ textShadow: '0 0 1px blue, 0 0 20px yellow, 0 0 10px orange' }}>
              personalized
            </span>{" "}
            <span className="text-white">
              crypto yield plans
            </span>
          </h2>

          <div className="flex justify-center mt-6 md:mt-8">
           
          <Link href="https://app.synthos.fun" target="_blank" rel="noopener noreferrer">
          <GlowButton className=' md:text-lg lg:text-xl ' >
            <span>Try Now</span>
          </GlowButton>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 