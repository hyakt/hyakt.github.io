import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'

import SectionHeader from '../components/SectionHeader'

interface Props {
  title: string;
  children: any;
}

export default (props: Props) => {
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
