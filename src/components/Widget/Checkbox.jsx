import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Checkbox.scss';

let { Component } = React;

class Checkbox extends Component {

  render() {
    return (
      <input name="" type="checkbox" value="">{this.props.checkboxLabel}</input>
    );
  }
}

export default withStyles(s)(Checkbox);

