import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    <p >
      Hi, I am Swapnil Sagar.<br></br>

      I am a Final year Computer Science and Engneering Student whose passion is to learn and code new stuffs.
      I run on Caffeine and I conquer bugs.<br></br>

      My obejctive is to pursue my career in an organization with performance-oriented environment for achievement of personal advancement. Seeking for an entry-level position to begin my career in a high-level professional environment.
    </p></div>
  </Layout>
)

export default AboutPage