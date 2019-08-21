import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare  } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import { Skill } from '../utils/type'
import { rhythm } from '../utils/typography'
import Colors from '../constants/Colors'

export default (props: Skill): any => {

  const styles = {
    cardContainer: {
      overflow: 'visible',
      width: '300px',
      height: '350px',
      fill: Colors.brewdog
    },
    path: {
      stroke: Colors.bubbles,
      strokeWidth: 6,
    }
  }

  const badgePath = 'M60 34.79L151.47 0C151.47 0 151.47 0 151.47 0C168.35 14.2 192.61 15.47 210.88 3.11C211.49 2.69 213.02 1.66 215.47 0L300 34.79C300 34.79 300 34.79 300 34.79C312.98 60.75 334.04 81.8 360 94.79C360 94.79 360 94.79 360 94.79C360 95.84 360 96.49 360 96.75C360 138.64 353.25 180.26 340 220C340 220 340 220 340 220C340 220 340 220 340 220C313.75 285.63 271.56 343.7 217.26 388.95C212.29 393.09 199.87 403.44 180 420C160.13 403.44 147.71 393.09 142.74 388.95C88.44 343.7 46.25 285.63 20 220C20 220 20 220 20 220C20 220 20 220 20 220C6.75 180.26 0 138.64 0 96.75C0 96.36 0 109.25 0 96.56C0 95.47 0.62 94.48 1.59 93.99C9.27 90.15 1.27 94.15 1.59 93.99C26.52 81.52 46.74 61.31 59.2 36.38C59.31 36.16 59.58 35.63 60 34.79Z'

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none"
         css={styles.cardContainer}
         aria-hidden="true"
         focusable="false"
         viewBox="0 0 360 420 ">
      <path d={badgePath} css={styles.path}></path>
    </svg>
  )
}
