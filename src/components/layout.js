
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="content-wrapper"
      >
        <main>{children}</main>
      </div>

      <style jsx>{`
        .content-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>

      <style jsx global>{`
        html, body, #___gatsby, #gatsby-focus-wrapper, .content-wrapper {
          height: 100%;
        }
      `}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
