import React from 'react'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'

interface Props {
  title: string;
}

export default (props: Props) => {
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
