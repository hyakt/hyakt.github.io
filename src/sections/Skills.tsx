import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import SkillCard from '../components/SkillCard'
import CarouselSVG from '../components/CarouselSVG'

import { rhythm } from '../utils/typography'
import { Skill } from '../utils/types'
import Colors from '../constants/Colors'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      javascript: file(relativePath: { eq: "skill/javascript.svg" }) {
        publicURL
      },
      typescript: file(relativePath: { eq: "skill/typescript.svg" }) {
        publicURL
      },
      react: file(relativePath: {eq: "skill/react.svg"}) {
        publicURL
      },
      vuejs: file(relativePath: {eq: "skill/vuejs.svg"}) {
        publicURL
      },
      nodejs: file(relativePath: {eq: "skill/nodejs.svg"}) {
        publicURL
      },
      webpack: file(relativePath: {eq: "skill/webpack.svg"}) {
        publicURL
      },
      gatsby: file(relativePath: {eq: "skill/gatsby.svg"}) {
        publicURL
      },
      yarn: file(relativePath: {eq: "skill/yarn.svg"}) {
        publicURL
      },
      npm: file(relativePath: {eq: "skill/npm.svg"}) {
        publicURL
      },
      emacs: file(relativePath: { eq: "skill/emacs.svg" }) {
        publicURL
      }
    }
  `)


  const skills: Array<Skill> = [
    {
      name: 'JavaScript',
      description: `ReactでWebSite、VuejsでChromeExtension、\n
                    NodeでAPIやLineBot、\n
                    ReactNativeでiOSAppなど開発してます。\n`,
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ],
      color: `${Colors.fg}`,
      backgroundColor: '#F7E032',
      image: <CarouselSVG images={[data.javascript.publicURL, data.typescript.publicURL, data.react.publicURL, data.vuejs.publicURL, data.nodejs.publicURL, data.webpack.publicURL, data.gatsby.publicURL, data.yarn.publicURL, data.npm.publicURL]} width={60} height={50} />
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 270px))',
      justifyContent: 'center',
      justifyAlign: 'center',
      margin: rhythm(1)
    })
  }

  return (
    <Section title='Skills'>
      <div css={styles.container}>
        {skills.map((s: Skill) => {
          return (
            <SkillCard {...s}/>
          )
        })}
      </div>
    </Section>
  )
}
