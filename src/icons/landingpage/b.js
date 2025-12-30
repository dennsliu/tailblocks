import React from "react"

function LandingpageB() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      {/* Product Grid Header */}
      <rect x={20} y={12} width={100} height={4} rx={2} fill="var(--solid-900)" />
      {/* Product Cards Row 1 */}
      <g>
        {/* Card 1 */}
        <rect x={20} y={25} width={35} height={30} rx={2} fill="var(--base-200)" />
        <rect x={20} y={25} width={35} height={18} rx={1} fill="var(--main-200)" />
        {/* Card 2 */}
        <rect x={60} y={25} width={35} height={30} rx={2} fill="var(--base-200)" />
        <rect x={60} y={25} width={35} height={18} rx={1} fill="var(--main-200)" />
        {/* Card 3 */}
        <rect x={100} y={25} width={35} height={30} rx={2} fill="var(--base-200)" />
        <rect x={100} y={25} width={35} height={18} rx={1} fill="var(--main-200)" />
        {/* Card 4 */}
        <rect x={140} y={25} width={35} height={30} rx={2} fill="var(--base-200)" />
        <rect x={140} y={25} width={35} height={18} rx={1} fill="var(--main-200)" />
      </g>
      {/* Price and Rating */}
      <rect x={20} y={58} width={90} height={2} rx={1} fill="var(--base-400)" />
      <rect x={115} y={58} width={60} height={2} rx={1} fill="var(--base-400)" />
      {/* Add to Cart Button */}
      <rect x={20} y={65} width={90} height={3} rx={1.5} fill="var(--main-500)" />
      <rect x={115} y={65} width={60} height={3} rx={1.5} fill="var(--main-500)" />
      {/* Section divider */}
      <line x1={20} y1={78} x2={226} y2={78} stroke="var(--base-300)" strokeWidth={1} />
    </svg>
  )
}

export default LandingpageB
