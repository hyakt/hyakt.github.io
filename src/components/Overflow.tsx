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
    fillOpacity: 0.65,
    filter: 'blur(0.08rem) drop-shadow(0 0.3rem 0.5rem #c3c3c3)',
    transition: 'all 1s ease-out'
  })

  const path = "M1200 0C1200 327.15 1200 531.62 1200 613.41C1200 639.45 1163.31 645.02 1155.59 620.15C1146.53 590.99 1138.26 564.35 1122.82 514.66C1117.01 495.96 1093.7 489.71 1079.32 502.99C1073.46 508.41 1074.69 507.26 1065.79 515.48C1056.63 523.95 1042.75 524.7 1032.72 517.29C1009.18 499.89 989.94 474.52 975 441.2C964.37 417.48 955.89 389.21 949.58 356.37C945.29 334.03 915.8 328.6 903.82 347.94C891.81 367.35 893.05 365.35 881.94 383.3C868.54 404.94 835.5 398.61 831.05 373.55C820.69 315.34 816.08 289.44 809.17 250.56C790.75 147.01 717.1 61.86 617.27 28.72C576.72 15.26 538.28 9.19 501.94 10.53C450.16 12.42 398.17 25.97 345.97 51.15C278.98 83.46 230.32 144.47 213.71 216.96C200.97 272.57 191.08 315.73 178.85 369.09C172.93 394.94 135.6 393.36 131.88 367.1C124.25 313.27 113.83 239.71 104.79 175.89C102.54 159.97 79.9 159.04 76.34 174.72C61.07 242.05 64.16 228.41 56.77 261.03C49.19 294.45 0 288.94 0 254.68C0 220.72 0 135.83 0 0L1200 0Z"

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
               viewBox="0 0 1200 640"
               onClick={() => setIsVisible(false)}
               style={transitionStyles[state]}>
            <path d={path}></path>
          </svg>
        )}
      </Transition>
    </div>
  )
}
