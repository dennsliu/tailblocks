import React from "react"

function LandingpageD() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      {/* Features Header */}
      <rect x={20} y={12} width={80} height={4} rx={2} fill="var(--solid-900)" />
      {/* Feature 1 */}
      <g>
        <rect x={20} y={25} width={70} height={55} rx={2} stroke="var(--main-500)" strokeWidth="1" fill="none" />
        <circle cx={37} cy={40} r={5} fill="var(--main-500)" />
        <rect x={24} y={50} width={62} height={2} rx={1} fill="var(--solid-900)" />
        <rect x={24} y={56} width={50} height={1} rx={0.5} fill="var(--base-500)" />
      </g>
      {/* Feature 2 */}
      <g>
        <rect x={98} y={25} width={70} height={55} rx={2} stroke="var(--main-500)" strokeWidth="1" fill="none" />
        <circle cx={115} cy={40} r={5} fill="var(--main-500)" />
        <rect x={102} y={50} width={62} height={2} rx={1} fill="var(--solid-900)" />
        <rect x={102} y={56} width={50} height={1} rx={0.5} fill="var(--base-500)" />
      </g>
      {/* Feature 3 */}
      <g>
        <rect x={176} y={25} width={70} height={55} rx={2} stroke="var(--main-500)" strokeWidth="1" fill="none" />
        <circle cx={193} cy={40} r={5} fill="var(--main-500)" />
        <rect x={180} y={50} width={62} height={2} rx={1} fill="var(--solid-900)" />
        <rect x={180} y={56} width={50} height={1} rx={0.5} fill="var(--base-500)" />
      </g>
    </svg>
  )
}

export default LandingpageD
