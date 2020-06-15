import React from 'react';

import Categories from '../../components/Categories/Categories.js';

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const data = props.data;

    return(
      <div className='main-content'>
        <Categories data={data}/>
      </div>
    );
  }
}