import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import swapnil from '../images/swapnil.jpg'

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    <div className="col-md-6">
        <img src={swapnil} style={{ maxWidth: '80%' }} alt="Swapnil profile"/>
      </div>
      <div className="col-md-6">
    <p style={{ color: '#FFFF'}} >
    <br></br>Hi, I am Swapnil Sagar.<br></br>

    <br></br>I am a Final year Computer Science and Engneering Student whose passion is to learn and code new stuffs.<br></br>
      <br></br>I run on Caffeine and I conquer bugs.<br></br>

      <br></br> My obejctive is to pursue my career in an organization with performance-oriented environment for achievement of personal advancement. Seeking for an entry-level position to begin my career in a high-level professional environment.
    </p>
    </div></div>
  </Layout>
)

export default AboutPage