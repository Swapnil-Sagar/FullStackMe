/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const {slugify} = require('./src/util/utilityFunctions')
const authors = require('./src/util/authors')


exports.onCreateNode = ({ node, actions}) => {
    const {createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                     node{
                        frontmatter{
                            author
                        }
                        fields{
                            slug
                         }
                    }
                }
            }
        }
    
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node})=> {
            createPage({
                path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    //Passng slug for template to use to get posts
                    slug: node.fields.slug,
                    //Find author imageURL from authors and pass it to the single post template
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
                },
            })
        })
    })
}