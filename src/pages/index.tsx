import React from 'react'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { Skills } from '../sections/Skills'
import { Products } from '../sections/Products'
import { GithubStreak } from '../sections/GithubStreak'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Skills />
    <Products />
    <GithubStreak />
    <SEO title='Portfolio' />
    <Footer />
  </Layout>
)

export default IndexPage
