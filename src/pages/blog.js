import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"

export const query = graphql`
query {
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

const blog = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <BlogList />
        </Layout>
    )
}

export default blog
