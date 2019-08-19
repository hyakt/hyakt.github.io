import React from 'react'
import { css } from "@emotion/core"

interface Props {
  title: string
}

export default (props: Props) => {
  const styles = {
    header: css({
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
