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
    <h2>For sale!!!</h2>
    <h3>Contact: <a href="mailto:me@chadalen.com">me@chadalen.com</a></h3>
    </div>


  <style jsx>{`
  .content {  
    font-family: "Comic Sans MS", cursive, sans-serif
  }
  `}
  </style>

  </Layout>
)

export default IndexPage
