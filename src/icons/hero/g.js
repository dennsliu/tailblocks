import React from "react"

function HeroG() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      {/* Banner Background */}
      <defs>
        <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--main-500)" />
          <stop offset="100%" stopColor="var(--main-600)" />
        </linearGradient>
      </defs>
      <rect x={20} y={20} width={226} height={80} rx={3} fill="url(#bannerGrad)" />
      
      {/* Banner Content */}
      {/* Badge */}
      <rect x={50} y={30} width={50} height={4} rx={2} fill="white" opacity="0.3" />
      
      {/* Headline */}
      <rect x={30} y={42} width={160} height={3} rx={1.5} fill="white" />
      
      {/* Description */}
      <rect x={30} y={50} width={140} height={2} rx={1} fill="white" opacity="0.8" />
      <rect x={30} y={55} width={100} height={2} rx={1} fill="white" opacity="0.8" />
      
      {/* CTA Button */}
      <rect x={30} y={63} width={40} height={5} rx={1.5} fill="white" />
      <text x={50} y={66.5} fontSize="2.5" fill="var(--main-500)" textAnchor="middle" fontWeight="600">SHOP</text>
      
      {/* Decorative circles */}
      <circle cx={220} cy={25} r={15} fill="white" opacity="0.05" />
      <circle cx={35} cy={85} r={20} fill="white" opacity="0.05" />
    </svg>
  )
}

export default HeroG
