import React from 'react';

import Navigation from '../Navigation/Navigation.js';

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const children = this.props.children;
    const data = this.props.data

    return (
      <>
        <Navigation data={data}/>
        {children}
      </>
    )
  }
}