import React from "react"

function EcommerceE() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      {/* Category Grid Header */}
      <rect x={20} y={12} width={80} height={4} rx={2} fill="var(--solid-900)" />
      {/* Category Cards Row 1 */}
      <g>
        {/* Category 1 */}
        <rect x={20} y={25} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={20} y={25} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
        <text x={47.5} y={50} fontSize="3" fill="var(--solid-900)" textAnchor="middle" fontWeight="500">Cat</text>
        {/* Category 2 */}
        <rect x={82} y={25} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={82} y={25} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
        <text x={109.5} y={50} fontSize="3" fill="var(--solid-900)" textAnchor="middle" fontWeight="500">Cat</text>
        {/* Category 3 */}
        <rect x={144} y={25} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={144} y={25} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
        <text x={171.5} y={50} fontSize="3" fill="var(--solid-900)" textAnchor="middle" fontWeight="500">Cat</text>
      </g>
      {/* Category Cards Row 2 */}
      <g>
        {/* Category 4 */}
        <rect x={20} y={72} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={20} y={72} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
        {/* Category 5 */}
        <rect x={82} y={72} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={82} y={72} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
        {/* Category 6 */}
        <rect x={144} y={72} width={55} height={40} rx={2} fill="var(--main-200)" />
        <rect x={144} y={72} width={55} height={40} rx={2} fill="var(--base-300)" opacity="0.5" />
      </g>
    </svg>
  )
}

export default EcommerceE
