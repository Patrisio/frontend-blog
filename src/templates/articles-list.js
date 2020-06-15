import React from "react"
import { graphql, Link } from "gatsby"

import JavascriptSvgIcon from '../../public/svg-icons/javascript-icon.svg';
import VueSvgIcon from '../../public/svg-icons/vue-icon.svg';
import ReactSvgIcon from '../../public/svg-icons/react-icon.svg';

export default function ArticlesList({ data }) {
  const nodes = data.allMarkdownRemark.edges;

  return (
    <ul className='articles'>
      {nodes.map(({node}) => {
        const route = `${node.fields.articlesPrefix}/${node.fields.articleName}`;
        const iconComponent = () => {
          switch (node.frontmatter.component) {
            case 'javascript':
              return <JavascriptSvgIcon
                        width='20'
                        height='20'
                      />
            case 'react':
              return <ReactSvgIcon
                        width='20'
                        height='20'
                      />
            case 'vue':
              return <VueSvgIcon
                        width='20'
                        height='20'
                      />
          }
        }

        return (
          <li key={node.id} className='article'>
            <Link className='article__link' to={route}>
              <header className='article__header'>
                <h4 className='article__title'>{node.frontmatter.title}</h4>
              </header>
              <div className='article__body'>
                <p className='article__description'>
                  {node.frontmatter.description}
                </p>
              </div>
              <footer className='article__footer'>
                {iconComponent()}
                <div class='article__time-to-read'>
                  {node.timeToRead}
                </div>
              </footer>
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export const query = graphql`
  query ($route: String) {
    allMarkdownRemark (filter: { fields: { articlesPrefix: { eq:  $route } } }) {
      edges {
        node {
          id
          fields {
            slug
            path
            articlesPrefix
            articleName
          }
          html
          frontmatter {
            title
            description
            component
          }
          timeToRead
        }
      }
    }
  }
`