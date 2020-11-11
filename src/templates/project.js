import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import "./blog.css"

const ProjectTemplate = props => {
  return (
    <Layout>
      <SEO
        title={props.data.contentfulProject.seoTitle}
        description={props.data.contentfulProject.seoDescription}
        keywords={props.data.contentfulProject.seoKeywords}
      />
      <Nav />
      <div className="blog__header">
        <div
          className="blog__hero"
          style={{
            backgroundImage: `url(${props.data.contentfulProject.featuredMedia.fluid.src})`,
          }}
        ></div>
        <div className="blog__info">
          <h1 className="blog__title">{props.data.contentfulProject.title}</h1>
        </div>
      </div>
      <div className="blog__wrapper">
        <div className="blog__content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.data.contentfulProject.content.childMarkdownRemark.html}`,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
export default ProjectTemplate

// $id is brought in through the context in gatsby-node.js
export const query = graphql`
  query ProjectTemplate($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      seoDescription
      seoAuthor
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredMedia {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`
