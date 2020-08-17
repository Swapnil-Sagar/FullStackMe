import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="OOpssss.... kuch nai hai ...NotFound">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to= {'/'}>
      Go Home
      </Link>
  </Layout>
)

export default NotFoundPage
