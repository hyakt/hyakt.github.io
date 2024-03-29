import React from 'react'
import { css, useTheme } from '@emotion/react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { rhythm } from '../utils/typography'
import { graphql, useStaticQuery } from 'gatsby'

export type Props = {
  name: string
  image: IGatsbyImageData
  alt: string
  date?: Date
  description?: string
  tags?: string[]
  badge?: JSX.Element
  github?: string
  url?: string
}

export const ProductCard: React.FC<Props> = (props) => {
  const theme = useTheme()

  const styles = {
    cardContainer: {
      width: '250px',
      height: '250px'
    },
    resetCard: {
      padding: 0,
      boxShadow: 'unset'
    },
    cardFrontSide: css({
      position: 'relative',
      width: '100%',
      height: '100%',
      border: `0.2rem solid ${theme.colors.bubbles}`,
      borderRadius: '125px',
      overflow: 'hidden'
    }),
    cardBackSide: css({
      position: 'relative',
      width: '100%',
      height: '100%',
      border: `0.2rem solid ${theme.colors.bubbles}`,
      borderRadius: '125px',
      overflow: 'hidden',
      background: theme.colors.brewdog
    }),
    name: css({
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      color: theme.colors.bubbles
    }),
    image: css({
      borderRadius: '125px',
      pointerEvents: 'none',
      filter: 'brightness(65%)'
    }),
    description: css({
      padding: `${rhythm(1.8)} ${rhythm(2)} 0 ${rhythm(2)}`,
      color: theme.colors.bubbles
    }),
    linkContainer: css({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0.8rem 0'
    }),
    linkItem: css({
      margin: '0 0.2rem'
    }),
    icon: css({
      height: '1rem',
      width: '1rem'
    }),
    tagsContainer: css({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '1rem 0.5rem 0 0.5rem'
    }),
    tag: css({
      border: `1px solid ${theme.colors.bubbles}`,
      margin: '0.1rem',
      padding: '0.2rem',
      borderRadius: '1rem',
      fontSize: '0.6rem',
      fontWeight: 400,
      color: theme.colors.bubbles
    })
  }

  const data = useStaticQuery(
    graphql`
      query {
        github: file(relativePath: { eq: "social/github.svg" }) {
          publicURL
        }
      }
    `
  )

  return (
    <Flippy
      flipOnHover={true}
      flipDirection='vertical'
      style={styles.cardContainer}
    >
      <FrontSide style={styles.resetCard}>
        <div css={styles.cardFrontSide}>
          <GatsbyImage css={styles.image} image={props.image} alt={props.alt} />
          <h3 css={styles.name}>{props.name}</h3>
        </div>
      </FrontSide>
      <BackSide style={styles.resetCard}>
        <div css={styles.cardBackSide}>
          <h3 css={styles.description}>{props.description}</h3>
          <div css={styles.tagsContainer}>
            {props.tags &&
              props.tags.map((e) => (
                <p key={e} css={styles.tag}>
                  {e}
                </p>
              ))}
          </div>
          <div css={styles.linkContainer}>
            {props.github && (
              <div css={styles.linkItem}>
                <a target='_blank' rel='noreferrer' href={props.github}>
                  <img css={styles.icon} src={data.github.publicURL} />
                </a>
              </div>
            )}
            {props.badge && <div css={styles.linkItem}>{props.badge}</div>}
            {props.url && (
              <div css={styles.linkItem}>
                <a target='_blank' rel='noreferrer' href={props.url}>
                  🔗
                </a>
              </div>
            )}
          </div>
        </div>
      </BackSide>
    </Flippy>
  )
}
