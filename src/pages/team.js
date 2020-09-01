import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row} from 'reactstrap'
import viraj from '../images/virajimg.jpg'
import swapnil from '../images/swapnil.jpg'
import viral from '../images/viralimg.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Contributors">
    <SEO title="Team" keywords= {[`gatsby` , `application` , `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
      <img src={swapnil} style={ { maxWidth: '100%' }} alt="Swapnil profile"/>
      </div>
      <div className="col-md-8">
        <Card style={ { minHeight: '100%' }}>
          <CardBody>
          <CardTitle>{authors[0].name}</CardTitle>
          <CardText>{authors[0].bio}</CardText>
          <Button className="text-uppercase" color="dark" href={`/author/${slugify(authors[0].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={viraj} style={ { maxWidth: '100%' }} alt="Viraj profile"/>
      </div>
      <div className="col-md-8">
        <Card style={ { minHeight: '100%' }}>
          <CardBody>
          <CardTitle>{authors[1].name}</CardTitle>
          <CardText>{authors[1].bio}</CardText>
          <Button className="text-uppercase" color="warning" href={`/author/${slugify(authors[1].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
      <img src={viral} style={ { maxWidth: '100%' }} alt="Viral profile"/>
      </div>
      <div className="col-md-8">
        <Card style={ { minHeight: '100%' }}>
          <CardBody>
          <CardTitle>{authors[2].name}</CardTitle>
          <CardText>{authors[2].bio}</CardText>
          <Button className="text-uppercase" color="secondary" href={`/author/${slugify(authors[2].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
