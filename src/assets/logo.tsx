import React from 'react';

export interface LogoProps {
  variant?: 'white' | 'navy' | 'monochrome';
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Official RaXa Systems Vector Brand Logo
 * Matches logonavy.svg and logowhite.svg
 * Featuring:
 * - Adult mother panda on left with round ears, eye patches with pupils, happy smiling snout
 * - Baby panda cub nestled on right with round ears, eye patches with pupils, sweet smile
 * - Two floating love hearts positioned between the pandas
 * - Soft organic cloud/snow silhouette foundation
 * - Bold custom "RaXa" geometric wordmark embedded across the bottom
 */
export const RaxaLogo: React.FC<LogoProps> = ({
  variant = 'white',
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  const isWhite = variant === 'white';
  const primary = isWhite ? '#ffffff' : '#12263a';
  const cutout = isWhite ? '#12263a' : '#ffffff';

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
        {/* MOTHER PANDA (LEFT)                                       */}
        {/* ========================================================= */}

        {/* Mother Panda Ears */}
        <circle cx="218" cy="85" r="58" fill={isWhite ? cutout : primary} />
        <circle cx="462" cy="102" r="56" fill={isWhite ? cutout : primary} />

        {/* Mother Panda Body & Head Silhouette */}
        <path
          d="M 125 430 C 55 350 70 230 180 140 C 260 80 430 80 515 145 C 555 175 580 230 580 300 C 580 360 550 420 500 450 Z"
          fill={primary}
        />

        {/* Mother Panda Eye Patches */}
        <ellipse cx="260" cy="215" rx="35" ry="50" transform="rotate(-18 260 215)" fill={isWhite ? cutout : primary} />
        <ellipse cx="405" cy="225" rx="35" ry="50" transform="rotate(18 405 225)" fill={isWhite ? cutout : primary} />

        {/* Mother Panda Pupils */}
        <circle cx="268" cy="208" r="9" fill={isWhite ? primary : cutout} />
        <circle cx="396" cy="218" r="9" fill={isWhite ? primary : cutout} />

        {/* Mother Panda Snout & Smile */}
        <path d="M 315 268 Q 338 258 360 268 Q 338 288 315 268 Z" fill={isWhite ? cutout : primary} />
        <path
          d="M 318 290 Q 338 312 358 290 Z"
          fill={isWhite ? cutout : primary}
        />

        {/* ========================================================= */}
        {/* BABY PANDA CUB (RIGHT)                                    */}
        {/* ========================================================= */}

        {/* Baby Panda Ears */}
        <circle cx="600" cy="200" r="38" fill={isWhite ? cutout : primary} />
        <circle cx="760" cy="215" r="36" fill={isWhite ? cutout : primary} />

        {/* Baby Panda Body & Head Silhouette */}
        <path
          d="M 540 420 C 510 330 550 265 640 235 C 725 205 825 240 865 310 C 905 380 895 470 825 510 C 740 550 560 520 540 420 Z"
          fill={primary}
        />

        {/* Baby Panda Eye Patches */}
        <ellipse cx="640" cy="325" rx="23" ry="33" transform="rotate(-15 640 325)" fill={isWhite ? cutout : primary} />
        <ellipse cx="735" cy="330" rx="23" ry="33" transform="rotate(18 735 330)" fill={isWhite ? cutout : primary} />

        {/* Baby Panda Pupils */}
        <circle cx="645" cy="320" r="6" fill={isWhite ? primary : cutout} />
        <circle cx="730" cy="325" r="6" fill={isWhite ? primary : cutout} />

        {/* Baby Panda Snout & Smile */}
        <path d="M 675 362 Q 690 354 705 362 Q 690 374 675 362 Z" fill={isWhite ? cutout : primary} />
        <path
          d="M 680 378 Q 690 388 700 378"
          stroke={isWhite ? cutout : primary}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* ========================================================= */}
        {/* FLOATING LOVE HEARTS                                      */}
        {/* ========================================================= */}

        {/* Top Heart */}
        <path
          d="M 565 145 C 565 118 535 102 515 124 C 495 102 465 118 465 145 C 465 180 515 208 515 208 C 515 208 565 180 565 145 Z"
          fill={primary}
          transform="rotate(16 515 150)"
        />

        {/* Bottom Heart */}
        <path
          d="M 590 236 C 590 218 568 206 552 222 C 536 206 514 218 514 236 C 514 262 552 284 552 284 C 552 284 590 262 590 236 Z"
          fill={primary}
          transform="rotate(25 552 245)"
        />

        {/* ========================================================= */}
        {/* CLOUD BASE FOUNDATION                                     */}
        {/* ========================================================= */}
        <path
          d="M 40 450 C 10 390 60 330 140 330 C 180 330 220 345 250 370 C 300 340 380 340 430 380 C 470 340 550 330 610 370 C 670 320 770 320 830 360 C 890 330 960 370 970 440 C 980 510 930 570 850 570 C 760 570 690 530 620 570 C 540 600 420 580 350 560 C 270 580 180 580 110 550 C 40 520 20 470 40 450 Z"
          fill={primary}
        />

        {/* ========================================================= */}
        {/* BOLD "RaXa" WORDMARK                                      */}
        {/* ========================================================= */}
        <g fill={cutout}>
          {/* 'R' */}
          <path d="M 120 375 L 120 530 L 182 530 L 182 472 L 226 530 L 296 530 L 232 462 C 266 452 286 426 286 396 C 286 380 270 375 250 375 Z M 182 412 L 226 412 C 238 412 246 420 246 430 C 246 440 238 447 226 447 L 182 447 Z" />
          {/* 'a' */}
          <path d="M 330 445 C 330 405 365 385 415 385 C 455 385 480 398 480 422 L 480 530 L 435 530 L 435 508 C 420 524 395 534 365 534 C 335 534 310 514 310 480 C 310 446 338 430 390 430 L 435 430 L 435 422 C 435 410 422 405 405 405 C 385 405 370 412 360 425 Z M 435 462 L 395 462 C 375 462 365 470 365 482 C 365 494 375 502 392 502 C 415 502 435 490 435 472 Z" />
          {/* 'X' */}
          <path d="M 500 375 L 565 452 L 500 530 L 565 530 L 600 482 L 635 530 L 700 530 L 635 452 L 700 375 L 635 375 L 600 422 L 565 375 Z" />
          {/* 'a' */}
          <path d="M 720 445 C 720 405 755 385 805 385 C 845 385 870 398 870 422 L 870 530 L 825 530 L 825 508 C 810 524 785 534 755 534 C 725 534 700 514 700 480 C 700 446 728 430 780 430 L 825 430 L 825 422 C 825 410 812 405 795 405 C 775 405 760 412 750 425 Z M 825 462 L 785 462 C 765 462 755 470 755 482 C 755 494 765 502 782 502 C 805 502 825 490 825 472 Z" />
        </g>
      </g>
    </svg>
  );
};
