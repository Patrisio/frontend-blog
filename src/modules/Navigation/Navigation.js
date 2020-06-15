import React from 'react';
import { Link } from 'gatsby';
import NavigationSettings from './components/NavigationSettings.js';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const slugs = this.props.data.allMarkdownRemark.edges;

    return (
      <div className='navigation'>
        <div className='navigation__section-menu'>
          <div className='logo'>FrontendBlog</div>
          <ul className='menu-list'>
            {slugs.map((slugs) => (
              <li className='menu-list__item' key={slugs.node.id}>
                <Link className='menu-list__item--link' to={slugs.node.fields.slug}>Категории</Link>
              </li>
            ))}
          </ul>
        </div>
        <NavigationSettings />
      </div>
    );
  }
}