import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'
import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <Header />
    <Product />
    <SEO title='Home' />
    <Footer />
  </Layout>
)

export default IndexPage
