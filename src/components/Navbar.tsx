import React, { useState } from 'react';
import { RaxaLogo } from '../assets/logo';
import { ActiveModal } from '../types';

interface NavbarProps {
  onOpenModal: (modal: ActiveModal) => void;
  onScrollToTop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToTop }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 md:px-12 py-3 bg-[#12263a] text-white shadow-lg border-b border-[#24405a]">
      {/* Left side: Logo placed to the left of the burger dropdown button */}
      <div className="flex items-center gap-3">
        {/* RaXa Logo at the left of the burger dropdown */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onScrollToTop();
          }}
          className="flex items-center transition-transform hover:scale-105 cursor-pointer no-underline"
          title="RaXa Home"
        >
          <div className="w-12 h-8 sm:w-14 sm:h-9 flex items-center">
            <RaxaLogo variant="white" className="w-full h-full object-contain" />
          </div>
        </a>

        {/* Burger Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl bg-transparent hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffb703] cursor-pointer"
          >
            <span
              className={`block w-5 h-[2.5px] rounded-full bg-[#eef1f7] transition-transform ${
                menuOpen ? 'translate-y-[7.5px] rotate-45 bg-[var(--rx-lime)]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2.5px] rounded-full bg-[#eef1f7] transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2.5px] rounded-full bg-[#eef1f7] transition-transform ${
                menuOpen ? '-translate-y-[7.5px] -rotate-45 bg-[var(--rx-lime)]' : ''
              }`}
            />
          </button>

          {menuOpen && (
            <ul
              className="absolute top-[calc(100%+8px)] left-0 z-50 min-w-[210px] p-2 bg-[#12263a] border border-[#24405a] rounded-2xl shadow-2xl flex flex-col gap-1 list-none animate-in fade-in zoom-in-95 duration-150"
              role="menu"
            >
              <li>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onScrollToTop();
                  }}
                  className="block px-4 py-2 text-sm font-bold text-[#eef1f7] rounded-xl hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors"
                  role="menuitem"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onOpenModal('privacy');
                  }}
                  className="block px-4 py-2 text-sm font-bold text-[#eef1f7] rounded-xl hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors"
                  role="menuitem"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onOpenModal('support');
                  }}
                  className="block px-4 py-2 text-sm font-bold text-[#eef1f7] rounded-xl hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors"
                  role="menuitem"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onOpenModal('about');
                  }}
                  className="block px-4 py-2 text-sm font-bold text-[#eef1f7] rounded-xl hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors"
                  role="menuitem"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onOpenModal('projects');
                  }}
                  className="block px-4 py-2 text-sm font-bold text-[#eef1f7] rounded-xl hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors"
                  role="menuitem"
                >
                  Projects
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Right Action buttons (Logo Studio button removed, Meet Juan & Sign in preserved) */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <a
          href="#meet-juan"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal('meetJuan');
          }}
          className="inline-block px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-extrabold bg-[var(--rx-lime)] text-[#12263a] rounded-full border-2 border-[var(--rx-lime)] hover:bg-[#b4ee1f] hover:border-[#b4ee1f] transition-colors shadow-sm whitespace-nowrap"
        >
          Meet Juan!
        </a>

        <a
          href="#login"
          id="loginBtn"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal('login');
          }}
          className="inline-block px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-[#eef1f7] rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors whitespace-nowrap"
        >
          Sign in
        </a>
      </div>
    </header>
  );
};
