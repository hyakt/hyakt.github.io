import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import SkillCard from '../components/SkillCard'

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
      emacs: file(relativePath: { eq: "skill/emacs.svg" }) {
        publicURL
      }
    }
  `)

  const skills: Array<Skill> = [
    {
      name: 'JavaScript/TypeScript',
      description: 'JavaScript/TypeScript',
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ],
      color: `${Colors.fg}`,
      backgroundColor: '#F7E032',
      image: data.javascript.publicURL
    },
    {
      name: 'Emacs',
      description: 'JavaScript/TypeScript',
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ],
      color: `${Colors.bubbles}`,
      backgroundColor: '#42205f',
      image: data.emacs.publicURL
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))',
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
