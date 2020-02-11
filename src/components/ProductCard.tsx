
import React from 'react'
import { css } from '@emotion/core'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import { Product } from '../utils/type'
import { rhythm } from '../utils/typography'
import Colors from '../constants/Colors'

export default (props: Product): any => {
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
      border: `0.2rem solid ${Colors.bubbles}`,
      borderRadius: '125px',
      overflow: 'hidden'
    }),
    cardBackSide: css({
      position: 'relative',
      width: '100%',
      height: '100%',
      border: `0.2rem solid ${Colors.bubbles}`,
      borderRadius: '125px',
      overflow: 'hidden',
      background: Colors.brewdog
    }),
    name: css({
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      color: Colors.bubbles
    }),
    image: css({
      borderRadius: '125px',
      pointerEvents: 'none',
      filter: 'brightness(65%)'
    }),
    description: css({
      padding: `${rhythm(1.8)} ${rhythm(2)} 0 ${rhythm(2)}`,
      color: Colors.bubbles
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
      fontSize: '1.4rem'
    }),
    tagsContainer: css({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '1rem 0.5rem 0 0.5rem'
    }),
    tag: css({
      border: `1px solid ${Colors.bubbles}`,
      margin: '0.1rem',
      padding: '0.2rem',
      borderRadius: '1rem',
      fontSize: '0.6rem',
      fontWeight: 400,
      color: Colors.bubbles
    })
  }

  return (
    <Flippy
      flipOnHover={true}
      flipDirection="vertical"
      style={styles.cardContainer}>
      <FrontSide style={styles.resetCard}>
        <div css={styles.cardFrontSide}>
          <Img css={styles.image} fixed={props.image} />
          <h3 css={styles.name}>{props.name}</h3>
        </div>
      </FrontSide>
      <BackSide style={styles.resetCard}>
        <div css={styles.cardBackSide}>
          <h3 css={styles.description}>
            {props.description}
          </h3>
          <div css={styles.tagsContainer}>
            {props.tags.map((e: string) => <p key={e} css={styles.tag}>{e}</p>)}
          </div>
          <div css={styles.linkContainer}>
            {props.github
              ? <div css={styles.linkItem}>
                <a target="_blank" href={props.github}>
                  <FontAwesomeIcon icon={faGithubSquare} css={styles.icon} />
                </a>
              </div>
              : <div />
            }
            {props.badge
              ? <div css={styles.linkItem}>
                {props.badge}
              </div>
              : <div />
            }
            {props.url
              ? <div css={styles.linkItem}>
                <a target="_blank" href={props.url}>
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} css={styles.icon} />
                </a>
              </div>
              : <div />
            }
          </div>
        </div>
      </BackSide>
    </Flippy>
  )
}
