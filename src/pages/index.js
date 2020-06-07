import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import { Link } from "gatsby"
import Tips from "../components/Home/Tips"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export const query = graphql`
query {
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;

export default function Home({ data }) {
  console.log(data)
  return (
      <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
          <Banner title="Awesome Hampi" info="Come and explore Hampi, the city of ruins">
            <Link to="/places" className="btn-white">explore places</Link>
          </Banner>
        </StyledHero>
        <About />
        <Tips />
      </Layout>
  )
}
