import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SectionHeader from './sectionheader'
import Colors from '../constants/Colors'

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
          fixed(width: 300) {
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
    }
  ]

  const styles = {
    container: css({
      display: 'grid'
    })
  }

  return (
    <>
      <SectionHeader title='Product'/>
      <div css={styles.container}>
        {products.map((p: Product) => {
          return (
            <Img fixed={p.image} />
          )
        })}
      </div>
    </>
  )
}
