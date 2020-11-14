import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import Send from "../../static/assets/icons/send.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ChevronRight from "../components/chevronright"

const StyledPostWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;

  h4 {
    margin: 0;
    padding-left: 2rem;
    padding-bottom: 1rem;
    color: var(--linkTitleHover);
  }

  h4 + a {
    min-width: 100%;
    display: inline-block;
    padding: 0 2rem;
    border: 0.25rem solid var(--linkTitleHover);
    border-radius: 1rem;

    h2 {
      margin-top: 3.5rem;
      color: var(--linkTitleHover);
    }
  }

  h4 + a + a {
    h2 {
      margin-top: ${rhythm(3)};
    }
  }

  a {
    box-shadow: none;
  }

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const StyledLink = styled(Link)`
  :hover {
    h2 {
      color: var(--linkTitleHover);
    }
    svg polyline:nth-child(1) {
      opacity: 1;
    }
  }

  h2 {
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1 / 4)};
  }

  .link-description {
    color: var(--textNormal);
    font-style: italic;
    opacity: 0.8;
    margin-bottom: ${rhythm(1 / 4)};
  }

  .link-read-more {
    display: inline-flex;
    align-items: center;
    margin-bottom: ${rhythm(1.5)};
    font-weight: ${boldWeight};

    :hover svg polyline:nth-child(2),
    :hover svg polyline:nth-child(3) {
      opacity: 1;
    }

    svg {
      margin-left: ${rhythm(1 / 6)};

      polyline {
        opacity: 0;
        transition: 0.2s opacity ease-in-out;
      }

      polyline:nth-child(3) {
        transition-delay: 0.08s;
      }
    }
  }
`

const IndexLinks = styled.section`
  margin: ${rhythm(3)} auto;
  padding: 0 10px;
  max-width: 800px;

  a {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 20px;
    background: #fec150;
    color: #1a1103;
    transition: all 0.3s ease-in-out 0s;

    :hover {
      transform: scale(1.03);
      opacity: 0.9;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px -5px;

      svg {
        opacity: 0.5;
      }
    }
  }

  h2 {
    margin: 0;
    color: #1a1103;
  }

  p {
    font-style: italic;
    flex: 1 1;
    margin: 0;
    font-size: 1.25rem;
  }

  svg {
    margin: 0 0 0 auto;
    width: 50px;
    height: 50px;
    opacity: 0.25;
    transition: all 0.3s ease-in-out 0s;
  }
`

function IndexPage(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return (
          <Layout wrapperFormat="full" navStyle="hero">
            <SEO title="Articles making your developer life easier" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
            <Hero />
            <StyledPostWrapper>
              <h4>Most recent article</h4>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                console.log(node.fields.slug)
                return (
                  <StyledLink to={`/blog${node.fields.slug}`} key={node.fields.slug}>
                    <h2>{title}</h2>
                    <p
                      className="link-description"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <p className="link-read-more">
                      Read more
                      <ChevronRight />
                    </p>
                  </StyledLink>
                )
              })}
            </StyledPostWrapper>
            <IndexLinks>
              <Link to="/newsletter">
                <h2>Join the Newsletter</h2>
                <p>Stay up-to-date</p>
                <Send />
              </Link>
            </IndexLinks>
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
