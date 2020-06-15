import React from 'react'
import { graphql } from 'gatsby'
import PageContainer from '../modules/PageContainer/PageContainer.js';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <PageContainer data={data}>
      <div className='main-content'>
        <div className='article-content' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PageContainer>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark (filter: { fields: { slug: { regex: "//categories//" } }}) {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`