import React from 'react'
import { css, keyframes } from '@emotion/core'

export default () => {
  const bubble = keyframes`
  {
    0% {
      bottom: -100px;
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px);
    }
    100% {
      bottom: 1000px;
    }
  }`

  const styles = css`
    .bubbles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      top: 0;
      left: 0;
    }

    .bubble {
      position: absolute;
      bottom: -40;
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 50%;
      animation: bubble 10s ease-in infinite;
    }

    .bubble:nth-child(1) {
      width: 20px;
      height: 20px;
      left: 10%;
      animation-duration: 5s;
    }

    .bubble:nth-child(2) {
      width: 30px;
      height: 30px;
      left: 20%;
      animation-delay: 1s;
    }

    .bubble:nth-child(3) {
      width: 30px;
      height: 30px;
      left: 30%;
      animation-duration: 3s;
    }

    .bubble:nth-child(4) {
      width: 50px;
      height: 50px;
      left: 45%;
      animation-duration: 6s;
      animation-delay: 2s;
    }

    .bubble:nth-child(5) {
      width: 10px;
      height: 10px;
      left: 60%;
      animation-duration: 3.5s;
    }

    .bubble:nth-child(6) {
       width: 30px;
       height: 30px;
       left: 70%;
       animation-duration: 5s;
     }
  `

  return (
    <div></div>
  )
}
