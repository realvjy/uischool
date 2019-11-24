import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <header className="hero_section">
        <div className="container">
          <div className="hero_details">
            <img src="/logo.svg"/>
            <div className="form">
              <h3>&nbsp;Coming Soon 2020</h3>
            </div>
          </div>
        </div>
        <div className="container footer">
            <div className="credit">
              <h3>Initiated by
              {` `}
              <a href="https://vijayverma.co">vijay verma.</a>
              </h3>
            </div>
            <div className="project">
              <h3>Project by
              {` `}
              <a href="https://dribbble.com/uigate">uigate</a>
              </h3>
            </div>
        </div>
        </header>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            source
            category
            link
            tags
            time
          }
        }
      }
    }
  }
`
