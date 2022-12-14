import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from '../components'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
  } = data
  console.log(data)
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="latest projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: {table: {eq: "Projects"}}
      limit: 3
      sort: {fields: data___date, order: DESC}
    ) {
      nodes {
        id
        data {
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
          name
          type
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  height: 150
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
