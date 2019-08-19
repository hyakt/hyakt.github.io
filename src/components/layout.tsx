import React, { useEffect, useState} from "react"
import { Global, css } from "@emotion/core"
import styled from '@emotion/styled'

import { throttle } from 'lodash'

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

  const reset = css`
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    aarticle, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    }

    body {
    line-height:1;
    }

    article,aside,details,figcaption,figure,
    footer,header,hgroup,menu,nav,section {
    display:block;
    }

    nav ul {
    list-style:none;
    }

    blockquote, q {
    quotes:none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
    content:'';
    content:none;
    }

    a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    }

    /* change colours to suit your needs */
    ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
    }

    /* change colours to suit your needs */
    mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
    }

    del {
    text-decoration: line-through;
    }

    abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
    }

    table {
    border-collapse:collapse;
    border-spacing:0;
    }

    /* change border colour to suit your needs */
    hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
    }

    input, select {
    vertical-align:middle;
    }
  `

  const global = css`
    body {
    background: ${Colors.bubbles};
    border: 1rem solid ${Colors.bubbles};
    color: ${Colors.fg};
    }
    a:link { color: ${Colors.fg}; }
    a:visited { color: ${Colors.fg}; }
    a:hover { color: ${Colors.fg}; }
    a:active { color: ${Colors.fg}; }
  `
  const background = css`
    position: fixed;
    bottom: 0;
    background: ${Colors.paleale};
    height: ${100 - scrolled}%;
    width: 100%;
    z-index: -1;
    transition: 1s;
  `
  const wave = css`
    position: fixed;
    bottom: ${100 - scrolled}%;
    fill: ${Colors.paleale};
    width: 100%;
    height: 6rem;
    transition: 1s;
    transform: scale(-1, -1);
  `
  return (
    <>
      <Global styles={reset} />
      <Global styles={global} />
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
