import React from 'react'
import { css } from '@emotion/core'

import { Section } from '../components/Section'

export const About: React.FC = () => {
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
        <p>
          東京でフロントエンドエンジニアをやってます <br />
          大学院ではHuman Computer Interactionの研究をしてました
          <br />
        </p>
      </div>
    </Section>
  )
}
