import React from 'react'
import Title from "../Title"
import styles from "../../css/items.module.css"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import Place from "../Places/Place"

const getFeaturedPlaces = graphql`
query{
    featuredPlaces: allContentfulTourismGatsbyData(filter:{featured:{eq:true}}){
        edges{
        node{
            contentful_id
            name
            slug
            timeRequired
            timings
            entryFees
            featured
            images{
                fluid{
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
        }
    }
}
`

const FeaturedPlaces = () => {
    const response = useStaticQuery(getFeaturedPlaces);
    const places = response.featuredPlaces.edges;
    return (
        <section className={styles.places}>
            <Title title="featured" subtitle="places" />
            <div className={styles.center}>
                {places.map(({ node }) => {
                    return <Place key={node.contentful_id} place={node} />
                })}
            </div>
            <Link to="/places" className="btn-primary">
                all places
            </Link>
        </section>
    )
}

export default FeaturedPlaces
