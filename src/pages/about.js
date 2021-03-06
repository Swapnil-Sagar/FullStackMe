import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import aboutswapnil from '../images/about.jpg'

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    <div className="col-md-8">
        <img src={aboutswapnil} style={{ maxWidth: '70%' }} alt="Swapnil profile"/>
      </div>
      <div className="col-md-8">
    <p style={{ color: '#FFFF'}} >
    <br></br>Hi, I am Swapnil Sagar.<br></br>

    <br></br>I am a Final year Computer Science and Engneering Student whose passion is to learn and code new stuffs.<br></br>
      <br></br>I run on Caffeine and I conquer bugs.<br></br>

      <br></br> My obejctive is to pursue my career in an organization with performance-oriented environment for achievement of 
      personal advancement. Seeking for an entry-level position to begin my career in a high-level professional environment.
    </p>
    <h5 style={{ color: '#FFFF'}}>To know more about me, visit my site.</h5>
    <a style={{ color: '#E5C9F2'}} href="https://swapnilsagar.netlify.app/" target="_blank" rel="nofollow noopener noreferrer">Swapnil Sagar Portfolio</a>
    <p style={{ color: '#FF0A78'}} >
    <br></br>If you want to upload your post here and get featured then just contact me on any social media found below <br></br>
    </p>
    </div></div>
  </Layout>
)

export default AboutPage