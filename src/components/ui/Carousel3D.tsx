/** @jsx jsx */
import React from 'react'
import { jsx, css, keyframes } from '@emotion/react'

type Props = {
  images: Array<string>
  width: number
  height: number
  reverse?: boolean
}

export const Carousel3D: React.FC<Props> = (props) => {
  const { images } = props
  const n = images.length
  const speed = n * 2
  const deg = 360 / n
  const radius = Math.round(props.width / 2 / Math.tan(Math.PI / n)) + n * 2
  const direction = props.reverse ? -360 : 360

  const carousel = keyframes`
    from {
      transform: perspective(400px) rotateY(0deg);
    }
    to {
      transform: perspective(400px) rotateY(${direction}deg);
}`

  const styles = {
    container: css({
      animation: `${carousel} ${speed}s linear infinite`,
      height: props.height,
      width: props.width,
      transformStyle: 'preserve-3d'
    }),
    cube: (i: number) =>
      css({
        display: 'flex',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        top: 0,
        left: 0,
        margin: '0 auto',
        transformOrigin: '50% 50% 0',
        transform: `rotateY(${deg * i}deg) translateZ(${radius}px)`
      }),
    image: css({
      justifySelf: 'center',
      alignSelf: 'center',
      height: props.height,
      width: props.width
    })
  }

  return (
    <div css={styles.container}>
      {images.map((imageUrl, i) => (
        <div key={imageUrl} css={styles.cube(i)}>
          <img src={imageUrl} css={styles.image} />
        </div>
      ))}
    </div>
  )
}
