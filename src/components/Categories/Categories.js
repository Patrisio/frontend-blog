import React from 'react';
import { Link } from 'gatsby';

import JavascriptSvgIcon from '../../../public/svg-icons/javascript-icon.svg';
import VueSvgIcon from '../../../public/svg-icons/vue-icon.svg';
import ReactSvgIcon from '../../../public/svg-icons/react-icon.svg';
import ArrawRightIcon from '../../../public/svg-icons/arraw-right.svg';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data.allMarkdownRemark.edges;
    
    return(
      <ul className='cards'>
        {
          data.map(({node}) => {
            const iconComponent = () => {
              switch (node.frontmatter.component) {
                case 'javascript':
                  return <JavascriptSvgIcon/>
                case 'react':
                  return <ReactSvgIcon />
                case 'vue':
                  return <VueSvgIcon />
              }
            }

            return (
              <li className='card' key={node.id}>
                <Link className='card-link' to={node.fields.path}>
                  <header className='card__header'>
                    <figure className='card__icon'>
                      {iconComponent()}
                    </figure>
                    <h4 className='card__title'>{node.frontmatter.title}</h4>
                  </header>
                  <div className='card__body'>
                    <p className='card__description'>{node.frontmatter.description}</p>
                  </div>
                  <footer className='card__footer'>
                    <p className='card__link'>{node.frontmatter.link}</p>
                    <ArrawRightIcon />
                  </footer>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}