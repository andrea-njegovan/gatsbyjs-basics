import React from "react"
import { StaticQuery, graphql } from "gatsby"

//Using StaticQuery (old way)

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            person {
              age
              name
            }
            title
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
