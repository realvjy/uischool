import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <header className="hero_section">
        <div className="container s_logo">
          <a href="/"><img src="uis.svg"/></a>
        </div>
        <div className="container">
          <div className="curator_head">
            <h1>Curator</h1>
          </div>
        </div>
        </header>
        <section className="curators_section">
          <div className="container">
            <div className="curators_list">
              <div className="curator_box">
                <div className="media">
                  <img src="/vjy.jpeg"/>
                </div>
                <div className="content_wrapper">
                  <div className="content">
                    <div className="meta_info">
                    <h2>vijay verma.</h2>
                    <h3>Lead Product Designer</h3>
                    <p>Currently, I’m leading design and building inclusive design language system at Zomato.</p>
                    </div>
                    <div className="social">
                      <ul>
                        <li><a href="https://vijayverma.co">W</a></li>
                        <li><a href="https://vijayverma.co">0</a></li>
                        <li><a href="https://vijayverma.co">0</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="curator_box">
                <div className="media">
                  <img src="/rohan.png"/>
                </div>
                <div className="content_wrapper">
                  <div className="content">
                    <div className="meta_info">
                    <h2>Rohan Mishra</h2>
                    <h3>Product Designer</h3>
                    <p>Product and UI/UX Designer focused on creating digital experiences that make peoples life easier around digital products.</p>
                    </div>
                    <div className="social">
                      <ul>
                        <li><a href="https://rohanmishra.design">W</a></li>
                        <li><a href="https://rohanmishra.design">0</a></li>
                        <li><a href="https://rohanmishra.design">0</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
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
  }
`
