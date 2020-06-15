import React from "react";
import { graphql } from "gatsby";
import PageContainer from '../modules/PageContainer/PageContainer.js';
import MainContent from '../modules/MainContent/MainContent.js';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const data = props.data
    
    return (
      <PageContainer data={data}>
        <MainContent data={data} />
      </PageContainer>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark (filter: { fields: { slug: { regex: "//categories//" } }}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            component
            link
          }
          fields {
            slug
            path
          }
        }
      }
    }
  }
`