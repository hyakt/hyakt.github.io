import React from 'react'
import { css, keyframes } from "@emotion/core"

interface Props {
  images: Array<string>,
  width: number,
  height: number
}

export default (props: Props) => {
  const { images } = props
  const n = images.length
  const speed = n * 2
  const deg = 360 / n
  const radius = Math.round((props.width / 2) / Math.tan( Math.PI / n)) + (n)

  const carousel = keyframes`
  {
    from {
      transform: perspective(1000px) rotateY(0deg);
    }
    to {
      transform: perspective(1000px) rotateY(-360deg);
    }
  }`

  const styles = {
    container: css({
      animation: `${carousel} ${speed}s infinite linear`,
      height: props.height,
      width: props.width,
      transformStyle: 'preserve-3d'
    }),
    cube: {
      display: 'flex',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      top: 0,
      left: 0,
      margin: '0 auto',
      transformOrigin: '50% 50% 0'
    },
    image: css({
      justifySelf: 'center',
      alignSelf: 'center',
      height: props.height,
      width: props.width,
    })
  }

  return (
    <div css={styles.container}>
      { images.map((imageUrl, i) => (
        <div css={css({...styles.cube, transform: `rotateY(${deg * i}deg) translateZ(${radius}px)`})}>
          <img src={imageUrl} css={styles.image}/>
        </div>
      )) }
    </div>
  )
}
