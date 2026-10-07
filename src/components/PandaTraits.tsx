import React from 'react';

export const PandaTraits: React.FC = () => {
  return (
    <section className="bg-white text-[#12263a] py-14 md:py-24 px-4 sm:px-8 lg:px-16" id="traits">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center text-[#12263a] mb-12 md:mb-16">
          Panda traits, A.I. tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Trait 1 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              Bamboo specialists
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              Bamboo makes up about 99% of a giant panda's diet, and a panda can eat up to 38 kg of it a day. Like a focused A.I. tool, it does one job and does it extremely well.
            </p>
          </article>

          {/* Trait 2 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11v9H4v-9h3ZM7 11l4-8a2 2 0 0 1 2 2v4h6a2 2 0 0 1 2 2l-1.5 6.5A2 2 0 0 1 17.5 20H7" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              A built-in &ldquo;thumb&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              An enlarged wrist bone works like a thumb and helps pandas grip bamboo. Good tools adapt the same way: one small addition that makes a hard job easy.
            </p>
          </article>

          {/* Trait 3 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5Z" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              Energy savers
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              On a low-energy diet, pandas rest for many hours a day and move slowly to save effort. Efficient A.I. builds your app fast without wasted work.
            </p>
          </article>

          {/* Trait 4 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6ZM12 14c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              Tiny beginnings
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              A newborn cub weighs about 100 grams, roughly a stick of butter. Every great system starts small and grows through feedback.
            </p>
          </article>

          {/* Trait 5 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              Bold black and white
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              Their patches help pandas recognize each other and blend into snow and shade. Clear design does the same for your screens: easy to read, hard to miss.
            </p>
          </article>

          {/* Trait 6 */}
          <article className="text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center w-11 h-11 mb-3.5 text-[#5a8700] border-2 border-[var(--rx-lime)] rounded-xl"
              aria-hidden="true"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
                <circle cx="12" cy="19.5" r="1" fill="currentColor" />
              </svg>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#5a8700] mb-2">
              Scent and sound messages
            </h3>
            <p className="text-sm sm:text-base text-[#12263a] max-w-[34ch] leading-relaxed">
              Pandas are mostly solitary, so they share information with scent marks and calls from a distance. Your apps keep your team connected the same way, from any device.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
