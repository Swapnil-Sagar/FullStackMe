import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageTitle="Oops, Something went wrong.. Plz check the link and try again or contract the developer for any issue at https://swapnilsagar.netlify.app/">
    <SEO title="404: Not found" />
    <Link className="btn btn-secondary text-uppercase" to={'/'}>
      Go home
    </Link>
  </Layout>
)

export default NotFoundPage