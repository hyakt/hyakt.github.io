import React from "react"

import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Products from '../sections/Products'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Skills />
    <Products />
    <SEO title='Index' />
    <Footer />
  </Layout>
)

export default IndexPage
