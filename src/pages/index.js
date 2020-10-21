import React from "react"
import { Link } from "gatsby"


import Nav from '../components/nav/index';
import Home from '../components/home';
import Featured from '../components/featured';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
  </Layout>
)

export default IndexPage
