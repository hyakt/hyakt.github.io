/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { css } from '@emotion/react'
import { rhythm } from '../utils/typography'

import { SectionHeader } from '../components/SectionHeader'

type Props = {
  title: string
}

export const Section: React.FC<Props> = (props) => {
  const styles = {
    container: css({
      padding: `${rhythm(2)} 0`
    })
  }

  return (
    <div css={styles.container}>
      <SectionHeader title={props.title} />
      {props.children}
    </div>
  )
}
