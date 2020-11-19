import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        Hello from gatsby
      </h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
