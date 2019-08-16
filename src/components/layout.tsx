import React, { useEffect, useState} from "react"
import { Global, css } from "@emotion/core"
import emotionReset from 'emotion-reset'
import { throttle } from 'lodash';

import Colors from '../constants/Colors'

interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', throttle(scrollCallback, 500))
  }, [])

  const scrollCallback = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100)
  }

  const background = css`
    position: fixed;
    background: ${Colors.bubbles};
    height: ${scrolled}%;
    width: 100%;
    z-index: -1;
    transition: 1s;
  `
  const wave = css`
    position: fixed;
    top: ${scrolled}%;
    fill: ${Colors.bubbles};
    width: 100%;
    height: 6rem;
    transition: 1s;
  `
  return (
    <>
      <Global styles={emotionReset} />
      <Global styles={css`body { background: #F2B705; }`} />
      <div css={background}>
        <svg xmlns="http://www.w3.org/2000/svg"
             css={wave}
             viewBox="0 0 54 14"
             preserveAspectRatio="none"
             aria-hidden="true"
             focusable="false">
          <path d="M 27 10.2878 C 20.3523 12.1439 13.3523 13.4963 0 13.4963 L 0 0 L 54 0 L 54 3.28785 C 40.6477 3.28785 33.6477 8.43177 27 10.2878 Z">
            <animate attributeName="d" values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" repeatCount="indefinite" dur="20s">
            </animate>
          </path>
        </svg>
      </div>
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
