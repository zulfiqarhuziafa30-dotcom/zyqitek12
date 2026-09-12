import React from 'react';

interface ZyqitekLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function ZyqitekLogo({ className = "w-9 h-9", size, showText = false }: ZyqitekLogoProps) {
  const style = size ? { width: size, height: (size * 295) / 340 } : undefined;

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 295"
        className={className}
        style={style}
        fill="none"
        aria-label="ZYQITEK Logo"
        role="img"
      >
        <defs>
          {/* Realistic Brushed Silver Metallic Linear Gradient */}
          <linearGradient id="zyqitekSilver" x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="12%" stopColor="#EFF2F6" />
            <stop offset="35%" stopColor="#CCD3DD" />
            <stop offset="55%" stopColor="#E5E9EF" />
            <stop offset="78%" stopColor="#B8C1CD" />
            <stop offset="92%" stopColor="#D3DAE3" />
            <stop offset="100%" stopColor="#9BA5B3" />
          </linearGradient>

          {/* Chrome Edge Highlight Stroke */}
          <linearGradient id="zyqitekChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#CBD3DC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8E99A8" stopOpacity="0.8" />
          </linearGradient>

          {/* Bevel 3D Bottom Shadow */}
          <linearGradient id="zyqitekShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#555E6A" />
            <stop offset="100%" stopColor="#363C44" />
          </linearGradient>

          {/* Vibrant Lime Green Gradient */}
          <linearGradient id="zyqitekGreen" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#96F024" />
            <stop offset="25%" stopColor="#80DD12" />
            <stop offset="70%" stopColor="#5EBA06" />
            <stop offset="100%" stopColor="#469302" />
          </linearGradient>

          {/* Green Gloss Reflection */}
          <linearGradient id="zyqitekGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C2FF6E" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8CE81B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3D8500" stopOpacity="0.6" />
          </linearGradient>

          {/* Ambient Shadow for realistic depth on any background */}
          <filter id="zyqitekDropShadow" x="-15%" y="-15%" width="135%" height="140%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#000000" floodOpacity="0.22" />
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.14" />
          </filter>

          <filter id="zyqitekGreenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#387702" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter="url(#zyqitekDropShadow)">
          {/* 3D Bevel Underside / Extrusion Depth */}
          <path
            d="
              M 87 17.5
              L 315 17.5
              L 146.5 225.5
              L 272 225.5
              A 10 10 0 0 1 282 235.5
              L 282 267.5
              A 10 10 0 0 1 272 277.5
              L 63 277.5
              C 40 277.5, 25 266.5, 38 253.5
              L 182 75.5
              L 40 75.5
              Z
            "
            fill="url(#zyqitekShadow)"
            opacity="0.55"
          />

          {/* Main Metallic 'Z' Body */}
          <path
            d="
              M 87 15
              L 315 15
              L 146.5 223
              L 272 223
              A 10 10 0 0 1 282 233
              L 282 265
              A 10 10 0 0 1 272 275
              L 63 275
              C 40 275, 25 264, 38 251
              L 182 73
              L 40 73
              Z
            "
            fill="url(#zyqitekSilver)"
            stroke="url(#zyqitekChrome)"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />

          {/* Subtle Inner Metallic Sheen for Brushed Look */}
          <path
            d="
              M 92 18
              L 305 18
              L 290 35
              L 115 35
              Z
            "
            fill="#FFFFFF"
            opacity="0.35"
          />

          {/* Green Accent Parallelogram */}
          <g filter="url(#zyqitekGreenGlow)">
            {/* Green 3D Base */}
            <path
              d="
                M 225.2 153
                L 297.2 153
                Q 305.2 153, 302.2 160
                L 262.9 202
                Q 259.9 209, 251.9 209
                L 179.9 209
                Q 171.9 209, 174.9 202
                L 214.2 160
                Q 217.2 153, 225.2 153
                Z
              "
              fill="url(#zyqitekGreen)"
              stroke="#B3FF54"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />

            {/* Green Bevel Top Reflection */}
            <path
              d="
                M 226 155
                L 295 155
                Q 301 155, 298 160
                L 275 180
                L 205 180
                Q 218 155, 226 155
                Z
              "
              fill="url(#zyqitekGloss)"
            />
          </g>
        </g>
      </svg>

      {showText && (
        <span className="font-black tracking-tighter text-2xl">
          ZYQITEK
        </span>
      )}
    </div>
  );
}
