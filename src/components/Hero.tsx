import React from 'react';
import { RaxaLogo } from '../assets/logo';
import { ActiveModal } from '../types';

interface HeroProps {
  onOpenModal: (modal: ActiveModal) => void;
  onScrollToWorkspace: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onScrollToWorkspace }) => {
  return (
    <section className="bg-[#12263a] text-[#eef1f7] overflow-hidden py-12 md:py-20 px-6 sm:px-12 lg:px-20 border-b border-[#24405a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-16">
        {/* Left Side: Typography */}
        <div className="md:col-span-7 flex flex-col items-start">
          <div className="text-[clamp(64px,11vw,150px)] font-extrabold leading-[0.92] tracking-tighter text-[#eef1f7] mb-2 sm:mb-4 select-none">
            Hi!
          </div>
          <h1 className="text-[clamp(36px,5.5vw,84px)] font-extrabold leading-none tracking-tight text-[#eef1f7] mb-6 max-w-lg">
            Welcome to RaXa
          </h1>
          <p className="text-[#9fb2c6] text-lg sm:text-xl font-medium max-w-md leading-relaxed">
            Enterprise cloud workspace designed to streamline human resources, customer sales, inventory, and operations.
          </p>
        </div>

        {/* Right Side: Logo, Mascot Bubble & Button */}
        <div className="md:col-span-5 flex flex-col items-center justify-center text-center gap-6">
          <div className="w-full max-w-[420px] transition-transform hover:scale-105 duration-300">
            <RaxaLogo variant="white" className="w-full h-auto drop-shadow-xl" />
          </div>

          <div className="inline-block px-5 py-3 bg-white text-[#12263a] text-lg sm:text-2xl font-extrabold rounded-2xl -rotate-2 shadow-lg max-w-[440px] leading-snug border-2 border-slate-100">
            Why pandas? Because we do more with less.
          </div>

          <a
            href="#trial"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal('trial');
            }}
            className="rx-btn-neon rx-btn-neon--wiggle mt-2"
          >
            52 Days Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};
