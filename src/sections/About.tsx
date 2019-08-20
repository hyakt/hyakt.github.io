import React from 'react'
import { css } from '@emotion/core'

import Section from '../components/Section'

export default () => {
  const styles = {
    container: css({
      display: 'flex',
      justifyContent: 'center',
      padding: '0 1rem'
    })
  }

  return (
    <Section title='About me'>
      <div css={styles.container}>
        <div>
          東京でソフトウェアエンジニアをやってます <br />
          大学・大学院ではHuman-Computer Interactionの研究をしてました<br />
        </div>
      </div>
    </Section>
  )
}
