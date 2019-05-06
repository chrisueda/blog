import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import theme from '../../config/theme'

export default ({ data: { site } }) => (
  <Layout site={site}>
    <Container>
      <p>
        Hello! I am a frontend developer living and working in San Francisco.
      </p>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
