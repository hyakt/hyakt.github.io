import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import SkillCard from '../components/SkillCard'

import { rhythm } from '../utils/typography'
import { Skill } from '../utils/types'

export default () => {
  const skills: Array<Skill> = [
    {
      name: 'JavaScript/TypeScript',
      description: 'JavaScript/TypeScript',
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ]
    },
    {
      name: 'JavaScript/TypeScript',
      description: 'JavaScript/TypeScript',
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ]
    },
    {
      name: 'JavaScript/TypeScript',
      description: 'JavaScript/TypeScript',
      relations: ['node.js', 'koa.js', 'shipit', 'webpack', 'eslint', ]
    }
  ]

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(1),
      gridTemplateColumns: 'repeat(3, minmax(300px, 300px))',
      justifyContent: 'center',
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
