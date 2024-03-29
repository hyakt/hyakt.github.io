import React, { useMemo } from 'react'
import { css, useTheme } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

import { Section } from '../components/Section'
import { SkillCard, Props as SkillCardProps } from '../components/SkillCard'
import { Carousel3D } from '../components/ui/Carousel3D'

import { rhythm } from '../utils/typography'

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
      nextjs: file(relativePath: { eq: "skill/javascript/nextjs.svg" }) {
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

  const theme = useTheme()

  const skills: SkillCardProps[] = useMemo(
    () => [
      {
        name: 'JavaScript',
        description: `chotto dekiru`,
        relations: [],
        color: theme.colors.stout,
        backgroundColor: '#FDD83C',
        image: (
          <Carousel3D
            images={[
              data.babel.publicURL,
              data.webpack.publicURL,
              data.react.publicURL,
              data.nextjs.publicURL,
              data.gatsby.publicURL,
              data.typescript.publicURL,
              data.nodejs.publicURL
            ]}
            width={60}
            height={50}
            reverse
          />
        )
      },
      {
        name: 'Infrastructure',
        description: 'kanzenn ni rikaishita',
        relations: [],
        color: theme.colors.pilsner,
        backgroundColor: theme.colors.stout,
        image: (
          <Carousel3D
            images={[
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
    ],
    []
  )

  const styles = {
    container: css({
      display: 'grid',
      gridGap: rhythm(3),
      gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 270px))',
      justifyContent: 'center',
      justifyAlign: 'center',
      margin: rhythm(1)
    })
  }

  return (
    <Section title='Skills'>
      <div css={styles.container}>
        {skills.map((s) => {
          return <SkillCard key={s.name} {...s} />
        })}
      </div>
    </Section>
  )
}
