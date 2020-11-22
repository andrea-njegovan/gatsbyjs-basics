import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  const { contentfulProduct: product } = data

  return (
    <div>
      <h2>{product.title}</h2>
      <h2>${product.price}</h2>
    </div>
  )
}

export const query = graphql`
  {
    contentfulProduct(slug: { eq: "sectional-sofa" }) {
      title
      price
    }
  }
`

export default ComponentName
