import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../sections/About'
import Product from '../sections/Product'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Product />
    <SEO title='Home' />
    <Footer />
  </Layout>
)

export default IndexPage
