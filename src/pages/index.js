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
  const {allAirtable:{nodes:projects}} = data
  console.log(data)
  return (
    <Layout>
      <Hero />
      <About />
      <Projects project={projects} title="latest projects" />
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
  }
`

export default HomePage
