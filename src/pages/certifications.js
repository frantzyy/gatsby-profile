import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import Badge from "../components/badge"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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

      
      {/* <p>testing</p>
      <div data-iframe-width="600" data-iframe-height="500" data-share-badge-id="56ca2218-26b9-437d-9060-2bf2b8b4c6e1" data-share-badge-host="https://www.credly.com"></div>
      <Helmet><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script></Helmet> */}
    </Layout>
  )
}
