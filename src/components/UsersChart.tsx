import React, { useState } from 'react';

export const UsersChart: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Time points and monthly sample data from Jan 2021 to Oct 2026
  const dataPoints = [
    { label: 'Jan 2021', year: '2021', reg: 1, unreg: 1, total: 2 },
    { label: 'Jul 2021', reg: 2, unreg: 2, total: 4 },
    { label: 'Jan 2022', year: '2022', reg: 4, unreg: 3, total: 7 },
    { label: 'Jul 2022', reg: 7, unreg: 4, total: 11 },
    { label: 'Jan 2023', year: '2023', reg: 11, unreg: 5, total: 16 },
    { label: 'Jul 2023', reg: 15, unreg: 6, total: 21 },
    { label: 'Jan 2024', year: '2024', reg: 18, unreg: 7, total: 25 },
    { label: 'Jul 2024', reg: 21, unreg: 8, total: 29 },
    { label: 'Jan 2025', year: '2025', reg: 24, unreg: 9, total: 33 },
    { label: 'Jul 2025', reg: 26, unreg: 9, total: 35 },
    { label: 'Jan 2026', year: '2026', reg: 27, unreg: 10, total: 37 },
    { label: 'Today', year: 'Today', reg: 28, unreg: 10, total: 38 },
  ];

  const maxVal = 40;
  const W = 1000;
  const H = 340;
  const L = 60;
  const R = 30;
  const T = 60;
  const B = 50;

  const getX = (idx: number) => L + (idx / (dataPoints.length - 1)) * (W - L - R);
  const getY = (val: number) => T + (1 - val / maxVal) * (H - T - B);

  // Generate smooth cubic bezier SVG path
  const makeSmoothPath = (key: 'reg' | 'unreg' | 'total') => {
    const pts = dataPoints.map((d, i) => [getX(i), getY(d[key])]);
    let path = `M ${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];

      const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
      const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
      const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
      const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

      path += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return path;
  };

  const regPath = makeSmoothPath('reg');
  const unregPath = makeSmoothPath('unreg');
  const totalPath = makeSmoothPath('total');

  const regArea = `${regPath} L ${getX(dataPoints.length - 1)},${H - B} L ${L},${H - B} Z`;
  const unregArea = `${unregPath} L ${getX(dataPoints.length - 1)},${H - B} L ${L},${H - B} Z`;
  const totalArea = `${totalPath} L ${getX(dataPoints.length - 1)},${H - B} L ${L},${H - B} Z`;

  const currentTotal = 38;
  const currentReg = 28;
  const currentUnreg = 10;
  const conversionPct = Math.round((currentReg / currentTotal) * 100);

  return (
    <section className="bg-[#0f2031] text-[#eef1f7] py-10 md:py-16 px-4 sm:px-8 lg:px-16 border-t border-[#24405a]" id="users">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-[#eef1f7]">
          Users
        </h2>
        <p className="text-xs sm:text-sm text-[#9fb2c6] max-w-3xl mb-6 leading-relaxed">
          Registered users (green), unregistered users (orange), and total (grey) since January 2021 &mdash; now {currentReg} registered, {currentUnreg} unregistered, {currentTotal} in total. {conversionPct}% of users who signed up for the 52-day free trial decided to subscribe.
        </p>

        {/* SVG Chart */}
        <div className="relative w-full overflow-hidden bg-[#0c1a27] border border-[#24405a] rounded-2xl p-2 sm:p-4 shadow-inner">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto block select-none"
            role="img"
            aria-label="Line graph of registered, unregistered, and total users"
          >
            <defs>
              <linearGradient id="gradReg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#95d600" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#95d600" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradUnreg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff9b3d" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#ff9b3d" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b8c4d0" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#b8c4d0" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            {[0, 10, 20, 30, 40].map((val) => (
              <g key={val}>
                <line x1={L} y1={getY(val)} x2={W - R} y2={getY(val)} stroke="#24405a" strokeWidth="1" />
                <text x={L - 10} y={getY(val) + 4} textAnchor="end" fontSize="12" fill="#9fb2c6" fontFamily="sans-serif">
                  {val}
                </text>
              </g>
            ))}

            {/* Vertical Year Grid lines */}
            {dataPoints.map((d, i) => {
              if (!d.year) return null;
              const x = getX(i);
              return (
                <g key={d.year}>
                  <line x1={x} y1={T} x2={x} y2={H - B} stroke="#24405a" strokeWidth="1" strokeDasharray="3 4" />
                  <text x={x} y={H - 24} textAnchor={i === 0 ? 'start' : i === dataPoints.length - 1 ? 'end' : 'middle'} fontSize="12" fill="#9fb2c6" fontFamily="sans-serif">
                    {d.year}
                  </text>
                </g>
              );
            })}

            {/* Faded Area Fills */}
            <path d={totalArea} fill="url(#gradTotal)" />
            <path d={unregArea} fill="url(#gradUnreg)" />
            <path d={regArea} fill="url(#gradReg)" />

            {/* Line Strokes */}
            <path d={totalPath} fill="none" stroke="#b8c4d0" strokeWidth="2.5" strokeLinecap="round" />
            <path d={unregPath} fill="none" stroke="#ff9b3d" strokeWidth="3" strokeLinecap="round" />
            <path d={regPath} fill="none" stroke="#95d600" strokeWidth="3.5" strokeLinecap="round" />

            {/* End Point Glows & Labels */}
            {(() => {
              const lastIdx = dataPoints.length - 1;
              const lastX = getX(lastIdx);
              const lastRegY = getY(currentReg);
              const lastUnregY = getY(currentUnreg);
              const lastTotY = getY(currentTotal);

              return (
                <g>
                  {/* Total dot */}
                  <circle cx={lastX} cy={lastTotY} r="5" fill="#b8c4d0" stroke="#0f2031" strokeWidth="2" />
                  <text x={lastX - 10} y={lastTotY - 8} fill="#eef1f7" fontSize="14" fontWeight="800" textAnchor="end">
                    {currentTotal}
                  </text>

                  {/* Registered dot */}
                  <circle cx={lastX} cy={lastRegY} r="6" fill="#95d600" stroke="#0f2031" strokeWidth="2" />
                  <text x={lastX - 10} y={lastRegY - 8} fill="#95d600" fontSize="14" fontWeight="800" textAnchor="end">
                    {currentReg}
                  </text>

                  {/* Unregistered dot */}
                  <circle cx={lastX} cy={lastUnregY} r="5" fill="#ff9b3d" stroke="#0f2031" strokeWidth="2" />
                  <text x={lastX - 10} y={lastUnregY + 18} fill="#ff9b3d" fontSize="14" fontWeight="800" textAnchor="end">
                    {currentUnreg}
                  </text>
                </g>
              );
            })()}

            {/* Interactive Hover Hit Areas */}
            {dataPoints.map((d, i) => (
              <rect
                key={i}
                x={getX(i) - 25}
                y={T}
                width={50}
                height={H - T - B}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              />
            ))}

            {/* Hover Indicator */}
            {hoverIndex !== null && (
              <g>
                <line
                  x1={getX(hoverIndex)}
                  y1={T}
                  x2={getX(hoverIndex)}
                  y2={H - B}
                  stroke="#ffb703"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                <circle cx={getX(hoverIndex)} cy={getY(dataPoints[hoverIndex].reg)} r="5" fill="#95d600" />
                <circle cx={getX(hoverIndex)} cy={getY(dataPoints[hoverIndex].unreg)} r="5" fill="#ff9b3d" />
                <circle cx={getX(hoverIndex)} cy={getY(dataPoints[hoverIndex].total)} r="5" fill="#b8c4d0" />
              </g>
            )}

            {/* Legend & Stats in SVG Header */}
            <g transform="translate(60, 26)">
              <line x1="0" y1="0" x2="20" y2="0" stroke="#95d600" strokeWidth="4" />
              <text x="28" y="4" fill="#eef1f7" fontSize="13" fontWeight="700">
                Registered
              </text>

              <line x1="120" y1="0" x2="140" y2="0" stroke="#ff9b3d" strokeWidth="4" />
              <text x="148" y="4" fill="#eef1f7" fontSize="13" fontWeight="700">
                Unregistered
              </text>

              <line x1="260" y1="0" x2="280" y2="0" stroke="#b8c4d0" strokeWidth="4" />
              <text x="288" y="4" fill="#eef1f7" fontSize="13" fontWeight="700">
                Total
              </text>

              <text x={W - 100} y="4" textAnchor="end" fill="#95d600" fontSize="14" fontWeight="800">
                {conversionPct}% subscribed
              </text>
            </g>
          </svg>

          {/* Active Hover Tooltip */}
          {hoverIndex !== null && (
            <div
              className="absolute pointer-events-none bg-[#12263a] border border-[#24405a] text-white p-2.5 rounded-xl shadow-xl text-xs z-20 flex flex-col gap-1"
              style={{
                left: `${(getX(hoverIndex) / W) * 100}%`,
                top: '40%',
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="font-extrabold text-[var(--rx-lime)] border-b border-slate-700 pb-1">
                {dataPoints[hoverIndex].label}
              </div>
              <div className="flex justify-between gap-3 text-slate-300">
                <span>Total:</span>
                <b className="text-white">{dataPoints[hoverIndex].total}</b>
              </div>
              <div className="flex justify-between gap-3 text-emerald-400">
                <span>Registered:</span>
                <b>{dataPoints[hoverIndex].reg}</b>
              </div>
              <div className="flex justify-between gap-3 text-orange-400">
                <span>Unregistered:</span>
                <b>{dataPoints[hoverIndex].unreg}</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
