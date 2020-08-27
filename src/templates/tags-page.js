import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({pageContext}) => {
    const { tags, tagPostCounts } = pageContext
    return (
        <Layout pageTitle="All Tags">
            <SEO title="All Tags" keywords={['tags','topics']}/>
             <ul>
                {tags.map(tag => (
                    <li key={tag}>
                        <Button className="Tag-button" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge className="badge-tagPage">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    )


}

export default tagsPage