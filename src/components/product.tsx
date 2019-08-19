import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SectionHeader from './sectionheader'
import Colors from '../constants/Colors'
import { rhythm } from '../utils/typography'

type Product = {
  name: string,
  date?: string,
  description?: string,
  techStack?: Array<string>,
  badge?: string,
  webpage?: string,
  github?: string,
  image?: any
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      regist: file(relativePath: { eq: "product/regist.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      picker: file(relativePath: { eq: "product/picker.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      hackernews: file(relativePath: { eq: "product/hackernews.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      linebot: file(relativePath: { eq: "product/linebot.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      hugo: file(relativePath: { eq: "product/hugo.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      shapio: file(relativePath: { eq: "product/shapio.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      hmd: file(relativePath: { eq: "product/hmd.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const products: Array<Product> = [
    {
      name: 'regist',
      image: data.regist.childImageSharp.fixed
    },
    {
      name: 'expo-multiple-media-imagepicker',
      image: data.picker.childImageSharp.fixed
    },
    {
      name: 'emacs-dashboard-hackernews',
      image: data.hackernews.childImageSharp.fixed
    },
    {
      name: 'この本いつ発売したっけ?',
      image: data.linebot.childImageSharp.fixed
    },
    {
      name: 'hugo-plesure-theme',
      image: data.hugo.childImageSharp.fixed
    },
    {
      name: 'SHAPIO',
      image: data.shapio.childImageSharp.fixed
    },
    {
      name: 'Enhancing Gaming Experience System Using See-Through HMD ',
      image: data.hmd.childImageSharp.fixed
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 250px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200
    }),
    productContainer: css({
      width: '250px',
      height: '250px'
    }),
    productInner: css({
      position: 'relative',
      width: '100%',
      height: '100%',
      border: `0.2rem solid ${Colors.bubbles}`,
      borderRadius: '125px',
      overflow: 'hidden'
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
      filter: 'brightness(60%)',
      margin: '-1px'
    })
  }

  return (
    <>
      <SectionHeader title='Product' />
      <div css={styles.container}>
        {products.map((p: Product) => {
          return (
            <div css={styles.productContainer}>
              <div css={styles.productInner}>
                <Img css={styles.image} fixed={p.image} />
                <h3 css={styles.name}>{p.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
