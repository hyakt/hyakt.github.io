import React, { useMemo } from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

import { Section } from '../components/Section'
import {
  ProductCard,
  Props as ProductCardProps
} from '../components/ProductCard'

import { rhythm } from '../utils/typography'

export const Products: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      laserwave: file(relativePath: { eq: "product/laserwave.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      portfolio: file(relativePath: { eq: "product/portfolio.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      regist: file(relativePath: { eq: "product/regist.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      picker: file(relativePath: { eq: "product/picker.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      hackernews: file(relativePath: { eq: "product/hackernews.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      linebot: file(relativePath: { eq: "product/linebot.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      hugo: file(relativePath: { eq: "product/hugo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      shapio: file(relativePath: { eq: "product/shapio.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      hmd: file(relativePath: { eq: "product/hmd.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
      twitterbot: file(relativePath: { eq: "product/twitterbot.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, height: 250)
        }
      }
    }
  `)

  const products: ProductCardProps[] = useMemo(
    () => [
      {
        name: 'laserwave-theme(emacs-doom-themes)',
        image: data.laserwave.childImageSharp.gatsbyImageData,
        alt: 'laserwave',
        date: new Date(2019, 10, 27),
        description:
          'An clean 80s synthwave / outrun emacs theme inspired by VS Code laserwave.',
        tags: ['Emacs lisp'],
        github:
          'https://github.com/hlissner/emacs-doom-themes/blob/master/themes/doom-laserwave-theme.el'
      },
      {
        name: 'portfolio',
        image: data.portfolio.childImageSharp.gatsbyImageData,
        alt: 'portfolio',
        date: new Date(2019, 8, 1),
        description: 'Gatsbyで作成した🍺をテーマにしたポートフォリオ',
        tags: ['Gatsby', 'React', 'emotion', 'TypeScript', 'GraphQL'],
        url: 'https://www.gatsbyjs.org/showcase/hyakt.dev',
        github: 'https://github.com/hyakt/hyakt.github.io'
      },
      {
        name: 'regist',
        image: data.regist.childImageSharp.gatsbyImageData,
        alt: 'regist',
        date: new Date(2019, 7, 1),
        description: 'ReactNativeで作成したGithub Gistビューア',
        tags: ['ReactNative', 'expo', 'Github API', 'JavaScript', 'Sentry'],
        badge: (
          <a href='https://apps.apple.com/us/app/regist/id1472456939?mt=8'>
            <img
              src='https://linkmaker.itunes.apple.com/assets/shared/badges/ja-jp/appstore-sm.svg'
              alt='appstore'
              height='18'
            />
          </a>
        )
      },
      {
        name: 'expo-multiple-media-imagepicker',
        image: data.picker.childImageSharp.gatsbyImageData,
        alt: 'expo-multiple-media-imagepicker',
        date: new Date(2019, 6, 1),
        description: 'expoのMediaLibraryを利用した、複数選択可能なimagepicker',
        tags: ['ReactNative', 'expo', 'JavaScript'],
        badge: (
          <a href='https://badge.fury.io/js/expo-multiple-media-imagepicker'>
            <img
              src='https://badge.fury.io/js/expo-multiple-media-imagepicker.svg'
              alt='npm version'
              height='18'
            />
          </a>
        ),
        github: 'https://github.com/hyakt/expo-multiple-media-imagepicker'
      },
      {
        name: 'emacs-dashboard-hackernews',
        image: data.hackernews.childImageSharp.gatsbyImageData,
        alt: 'emacs-dashboard-hackernews',
        date: new Date(2018, 12, 1),
        description: 'Hacker Newsを表示するEmacs Dashboard用のプラグイン',
        tags: ['Emacs lisp'],
        badge: (
          <a href='https://melpa.org/#/dashboard-hackernews'>
            <img
              src='https://melpa.org/packages/dashboard-hackernews-badge.svg'
              alt='melpa'
              height='18'
            />
          </a>
        ),
        github: 'https://github.com/hyakt/emacs-dashboard-hackernews'
      },
      {
        name: 'hugo-plesure-theme',
        image: data.hugo.childImageSharp.gatsbyImageData,
        alt: 'hugo-plesure-theme',
        date: new Date(2017, 11, 1),
        description: 'Hugo用の明るいテーマ',
        tags: ['hugo', 'Stylus'],
        github: 'https://github.com/hyakt/hugo-theme-pleasure'
      },
      {
        name: 'この本いつ発売したっけ?',
        image: data.linebot.childImageSharp.gatsbyImageData,
        alt: 'この本いつ発売したっけ',
        date: new Date(2017, 8, 1),
        description: '本の最新巻がいつ発売されたか教えてくれるLine用Bot',
        tags: ['Node.js', 'Express', 'Google Books API', 'Now'],
        github: 'https://github.com/hyakt/when-was-thisbook-published'
      },
      {
        name: 'SHAPIO',
        image: data.shapio.childImageSharp.gatsbyImageData,
        alt: 'shapio',
        date: new Date(2016, 3, 1),
        description:
          'テレビゲーム内のシチュエーションに合わせて変形するコントローラ',
        tags: ['Arduino', 'BLE', 'Swift', 'JavaScript', 'Unity', 'C#'],
        url: 'https://dl.acm.org/citation.cfm?id=2810318'
      },
      {
        name: 'Enhancing Gaming Experience System Using See-Through HMD ',
        image: data.hmd.childImageSharp.gatsbyImageData,
        alt: 'hmd',
        date: new Date(2014, 3, 1),
        description:
          'テレビゲームをプレイする時に透過型のHMDを装着することでゲームの楽しさを向上するシステム',
        tags: ['Unity', 'C#', 'Kinect', 'Python', 'Vuforia'],
        url: 'https://ci.nii.ac.jp/naid/110009861131/'
      },
      {
        name: '入れ替えても読めちゃうBot',
        image: data.twitterbot.childImageSharp.gatsbyImageData,
        alt: '入れ替えても読めちゃうBot',
        date: new Date(2014, 3, 1),
        description: '単語ごとの文字を入れ替えた文章をリプライするTwitter用Bot',
        tags: ['Java', 'MeCab', 'GoogleApp Engine'],
        github: 'https://github.com/hyakt/CambridgeBot'
      }
    ],
    [data]
  )

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(1),
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
      justifyContent: 'center',
      justifyItems: 'center'
    }),
    wrapper: css({
      margin: '0 auto',
      maxWidth: '1200px'
    })
  }

  return (
    <Section title='Products'>
      <div css={styles.wrapper}>
        <div css={styles.container}>
          {products.map((p) => {
            return <ProductCard key={p.name} {...p} />
          })}
        </div>
      </div>
    </Section>
  )
}
