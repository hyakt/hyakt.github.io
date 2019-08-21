import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import ProductCard from '../components/ProductCard'

import { rhythm } from '../utils/typography'
import { Product } from '../utils/types'

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
      },
      twitterbot: file(relativePath: { eq: "product/twitterbot.png" }) {
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
      image: data.regist.childImageSharp.fixed,
      date: new Date(2019, 7, 1),
      description: 'ReactNativeで作成したiOS用のGistビューア',
      tags: ['ReactNative', 'expo', 'Github API', 'JavaScript', 'Sentry'],
      badge: <a href="https://apps.apple.com/us/app/regist/id1472456939?mt=8"><img src="https://linkmaker.itunes.apple.com/assets/shared/badges/ja-jp/appstore-sm.svg" alt="appstore" height="18" /></a>
    },
    {
      name: 'expo-multiple-media-imagepicker',
      image: data.picker.childImageSharp.fixed,
      date: new Date(2019, 6, 1),
      description: 'expoのMediaLibraryを利用した、複数選択可能なimagepicker',
      tags: ['ReactNative', 'expo', 'JavaScript'],
      badge: <a href="https://badge.fury.io/js/expo-multiple-media-imagepicker"><img src="https://badge.fury.io/js/expo-multiple-media-imagepicker.svg" alt="npm version" height="18" /></a>,
      github: 'https://github.com/hyakt/expo-multiple-media-imagepicker'
    },
    {
      name: 'emacs-dashboard-hackernews',
      image: data.hackernews.childImageSharp.fixed,
      date: new Date(2018, 12, 1),
      description: 'Hacker Newsを表示するEmacs Dashboard用のプラグイン',
      tags: ['Emacs lisp'],
      badge: <a href="https://melpa.org/#/dashboard-hackernews"><img src="https://melpa.org/packages/dashboard-hackernews-badge.svg" alt="melpa" height="18" /></a>,
      github: 'https://github.com/hyakt/emacs-dashboard-hackernews'
    },
    {
      name: 'hugo-plesure-theme',
      image: data.hugo.childImageSharp.fixed,
      date: new Date(2017, 11, 1),
      description: 'ブログジェネレータHugo用の明るいテーマ',
      tags: ['hugo', 'Stylus'],
      github: 'https://github.com/hyakt/hugo-theme-pleasure'
    },
    {
      name: 'この本いつ発売したっけ?',
      image: data.linebot.childImageSharp.fixed,
      date: new Date(2017, 8, 1),
      description: '本の最新巻がいつ発売されたか教えてくれるLine用Bot',
      tags: ['Node.js','Express','Google Books API','Now'],
      github: 'https://github.com/hyakt/when-was-thisbook-published'
    },
    {
      name: 'SHAPIO',
      image: data.shapio.childImageSharp.fixed,
      date: new Date(2016, 3, 1),
      description: 'テレビゲーム内のシチュエーションに合わせて変形するコントローラ',
      tags: ['Arduino', 'Servo', 'Potentiometer', 'BlueToothLowEnergy', 'Swift', 'JavaScript', 'Unity', 'C#'],
      url: 'https://dl.acm.org/citation.cfm?id=2810318'
    },
    {
      name: 'Enhancing Gaming Experience System Using See-Through HMD ',
      image: data.hmd.childImageSharp.fixed,
      date: new Date(2014, 3, 1),
      description: 'テレビゲームをプレイする時に透過型のHMDを装着することでゲームの楽しさを向上するシステム',
      tags: ['Unity', 'C#', 'Kinect', 'Python', 'Vuforia'],
      url: 'https://ci.nii.ac.jp/naid/110009861131/'
    },
    {
      name: '入れ替えても読めちゃうBot',
      image: data.twitterbot.childImageSharp.fixed,
      date: new Date(2014, 3, 1),
      description: '単語ごとの文字を入れ替えた文章をリプライするTwitter用Bot',
      tags: ['Java', 'MeCab', 'GoogleApp Engine'],
      github: 'https://github.com/hyakt/CambridgeBot'
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(1),
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 250px))',
      justifyContent: 'center',
      margin: rhythm(1)
    })
  }

  return (
    <Section title='Product'>
      <div css={styles.container}>
        {products.map((p: Product) => {
          return (
            <ProductCard key={p.name} {...p} />
          )
        })}
      </div>
    </Section>
  )
}
