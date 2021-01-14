import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          objective
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Objective" pageDescription="Learn more about me">
      <div
        dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.objective }}
      />
    </Layout>
  )
}
