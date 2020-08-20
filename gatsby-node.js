const path = require('path')
const {slugify} = require('./src/util/utilityFunctions')
const authors = require('./src/util/authors')
const _ = require('lodash')



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
    

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage : path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js'),
        postList: path.resolve('src/templates/post-list.js'),
        authorPosts: path.resolve('src/templates/author-posts.js')
    }

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                     node{
                        frontmatter{
                            author
                            tags
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

        //Create single post pages
        posts.forEach(({node})=> {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    //Passng slug for template to use to get posts
                    slug: node.fields.slug,
                    //Find author imageURL from authors and pass it to the single post template
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
                },
            })
        })

        let tags = []
        _.each(posts, edge => {
           if(_.get(edge, 'node.frontmatter.tags')){
            tags = tags.concat(edge.node.frontmatter.tags)
           }
        })

        //Gwt all Tags

        let tagPostCounts = {}
        tags.forEach(tag => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        })

        tags = _.uniq(tags)

        //Create Tags Page
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts,
            },

        })

        //Creates tag post page
        tags.forEach(tag => {
            createPage({
                path: `/tag/${(slugify(tag))}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            })
        })

        const postsPerPage = 2
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numberOfPages }).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1
 
            if (isFirstPage) return

            createPage({
                path: `/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numberOfPages: numberOfPages,
                    currentPage: currentPage,
                },
            })
        })
        
        authors.forEach(author => {
            createPage({
                path: `/author/${slugify(author.name)}`,
                component: templates.authorPosts,
                context: {
                    authorName: author.name,
                    imageUrl: author.imageUrl
                }
            })
        })
    })
}