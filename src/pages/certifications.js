import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import Badge from "../components/badge"
import { useStaticQuery, graphql } from "gatsby"

// import Img from "gatsby-image" // to take image data and render it

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          certifications {
            vendor
            type
            when
            certID
            badge
          }
        }
      }
    }
  `)

  const certifications = data.site.siteMetadata.certifications.map(
    (item, index) => (
      <table>
        <tr>
          <td style={{ width: "140px" }}>
            <Badge name={item.badge}></Badge>
          </td>
          <td>
            <Item
              key={index}
              name={item.type}
              when={item.when}
              org={item.vendor}
              moreInfo={item.certID}
            />
          </td>
        </tr>
      </table>
    )
  )

  return (
    <Layout
      pageTitle="Certifications"
      pageDescription="Certifications I've obtained."
    >
      {certifications}
    </Layout>
  )
}
