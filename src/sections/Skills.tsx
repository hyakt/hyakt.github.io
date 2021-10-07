import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

import { Section } from '../components/Section'
import { SkillCard } from '../components/SkillCard'
import { Carousel3D } from '../components/ui/Carousel3D'

import { rhythm } from '../utils/typography'
import { Skill } from '../types'
import colors from '../constants/colors'

export const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      javascript: file(
        relativePath: { eq: "skill/javascript/javascript.svg" }
      ) {
        publicURL
      }
      typescript: file(
        relativePath: { eq: "skill/javascript/typescript.svg" }
      ) {
        publicURL
      }
      react: file(relativePath: { eq: "skill/javascript/react.svg" }) {
        publicURL
      }
      nextjs: file(relativePath: { eq: "skill/javascript/next.svg" }) {
        publicURL
      }
      babel: file(relativePath: { eq: "skill/javascript/babel.svg" }) {
        publicURL
      }
      nodejs: file(relativePath: { eq: "skill/javascript/nodejs.svg" }) {
        publicURL
      }
      webpack: file(relativePath: { eq: "skill/javascript/webpack.svg" }) {
        publicURL
      }
      expo: file(relativePath: { eq: "skill/javascript/expo.svg" }) {
        publicURL
      }
      gatsby: file(relativePath: { eq: "skill/javascript/gatsby.svg" }) {
        publicURL
      }
      yarn: file(relativePath: { eq: "skill/javascript/yarn.svg" }) {
        publicURL
      }
      npm: file(relativePath: { eq: "skill/javascript/npm.svg" }) {
        publicURL
      }
      ansible: file(relativePath: { eq: "skill/infrastructure/ansible.svg" }) {
        publicURL
      }
      aws: file(relativePath: { eq: "skill/infrastructure/aws.svg" }) {
        publicURL
      }
      centos: file(relativePath: { eq: "skill/infrastructure/centos.svg" }) {
        publicURL
      }
      debian: file(relativePath: { eq: "skill/infrastructure/debian.svg" }) {
        publicURL
      }
      docker: file(relativePath: { eq: "skill/infrastructure/docker.svg" }) {
        publicURL
      }
      nginx: file(relativePath: { eq: "skill/infrastructure/nginx.svg" }) {
        publicURL
      }
      firebase: file(
        relativePath: { eq: "skill/infrastructure/firebase.svg" }
      ) {
        publicURL
      }
      gcp: file(relativePath: { eq: "skill/infrastructure/gcp.svg" }) {
        publicURL
      }
      postgres: file(
        relativePath: { eq: "skill/infrastructure/postgres.svg" }
      ) {
        publicURL
      }
      redis: file(relativePath: { eq: "skill/infrastructure/redis.svg" }) {
        publicURL
      }
      emacs: file(relativePath: { eq: "skill/emacs.svg" }) {
        publicURL
      }
    }
  `)

  const skills: Array<Skill> = [
    {
      name: 'Frontend',
      description: ``,
      relations: [],
      color: `${colors.fg}`,
      backgroundColor: '#F7E032',
      image: (
        <Carousel3D
          images={[
            data.npm.publicURL,
            data.expo.publicURL,
            data.babel.publicURL,
            data.gatsby.publicURL,
            data.webpack.publicURL,
            data.react.publicURL,
            data.nextjs.publicURL,
            data.typescript.publicURL
          ]}
          width={60}
          height={50}
        />
      )
    },
    {
      name: 'Backend',
      description: ``,
      relations: [],
      color: `#fff`,
      backgroundColor: '#ccc',
      image: (
        <Carousel3D
          images={[
            data.nodejs.publicURL,
            data.aws.publicURL,
            data.gcp.publicURL,
            data.firebase.publicURL,
            data.postgres.publicURL,
            data.redis.publicURL,
            data.docker.publicURL
          ]}
          width={60}
          height={50}
          reverse
        />
      )
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
          return <SkillCard key={s.name} {...s} />
        })}
      </div>
    </Section>
  )
}
