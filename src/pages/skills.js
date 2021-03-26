import React from "react"
import Layout from "../components/layout"
import Skill from "../components/skill"
import { useStaticQuery, graphql } from "gatsby"
import Item from "../components/item"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          skills {
            category
            skills
          }
        }
      }
    }
  `)
  const skills = data.site.siteMetadata.skills.map((item, index) => (
    <Skill key={index} category={item.category} skills={item.skills}></Skill>
  ))
  return (
    <Layout pageTitle="Skills" pageDescription="Learn more about my skills">
      {skills}
    </Layout>
  )
}
