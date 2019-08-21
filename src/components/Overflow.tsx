import React, { useState } from 'react'
import { css } from "@emotion/core"
import { Transition } from 'react-transition-group'

import Colors from '../constants/Colors'


export default () => {

  const [isVisible, setIsVisible]  = useState(true)

  const overflow = css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    objectFit: 'cover',
    stroke: Colors.bubbles,
    fill: Colors.bubbles,
    fillOpacity: 0.6,
    filter: 'blur(0.1rem) drop-shadow(0.2rem 1rem 0.8rem #ccc)',
    transition: 'all 1s ease-out'
  })

  const path = "M1980 0C1980 526.59 1980 855.71 1980 987.36C1980 1011.48 1944.99 1014.51 1940.85 990.75C1923.93 893.85 1893.11 717.38 1871.39 592.97C1866.71 566.19 1830.35 561.31 1818.78 585.91C1795.34 635.75 1787.75 651.87 1770.63 688.27C1747.9 736.6 1676.95 729.06 1664.87 677.04C1641.27 575.38 1627.18 514.7 1608.59 434.59C1591.96 362.95 1490.98 360.12 1470.36 430.72C1456.09 479.58 1473.07 421.44 1454.62 484.61C1437.86 542.01 1356.91 543.01 1338.73 486.04C1318.49 422.58 1339.53 488.54 1324.66 441.93C1270.29 271.53 1133.47 140.17 961 92.78C899.65 75.93 842.68 67.5 790.1 67.5C728.77 67.5 669.76 77 613.08 95.99C476.41 141.8 369.25 249.24 323.81 386.03C308.55 431.98 298.13 463.34 273.67 536.99C266.51 558.55 235.43 556.69 230.88 534.44C215.64 459.87 194.06 354.25 180.69 288.87C174.66 259.34 132.63 258.89 125.96 288.28C100.77 399.38 105.87 376.88 93.67 430.7C81.16 485.84 0 476.76 0 420.21C0 364.19 0 224.11 0 0L1980 0Z"

  const defaultStyle: any = {
    transition: `0.5s ease-in`,
  }

  const transitionStyles: any = {
    entering:  { transform: 'translateY(-2000px)' },
    entered:  { transform: 'translateY(0px)' },
    exiting:  { transform: 'translateY(0px)' },
    exited:  { opacity: 0, transform: 'translateY(-2000px)' },
  }

  return (
    <div>
      <Transition in={isVisible} timeout={300}>
        { (state: any) => (
          <svg xmlns="http://www.w3.org/2000/svg"
               css={overflow}
               preserveAspectRatio="none"
               focusable="false"
               viewBox="0 0 1980 1080"
               onClick={() => setIsVisible(false)}
               style={{...defaultStyle, ...transitionStyles[state]}}>
            <path d={path}></path>
          </svg>
        )}
      </Transition>
    </div>
  )
}
