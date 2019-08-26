import React from "react"

import Layout from '../components/Layout'
import Header from '../components/Header'
import Privacy from '../content/Privacy'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <Header />
    <Privacy />
    <SEO title='Privacy' />
    <Footer />
  </Layout>
)
