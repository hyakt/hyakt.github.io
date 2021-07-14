import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import GithubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

import { Section } from '../components/Section'
import Colors from '../constants/Colors'

import { rhythm } from '../utils/typography'

export const GithubStreak: React.FC = () => {
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
      textAlign: 'center'
    })
  }

  const theme = {
    background: 'transparent',
    text: Colors.stout,
    grade4: '#0D0D0D',
    grade3: '#593825',
    grade2: '#8C512E',
    grade1: '#BF8C60',
    grade0: Colors.bubbles
  }

  const username = data.site.siteMetadata.socials.github.replace(
    new RegExp('https://github.com/(.*)/'),
    '$1'
  ) as string

  return (
    <Section title='Github Streak'>
      <div css={styles.container}>
        <GithubCalendar
          username={username}
          theme={theme}
          blockSize={9}
          blockMargin={5}
        >
          <ReactTooltip delayShow={50} html />
        </GithubCalendar>
      </div>
    </Section>
  )
}
