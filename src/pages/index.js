import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import { Link } from "gatsby"
import Tips from "../components/Home/Tips"

export default function Home() {
  return (
      <Layout>
        <SimpleHero>
          <Banner title="Awesome Hampi" info="Come and explore Hampi, the city of ruins">
            <Link to="/places" className="btn-white">explore places</Link>
          </Banner>
        </SimpleHero>
        <About />
        <Tips />
      </Layout>
  )
}
