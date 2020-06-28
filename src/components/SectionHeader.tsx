import React from 'react'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'

type Props = {
  title: string;
}

export const SectionHeader: React.FC<Props> = props => {
  const styles = {
    header: css({
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
      fontSize: '1.5rem',
      textAlign: 'center'
    })
  }

  return (
    <>
      <h2 css={styles.header}>{props.title}</h2>
    </>
  )
}
