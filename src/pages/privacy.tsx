import React from 'react'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import Privacy from '../contents/Privacy'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'

const PrivacyPage: React.FC = () => (
  <Layout>
    <Header />
    <Privacy />
    <SEO title='Privacy' />
    <Footer />
  </Layout>
)

export default PrivacyPage
