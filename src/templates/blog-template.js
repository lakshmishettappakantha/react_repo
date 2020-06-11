import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import { Link } from "gatsby"


const Blog = ({ data }) => {
    const { title, published, author, description: {childMarkdownRemark} } = data.post;

    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Published at: {published}</h4>
                    <h4>Author: {author}</h4>
                    <div dangerouslySetInnerHTML={{__html:childMarkdownRemark.html}} />
                    <Link to="/blog" className="btn-primary">all blogs</Link>
                </div>
            </section>
        </Layout>
    )
}


export const query = graphql`
query getPost($slug: String!){
    post: contentfulPost(slug:{eq:$slug}) {
        title
        published(formatString: "MMMM Do, YYYY")
        author
        description{
            childMarkdownRemark{
                html
            }
        }
    }
}
`;

export default Blog