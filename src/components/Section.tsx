import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from '../utils/typography'

import SectionHeader from '../components/SectionHeader'

interface Props {
  title: string,
  children: any
}

export default (props: Props) => {
  const styles = {
    container: css({
      marginTop: `${rhythm(5)}`
    })
  }

  return (
    <div css={styles.container}>
      <SectionHeader title={props.title} />
      {props.children}
    </div>
  )
}
