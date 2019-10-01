import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={`/`}
          >
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
        <div className="container footer">
            <h3>A project by
            {` `}
            <a href="https://dribbble.com/uigate">uigate</a>
            </h3>
        </div>
        </footer>
      </div>
    )
  }
}

export default Layout
