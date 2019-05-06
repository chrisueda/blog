import React from 'react'
import { Link } from 'gatsby'

export default function Menu() {
  return (
    <div>
      <Link to="/blog" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View blog page">
        About
      </Link>
    </div>
  )
}
