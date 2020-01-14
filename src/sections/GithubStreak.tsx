import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import GithubCalendar from '../components/GithubCalendar'

import { rhythm } from '../utils/typography'

export default () => {
  const data = useStaticQuery(
    graphql`
      query GithubStreakQuery {
        site {
          siteMetadata {
            socials {
              github
            }
          }
        }
      }
    `
  )

  const styles = {
    container: css({
      display: 'block',
      margin: rhythm(1)
    })
  }

  const username = data.site.siteMetadata.socials.github.replace(new RegExp('https://github.com/(.*)/'), '$1') as string

  return (
    <Section title='Github Streak'>
      <div css={styles.container}>
        <GithubCalendar user={username} />
      </div>
    </Section>
  )
}
