/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { css } from '@emotion/react'

import colors from '../constants/colors'

export const Overflow: React.FC = () => {
  const overflow = css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    objectFit: 'cover',
    strokeWidth: '0.1px',
    strokeOpacity: 0.2,
    stroke: '#333',
    fill: colors.bubbles,
    fillOpacity: 0.7,
    filter: `blur(0.08rem) drop-shadow(0 0.3rem 0.5rem ${colors.bubbles})`,
    pointerEvents: 'none',
    zIndex: 1
  })

  const path =
    'M100 0C100 20.01 100 32.51 100 37.51C100 42.81 92.64 44.14 90.79 39.17C88.76 33.69 86.99 28.91 83.74 20.14C82.04 15.54 76.89 13.25 72.34 15.05C70 15.97 72.26 15.08 70.17 15.91C64.1 18.31 57.31 18.06 51.43 15.21C47.24 13.19 36.76 8.11 20 0L100 0Z'

  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        css={overflow}
        preserveAspectRatio='none'
        focusable='false'
        viewBox='0 0 100 50'
      >
        <path d={path} />
      </svg>
    </div>
  )
}
