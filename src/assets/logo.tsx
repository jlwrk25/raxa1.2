import React from 'react';

export interface LogoProps {
  variant?: 'white' | 'navy' | 'monochrome';
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Official RaXa Systems Vector Brand Logo
 * Matches logonavy.png, logonavy.svg, and logowhite.png
 *
 * Structure:
 * - Adult mother panda on left: white face, navy/dark ears, navy/dark eye patches with white pupils, smiling snout
 * - Baby panda cub nestled on right: white face, navy/dark ears, navy/dark eye patches with white pupils, smile
 * - Two floating love hearts between mother and baby
 * - Cloud/snow base foundation
 * - Bold custom "RaXa" geometric wordmark cutting through the cloud base
 */
export const RaxaLogo: React.FC<LogoProps> = ({
  variant = 'white',
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  const isWhite = variant === 'white';
  // In white variant (for dark background #12263a):
  // The outer cloud, panda body, hearts, and faces are white.
  // The ears, eye patches, mouths, and cut-out letters are dark navy (#12263a).
  // In navy variant (for light background):
  // The outer cloud, panda body, hearts, ears, eye patches are navy (#12263a).
  // The faces and cut-out letters are white (#ffffff).
  const darkColor = isWhite ? '#12263a' : '#12263a';
  const lightColor = '#ffffff';

  const bodyAndCloud = isWhite ? lightColor : darkColor;
  const faceColor = lightColor;
  const featureColor = darkColor;
  const pupilColor = lightColor;
  const wordmarkColor = isWhite ? darkColor : lightColor;
  const heartColor = isWhite ? lightColor : darkColor;

  return (
    <svg
      viewBox="0 0 1000 600"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RaXa Systems Official Logo"
    >
      <g>
        {/* ========================================================= */}
        {/* CLOUD BASE FOUNDATION (BOTTOM)                            */}
        {/* ========================================================= */}
        <path
          d="M 30 450 C 0 380 50 320 135 320 C 180 320 220 338 250 365 C 300 335 385 335 435 375 C 475 335 555 325 615 365 C 675 315 780 315 845 355 C 910 325 985 365 990 440 C 995 515 940 575 850 575 C 760 575 690 535 620 575 C 540 605 420 585 350 565 C 270 585 180 585 105 555 C 30 525 15 470 30 450 Z"
          fill={bodyAndCloud}
        />

        {/* ========================================================= */}
        {/* MOTHER PANDA (LEFT)                                       */}
        {/* ========================================================= */}

        {/* Mother Panda Ears */}
        <circle cx="215" cy="85" r="58" fill={featureColor} />
        <circle cx="470" cy="102" r="56" fill={featureColor} />

        {/* Mother Panda Body Contour (Outer Frame) */}
        <path
          d="M 115 420 C 50 330 70 210 180 130 C 230 95 320 75 420 85 C 490 92 530 130 560 180 C 585 220 595 280 595 350 C 595 410 560 450 500 470 Z"
          fill={bodyAndCloud}
        />

        {/* Mother Panda White Face Area */}
        <path
          d="M 185 270 C 155 195 205 120 310 102 C 415 85 490 125 505 210 C 520 280 475 355 400 378 C 315 402 210 350 185 270 Z"
          fill={faceColor}
        />

        {/* Mother Panda Eye Patches (Tilted Inward) */}
        <ellipse cx="270" cy="210" rx="42" ry="58" transform="rotate(-15 270 210)" fill={featureColor} />
        <ellipse cx="415" cy="220" rx="42" ry="58" transform="rotate(18 415 220)" fill={featureColor} />

        {/* Mother Panda Pupils */}
        <ellipse cx="282" cy="202" rx="14" ry="18" fill={pupilColor} />
        <ellipse cx="405" cy="212" rx="14" ry="18" fill={pupilColor} />

        {/* Mother Panda Snout & Nose */}
        <path d="M 320 265 Q 345 252 370 265 Q 345 288 320 265 Z" fill={featureColor} />

        {/* Mother Panda Happy Smile with Tongue */}
        <path d="M 322 284 Q 345 316 368 284" stroke={featureColor} strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 332 292 Q 345 318 358 292 Z" fill={featureColor} />

        {/* ========================================================= */}
        {/* BABY PANDA CUB (RIGHT)                                    */}
        {/* ========================================================= */}

        {/* Baby Panda Ears */}
        <circle cx="615" cy="195" r="38" fill={featureColor} />
        <circle cx="778" cy="208" r="36" fill={featureColor} />

        {/* Baby Panda Body Contour */}
        <path
          d="M 545 420 C 515 330 555 255 655 220 C 745 190 840 230 875 305 C 910 380 895 465 825 510 C 735 555 565 520 545 420 Z"
          fill={bodyAndCloud}
        />

        {/* Baby Panda White Face Area */}
        <path
          d="M 585 345 C 555 285 595 228 665 215 C 735 200 795 235 810 295 C 825 355 790 415 730 430 C 660 445 605 405 585 345 Z"
          fill={faceColor}
        />

        {/* Baby Panda Eye Patches */}
        <ellipse cx="648" cy="315" rx="27" ry="38" transform="rotate(-14 648 315)" fill={featureColor} />
        <ellipse cx="748" cy="322" rx="27" ry="38" transform="rotate(16 748 322)" fill={featureColor} />

        {/* Baby Panda Pupils */}
        <ellipse cx="656" cy="309" rx="9" ry="12" fill={pupilColor} />
        <ellipse cx="740" cy="316" rx="9" ry="12" fill={pupilColor} />

        {/* Baby Panda Snout & Smile */}
        <path d="M 685 358 Q 700 348 715 358 Q 700 372 685 358 Z" fill={featureColor} />
        <path d="M 688 372 Q 700 388 712 372" stroke={featureColor} strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* ========================================================= */}
        {/* FLOATING LOVE HEARTS                                      */}
        {/* ========================================================= */}

        {/* Upper Big Heart */}
        <path
          d="M 570 140 C 570 110 535 95 515 120 C 495 95 460 110 460 140 C 460 180 515 212 515 212 C 515 212 570 180 570 140 Z"
          fill={heartColor}
          transform="rotate(18 515 150)"
        />

        {/* Lower Small Heart */}
        <path
          d="M 595 235 C 595 215 570 200 555 218 C 540 200 515 215 515 235 C 515 264 555 288 555 288 C 555 288 595 264 595 235 Z"
          fill={heartColor}
          transform="rotate(28 555 240)"
        />

        {/* ========================================================= */}
        {/* BOLD "RaXa" WORDMARK (CUT OUT THROUGH CLOUD)              */}
        {/* ========================================================= */}
        <g fill={wordmarkColor}>
          {/* 'R' */}
          <path d="M 115 365 L 115 528 L 180 528 L 180 468 L 228 528 L 305 528 L 236 456 C 272 444 294 416 294 386 C 294 370 278 365 255 365 Z M 180 405 L 230 405 C 244 405 252 413 252 424 C 252 435 244 443 230 443 L 180 443 Z" />

          {/* 'a' */}
          <path d="M 340 440 C 340 398 376 378 430 378 C 470 378 498 392 498 418 L 498 528 L 450 528 L 450 505 C 435 522 408 532 376 532 C 344 532 318 510 318 475 C 318 440 348 424 402 424 L 450 424 L 450 416 C 450 404 436 398 418 398 C 396 398 380 405 370 418 Z M 450 458 L 408 458 C 386 458 376 466 376 478 C 376 490 386 498 405 498 C 430 498 450 486 450 468 Z" />

          {/* 'X' */}
          <path d="M 515 365 L 585 450 L 515 528 L 585 528 L 625 476 L 665 528 L 735 528 L 665 450 L 735 365 L 665 365 L 625 418 L 585 365 Z" />

          {/* 'a' */}
          <path d="M 755 440 C 755 398 791 378 845 378 C 885 378 913 392 913 418 L 913 528 L 865 528 L 865 505 C 850 522 823 532 791 532 C 759 532 733 510 733 475 C 733 440 763 424 817 424 L 865 424 L 865 416 C 865 404 851 398 833 398 C 811 398 795 405 785 418 Z M 865 458 L 823 458 C 801 458 791 466 791 478 C 791 490 801 498 820 498 C 845 498 865 486 865 468 Z" />
        </g>
      </g>
    </svg>
  );
};
