import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SectionHeader from './sectionheader'
import Colors from '../constants/Colors'
import { rhythm } from '../utils/typography'

type Product = {
  name: string,
  date: string,
  description: string,
  techStack: Array<string>,
  badge?: string,
  webpage: string,
  github?: string,
  image: any
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      regist: file(relativePath: { eq: "product/regist.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const products: Array<Product> = [
    {
      name: 'regist',
      date: '2019/07',
      description: 'GithubのGistビューア(iOS)',
      techStack: [
        'ReactNative', 'Expo', 'Github API', 'JavaScript', 'Sentry'
      ],
      badge:'<a href="https://apps.apple.com/us/app/regist/id1472456939?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2019-07-16&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"></a>',
      webpage: 'https://apps.apple.com/us/app/regist/id1472456939',
      image: data.regist.childImageSharp.fixed,
    },
    {
      name: 'regist',
      date: '2019/07',
      description: 'GithubのGistビューア(iOS)',
      techStack: [
        'ReactNative', 'Expo', 'Github API', 'JavaScript', 'Sentry'
      ],
      badge:'<a href="https://apps.apple.com/us/app/regist/id1472456939?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2019-07-16&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"></a>',
      webpage: 'https://apps.apple.com/us/app/regist/id1472456939',
      image: data.regist.childImageSharp.fixed,
    },
    {
      name: 'regist',
      date: '2019/07',
      description: 'GithubのGistビューア(iOS)',
      techStack: [
        'ReactNative', 'Expo', 'Github API', 'JavaScript', 'Sentry'
      ],
      badge:'<a href="https://apps.apple.com/us/app/regist/id1472456939?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2019-07-16&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"></a>',
      webpage: 'https://apps.apple.com/us/app/regist/id1472456939',
      image: data.regist.childImageSharp.fixed,
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    }),
    productContainer: css({
      width: '300px',
      height: '300px',
    }),
    name: css({
      position: 'absolute'
    }),
    image: css({
      objectFit: 'cover',
      borderRadius: '150px',
      background: Colors.bubbles,
      boxShadow: '2px 2px 4px gray'
    })
  }

  return (
    <>
      <SectionHeader title='Product'/>
      <div css={styles.container}>
        {products.map((p: Product) => {
          return (
            <div css={styles.productContainer}>
              <h3 css={styles.name}>{p.name}</h3>
              <Img css={styles.image} fixed={p.image} />
            </div>
          )
        })}
      </div>
    </>
  )
}
