const path = require('path');

// Preparing request to contentful
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    // Create pages for each blog, with data from contentful
    const getBlog = makeRequest(graphql, `
        {
        allContentfulBlog (
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allContentfulBlog.edges.forEach(({ node }) => {
            createPage({
                // Give each blog post its own url 
                path: `blog/${node.slug}`,
                // Create each page using this template file
                component: path.resolve(`src/templates/blog.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    // Create archive page for all blogs, with pagination
    const getArchive = makeRequest(graphql, `
        {
        allContentfulBlog (
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges;
        const blogsPerPage = 9;
        const numPages = Math.ceil(blogs.length / blogsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/archive.js"),
                context: {
                    limit: blogsPerPage,
                    skip: i * blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })
    });

    return Promise.all([
        getBlog,
        getArchive
    ])
};