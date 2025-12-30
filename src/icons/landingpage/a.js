import React from "react"

function LandingpageA() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      {/* Header Section */}
      <rect x={20} y={12} width={100} height={4} rx={2} fill="var(--solid-900)" />
      <rect x={20} y={22} width={150} height={3} rx={1.5} fill="var(--base-500)" />
      <rect x={20} y={29} width={120} height={3} rx={1.5} fill="var(--base-500)" />
      {/* CTA Buttons */}
      <rect x={20} y={39} width={28} height={8} rx={2} fill="var(--main-500)" />
      <rect x={54} y={39} width={28} height={8} rx={2} fill="var(--base-400)" />
      {/* Feature Cards */}
      <g>
        {/* Card 1 */}
        <rect x={155} y={20} width={35} height={35} rx={2} fill="var(--base-200)" />
        <circle cx={172.5} cy={28} r={4} fill="var(--main-500)" />
        <rect x={158} y={35} width={29} height={2} rx={1} fill="var(--base-500)" />
        {/* Card 2 */}
        <rect x={198} y={20} width={35} height={35} rx={2} fill="var(--base-200)" />
        <circle cx={215.5} cy={28} r={4} fill="var(--main-500)" />
        <rect x={201} y={35} width={29} height={2} rx={1} fill="var(--base-500)" />
      </g>
      {/* Footer Section */}
      <rect x={20} y={85} width={80} height={3} rx={1.5} fill="var(--base-500)" />
      <rect x={20} y={92} width={120} height={2} rx={1} fill="var(--base-400)" />
      <rect x={20} y={100} width={100} height={2} rx={1} fill="var(--base-400)" />
      <rect x={20} y={108} width={60} height={2} rx={1} fill="var(--base-400)" />
    </svg>
  )
}

export default LandingpageA
