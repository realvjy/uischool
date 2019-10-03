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
            <h1>We are creating the next generation designers</h1>
            <div className="form">
              Comming Soon
            </div>
          </div>
        </div>
        </header>
        <div className="container featured_head">
          <h1>Featured Read</h1>
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <>
              <section className="featured_section">
                <div className="container">

                  <article key={node.fields.slug}>
                    <div className="article_box">
                      <ul className="tag_list">
                      {node.frontmatter.tags.map(tag => (
                        <li key={tag}>
                            {tag}
                        </li>
                      ))}
                      </ul>
                      <a href={node.frontmatter.link} target="__blank">
                        <h2>
                          {title}
                        </h2>
                        <div className="meta_info">
                          <div className="credit">
                            <h4>Author <strong>{node.frontmatter.author}</strong></h4> • <h4>{node.frontmatter.time}</h4>
                          </div>
                          <div className="source">
                            <img src="/anchor.svg"/>{node.frontmatter.source}
                          </div>
                        </div>
                      </a>
                      </div>
                  </article>
                </div>
              </section>
            </>
          )
        })}
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
