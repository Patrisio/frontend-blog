import React from "react";
import Navigation from '../modules/Navigation.js';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}
