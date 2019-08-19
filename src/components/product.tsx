import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import SectionHeader from './sectionheader'
import Colors from '../constants/Colors'

export default () => {

  const styles = {
    header: css({
      fontSize: '1.5rem',
      textAlign: 'center'
    }),
    container: css({
      display: 'flex',
      height: '20rem',
      backgroundColor: Colors.bubbles,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center'
    })
  }

  return (
    <>
      <SectionHeader title='Product'/>
      <div></div>
    </>
  )
  }
