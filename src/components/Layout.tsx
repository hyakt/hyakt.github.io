import React from "react"
import { Global, css } from "@emotion/core"

import Colors from '../constants/Colors'
import { rhythm } from '../utils/typography'

interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
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
    border-left: 1rem solid ${Colors.bubbles};
    border-right: 1rem solid ${Colors.bubbles};
    color: ${Colors.fg};
    }
    a:link { color: ${Colors.fg}; }
    a:visited { color: ${Colors.fg}; }
    a:hover { color: ${Colors.fg}; }
    a:active { color: ${Colors.fg}; }
  `
  const background = css`
    background: ${Colors.paleale};
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 1s;
  `
  return (
    <>
      <Global styles={reset} />
      <Global styles={global} />
      <div css={background}>
        <div>
          <main>{props.children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
