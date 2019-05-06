import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import theme from '../../config/theme'

const Categories = ({ pageContext, data, site }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx
  console.log(data.allMdx)
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } with "${category}"`

  return (
    <Layout site={data.site}>
      <Container>
        <h1>{categoryHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/*
        This links to a page that does not yet exist.
        We'll come back to it!
      */}
        <Link to="/categories">All tags</Link>
      </Container>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    site {
      ...site
    }
  }
`
