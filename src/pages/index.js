import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content" style={{ textAlign: 'center' }}>
    <h1>
      Soundpuff.com
    </h1>
    <h2>For sale!</h2>
    </div>


  <style jsx>{`
  .content {
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
  }
  `}
  </style>

  </Layout>
)

export default IndexPage
